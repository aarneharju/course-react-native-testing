import { getCartSum, loadCart, storeCart } from '@/utils/cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('Cart', () => {
  test('getCartSum', () => {
    const cart = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 1,
      },
    ];
    expect(getCartSum(cart)).toBe(300);
  });

  test('Returns the correct item', async () => {
    const cart = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 1,
      },
    ];

    storeCart(cart);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify(cart)
    );

    loadCart();
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test('Loads the correct items', async () => {
    const cart = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 1,
      },
    ];

    AsyncStorage.getItem = jest
      .fn()
      .mockResolvedValueOnce(JSON.stringify(cart)); // this overwrites the earlier mock
    const result = await loadCart();

    expect(result).toEqual(cart);
  });
});
