import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalCost: 0,
    isCartBubbleOpen: false
  },
  reducers: {
    addToCart(state, actions) {

      let existingItem = state.cartItems.find(item => item.mealId === actions.payload.mealId);

      state.totalCost = state.totalCost + actions.payload.quantity * actions.payload.mealPrice;

      if (existingItem) {
        existingItem.quantity = actions.payload.quantity + existingItem.quantity;
      } else {
        state.cartItems.push(actions.payload)
      }
    },

    reduceQuantity(state, actions) {

      let existingItem = state.cartItems.find(item => item.mealId === actions.payload.mealId);

      state.totalCost = state.totalCost - actions.payload.mealPrice;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.mealId !== actions.payload.mealId);
      } else {
        existingItem.quantity--;
      }
    
    },

    removeItemFromCart(state, actions) {
      state.totalCost = state.totalCost - actions.payload.quantity * actions.payload.mealPrice;
      state.cartItems = state.cartItems.filter(item => item.mealId !== actions.payload.mealId);
    },

    openCartBubble(state) {
      state.isCartBubbleOpen = true;
    }, 

    closeCartBubble(state) {
      state.isCartBubbleOpen = false;
    }
  }
})

export default cartSlice;
export const cartSliceActions = cartSlice.actions;