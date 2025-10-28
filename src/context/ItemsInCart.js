'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [limit, setLimit] = useState(20);
  const [user_id, setUser_id] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await axios.get("/api/profile/get");
        const id = res?.data?.user?.user_id || res?.data?.user?._id || null;
        setUser_id(id);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    }
    getProfile();
  }, []);

  useEffect(() => {
    if (!user_id) return;

    async function getCart() {
      try {
        const res = await axios.get(`/api/updateCart/get?userid=${user_id}`);
        setItemsInCart(res?.data?.order || []);
        setIsSuccess(res?.data?.success);
      } catch (err) {
        console.error("Cart fetch error:", err);
      }
    }
    getCart();
  }, [user_id]);

  // Sync cart changes to backend
  useEffect(() => {
    if (!user_id) return;
    if (itemsInCart.length === 0 && !isSuccess) return; // prevent sending empty first time
    updateCart();
  }, [itemsInCart]);

  async function updateCart() {
    try {
      const url = isSuccess
        ? "http://localhost:3000/api/updateCart/put"
        : "http://localhost:3000/api/updateCart/post";

      const method = isSuccess ? "PUT" : "POST";

      const result = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemsInCart, user_id }),
      });
      
      const data = await result.json();
      setIsSuccess(true);
      console.log("Cart updated:", data);
    } catch (err) {
      console.error("updateCart failed:", err);
    }
  }

  function addItems(item, order) {
    setItemsInCart(prev => [...prev, {...item, order: {...order} }]);
  }

  function removeItem(id) {
    setItemsInCart(prev => prev.filter(item => item.id !== id));
  }

  function clearCart() {
    setItemsInCart([]);
  }

  return (
    <CartContext.Provider
      value={{ itemsInCart, limit, setLimit, addItems, removeItem, clearCart, setItemsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
