import renderer from 'react-test-renderer';
import Commitment from './Commitment';

jest.mock('../../layouts/BackgroundImage', () => 'BackgroundImage');

it('should render commitment page correctly', () => {
  const tree = renderer.create(<Commitment />).toJSON();
  expect(tree).toMatchSnapshot();
});
