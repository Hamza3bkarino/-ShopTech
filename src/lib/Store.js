// lib/store.js
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishlistSlice";
import cartReducer from "./CartSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || { items: [], isOpen: false };
    return { wishlist, cart };
  } catch (e) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (e) {}
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to save changes
store.subscribe(() => {
  saveState(store.getState());
});
