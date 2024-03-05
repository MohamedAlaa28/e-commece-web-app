import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice, { addToCart, cartRemoveItem, cartToggle, countChange } from "./cartSlice";

const cartMiddleware = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: unknown) => {
    const result = next(action);
    if (addToCart.match(action) || cartRemoveItem.match(action) || countChange.match(action) || cartToggle.match(action)) {
        const state = store.getState();
        try {
            const serializedCartItems = JSON.stringify(state.cart.cartItems);
            localStorage.setItem('cartItems', serializedCartItems);
        } catch {
            throw ("Middleware Error!");
        }
    }
    return result;
};

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

