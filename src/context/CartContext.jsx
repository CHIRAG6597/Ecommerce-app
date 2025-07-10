import { useContext,useState,createContext, useEffect } from "react";
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
  const stored = localStorage.getItem("cartItems");
  return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

  const addToCart = (product) => { 
    console.log("ADDING:", product);
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}