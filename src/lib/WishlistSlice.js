import { createSlice } from "@reduxjs/toolkit"; 

const wishlistSlice  = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
         toggleWishlist: (state, action) => {
            const product = action.payload;
            const exists = state.find(p => p.id === product.id);

            if (exists) {
                return state.filter(p => p.id !== product.id);
            } else {
                state.push(product);
            }
         }
    }

})

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;