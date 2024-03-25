import { IProductsApi } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IssueInitialState {
  cart: Array<IProductsApi>;
  cartToggle: boolean;
}
const initialState: IssueInitialState = {
  cart: [],
  cartToggle: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductsApi>): void => {
      state.cart.push(action.payload);
    },
    getCountOfNumber: (state): number => state.cart.length,
    toggle: (state, action: PayloadAction<boolean>): void => {
      state.cartToggle = action.payload;
    },
  },
});

export const { addToCart, getCountOfNumber, toggle } = cartSlice.actions;
export default cartSlice.reducer;
