import { CartState, Product } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState: CartState = {
    cartItems: [],
    cartCount: [],
    cartImage: [],
    status: 'idle',
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ item: Product; image: number }>) => {
            const { item, image } = action.payload;
            state.cartItems.push(item);
            state.cartImage.push(image);
            state.cartCount.push(1);
        },
        cartRemoveItem: (state, action) => {
            state.cartItems.splice(action.payload, 1);
            state.cartCount.splice(action.payload, 1);
        },
        countChange: (state, action) => {
            const { type, index } = action.payload;
            switch (type) {
                case "increment": state.cartCount[index] += 1
                    break;
                case "decrement": state.cartCount[index] -= 1;
                    break;
                default:
                    break;
            }
        }
    },
});

export default cartSlice.reducer;
export const { addToCart, cartRemoveItem, countChange } = cartSlice.actions;
