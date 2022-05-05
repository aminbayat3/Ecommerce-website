import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'; 

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => { 
  const cartItemsLength = cartItems.length;              

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
        {cartItemsLength ? ( 
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


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); 


