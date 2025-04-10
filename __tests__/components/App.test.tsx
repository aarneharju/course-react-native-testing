import TabOneScreen from '@/app/(tabs)';
import TabTwoScreen from '@/app/(tabs)';
import renderer from 'react-test-renderer';

describe('General app test', () => {
  test('Renders tab 1 correctly', () => {
    const tree = renderer.create(<TabOneScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Renders tab 2 correctly', () => {
    const tree = renderer.create(<TabTwoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
