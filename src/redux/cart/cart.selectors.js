import { createSelector } from "reselect"; // output selectors use input selectors to create selector

//input selectors are just function that gets the state and return only a slice of it

const selectCart = (state) => state.cart;

// const selectUser = state => state.user

// export const selectCartItems = createSelector([selectCart, selectUser], () => )

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
); // actually createSelector function makes a selector a memoized selector.

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
); // so output selectors can also use other output selectors to get a peice of state
