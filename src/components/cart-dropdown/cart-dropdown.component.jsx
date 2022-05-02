import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'; // we could also use Link to navigate to checkout page by wrapping the custombutton with this Link component

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => { //remember match.url just shows the url we are currently in
  const cartItemsLength = cartItems.length;               // remember when we wanna use a an action for the second time we should know that connect will pass the dispatch fuction into the props if we don't pass it the mapDispatchToProps so we can get the dispatch from the props and give it an action

  const onHandleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  }

  return (
    <div className="cart-dropdown">
      <div
        className="cart-items"
        style={
          cartItemsLength > 2
            ? null
            : {
                overflowY: "initial",
              }
        }
      >
        {cartItemsLength ? ( // study type coersion in javaScript
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton onHandleClick={onHandleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems }}) => ({ cartItems });
// const mapStateToProps = (state) => ({  // se by using selectors we're preventing our components from unnecessary re-renders
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); // withRouter component will get the retruned component from the connect component( becuase it actually evaluates inside out)


// added the ability that when the user go to the checkoutPage the dropdown component gets closed and also added the CheckoutItem component to the CheckoutPage 