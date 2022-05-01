import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'; //remember if we want to use forEach or for loop we need to use useEffect because they create some kind of sideEffect // push method also makes sideEffect

const CartIcon = ({ toggleCart, quantityArray }) => {
    let count = 0;
    quantityArray.forEach((quantity) => {
        count += quantity
    });
    return(
        <div className='cart-icon' onClick={() => toggleCart()}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{count}</span>
        </div>
    )
}


const mapStateToProps = ({ cart: { cartItems }}) => ({
    quantityArray: cartItems.map((cartItem) => (cartItem.quantity))
});

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// updated the scrollbar for the CartDropdown component and also add a counter to the cartIcon component 