import { getCartSum } from '@/utils/cart';

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
});
