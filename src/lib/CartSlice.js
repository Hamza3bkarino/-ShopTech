import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.isOpen = true;
    },

    openSidebar: (state) => {
      state.isOpen = true;
    },

    closeSidebar: (state) => {
      state.isOpen = false;
    },
    incrementQty: (state, action) => {
        const id = action.payload;
        const item = state.items.find(p => p.id === id);

        if (item) {
            item.quantity += 1;
        }
    },
    decrementQty: (state, action) => {
        const id = action.payload;
        const item = state.items.find(p => p.id === id);

        if (item && item.quantity > 1) {
            item.quantity -= 1;
        }
    },
    removeFromCart: (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
    },



  },
});

export const {
  addToCart,
  openSidebar,
  closeSidebar,
  incrementQty,
  decrementQty,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
