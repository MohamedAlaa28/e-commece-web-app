import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from 'app/types';


const initialState: CartState = {
    cartItems: [],
    cartState: false,
    status: 'idle',
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ item: Product; imageIndex: number }>) {
            const { item, imageIndex } = action.payload;
            const existingIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.item.id === item.id && cartItem.imageIndex === imageIndex
            );

            if (existingIndex !== -1) {
                state.cartItems[existingIndex].count += 1;
            } else {
                state.cartItems.push({ item, imageIndex, count: 1 });
            }
        },
        cartRemoveItem(state, action: PayloadAction<number>) {
            state.cartItems.splice(action.payload, 1);
        },
        countChange(state, action: PayloadAction<{ index: number; type: 'increment' | 'decrement' }>) {
            const { index, type } = action.payload;
            const cartItem = state.cartItems[index];

            if (type === 'increment') {
                cartItem.count += 1;
            } else if (type === 'decrement' && cartItem.count > 1) {
                cartItem.count -= 1;
            } else if (type === 'decrement' && cartItem.count === 1) {
                state.cartItems.splice(index, 1);
            }
        },
        cartToggle(state, action: PayloadAction<boolean>) {
            state.cartState = action.payload;
        },
    },
});

export const { addToCart, cartRemoveItem, countChange, cartToggle } = cartSlice.actions;
export default cartSlice.reducer;