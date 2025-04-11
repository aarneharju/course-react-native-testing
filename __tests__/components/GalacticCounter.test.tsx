import { userEvent, render, screen } from '@testing-library/react-native';
import GalacticCounter from '@/components/GalacticCounter';

describe('Galactic Counter', () => {
  it('Updates the counter', async () => {
    render(<GalacticCounter />);
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });

    jest.useFakeTimers();

    const add = screen.getByText('Add');
    const decrease = screen.getByText('Decrease');

    await user.press(add);
    await user.press(add);

    expect(screen.getByText('Stars: 2')).toBeTruthy();

    await user.press(decrease);
    await user.press(decrease);
    await user.press(decrease);

    expect(screen.getByText('Stars: -1')).toBeTruthy();
  });
});
