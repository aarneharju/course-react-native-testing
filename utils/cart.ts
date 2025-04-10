// import AsyncStorage from '@react-native-async-storage/async-storage';

const getCartSum = (items: any[]) => {
  return items.reduce((acc, item) => acc + item.price, 0);
};

// const storeCart = async (cart: any) => {
//   try {
//     const jsonValue = JSON.stringify(cart);
//     await AsyncStorage.setItem('cart', jsonValue);
//   } catch (e) {
//     console.error('Error storing cart', e);
//   }
// };

// const loadCart = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('cart');
//     return jsonValue != null ? JSON.parse(jsonValue) : [];
//   } catch (e) {
//     console.error('Error getting cart', e);
//   }
// };

export { getCartSum }; //, loadCart, storeCart };
