import TabOneScreen from '@/app/(tabs)';
import { render, screen, fireEvent } from '@testing-library/react-native';

describe('TabOne tests', () => {
  test('Shows Galaxies text - old way', () => {
    const { getByText } = render(<TabOneScreen />);
    const label = getByText('Galaxies Feed');
    expect(label).toBeTruthy();
  });

  test('Shows Galaxies text - current way', () => {
    render(<TabOneScreen />);
    const label = screen.getByText('Galaxies Feed');
    expect(label).toBeTruthy();
    // or all inline:
    expect(screen.getByText('Galaxies Feed')).toBeTruthy();
  });

  test('Shows the logo', () => {
    render(<TabOneScreen />);
    const logo = screen.getByRole('img');
    expect(logo.props.source.uri).toEqual(
      'https://galaxies.dev/img/logos/logo--blue.png'
    );
  });

  test('Shows the separator (with testID)', () => {
    render(<TabOneScreen />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeTruthy();
  });

  test('Shows the search input', () => {
    render(<TabOneScreen />);
    const search = 'My search string';
    fireEvent.changeText(
      screen.getByPlaceholderText('Search galaxies'),
      search
    );
    expect(screen.getByDisplayValue(search)).toBeTruthy();
  });
});
