import { getProducts } from '@/utils/api';

describe('Api', () => {
  test('getProducts should return 20 items', async () => {
    const products = await getProducts();
    expect(products.length).toBe(20);
  });

  test('Rejects the promise', async () => {
    global.fetch = jest.fn(() => Promise.reject('API is down'));
    await expect(getProducts()).rejects.toMatch('API is down');
  });

  test('Calls the right endpoint', async () => {
    const fetchMock = global.fetch as jest.MockedFunction<typeof fetch>;
    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue([]),
      headers: new Headers(),
      redirected: false,
      statusText: 'OK',
      type: 'default',
      url: '',
      clone: jest.fn(),
      body: null,
      bodyUsed: false,
      arrayBuffer: jest.fn(),
      blob: jest.fn(),
      formData: jest.fn(),
      text: jest.fn(),
      bytes: jest.fn().mockResolvedValue(new Uint8Array()),
    } as Response);
    await getProducts();
    expect(fetchMock).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  test('Returns the correct data', async () => {
    const fakeProducts = [
      {
        id: 1,
        title: 'Test Product',
        price: 100,
      },
    ];

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          json: () => {
            return fakeProducts;
          },
        });
      });
    });
    const products = await getProducts();
    expect(products).toEqual(fakeProducts);
  });
});
