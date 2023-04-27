import { createContext, useState } from 'react';
import data from '~/config/data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.products.find(
          (product) => product.id === Number(item),
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        prev[itemId] = 0;
      }
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      let newCart = prev;
      delete newCart[itemId]
      return { ...newCart };
    });
  };

  const updateCartItemCount = (itemId,newAmount) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
