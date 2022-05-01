import { createSelector } from "reselect"; // output selectors use input selectors to create selector

//input selectors are just function that gets the state and return only a slice of it

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
); 

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
); 
