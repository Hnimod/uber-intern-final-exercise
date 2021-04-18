import renderer from 'react-test-renderer';
import Guide from './Guide';

jest.mock('../../layouts/BackgroundImage', () => 'BackgroundImage');

it('should render commitment page correctly', () => {
  const tree = renderer.create(<Guide />).toJSON();
  expect(tree).toMatchSnapshot();
});
