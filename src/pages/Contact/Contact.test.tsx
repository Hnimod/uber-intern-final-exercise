import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

jest.mock('../../layouts/BackgroundImage', () => 'BackgroundImage');

test('match snapshot', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('input field render correctly', () => {
  const { queryByTestId } = render(<Contact />);
  const input = queryByTestId('contactInput');
  expect(input).toBeTruthy();
});

test('show error text when not enter input field', async () => {
  const { queryByTestId, getByText } = render(<Contact />);
  const input = queryByTestId('contactInput') as HTMLInputElement;
  fireEvent.blur(input);
  let err;
  await waitFor(() => {
    err = getByText('Please enter your name');
  });
  expect(err).toBeTruthy();
});

test('input field recieve correct value from user', async () => {
  const { queryByTestId } = render(<Contact />);
  const input = queryByTestId('contactInput') as HTMLInputElement;
  await userEvent.type(input, 'Minh', { delay: 1 });
  expect(input.value).toBe('Minh');
});

test('data submit correctly', async () => {
  const handleSubmit = jest.fn();
  const { queryByTestId, queryByRole } = render(
    <Contact onSubmitForm={handleSubmit} />
  );
  const input = queryByTestId('contactInput') as HTMLInputElement;
  const select = queryByTestId('contactSelect') as HTMLSelectElement;
  const textarea = queryByTestId('contactTextarea') as HTMLTextAreaElement;
  const button = queryByRole('button') as HTMLButtonElement;
  await userEvent.type(input, 'Minh', { delay: 1 });
  await userEvent.selectOptions(select, ['rider']);
  await userEvent.type(textarea, 'Complain', { delay: 1 });
  userEvent.click(button);

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Minh',
      type: 'rider',
      message: 'Complain',
    });
  });
});
