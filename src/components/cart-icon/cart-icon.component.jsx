import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss'; //remember if we want to use forEach or for loop we need to use useEffect because they create some kind of sideEffect // push method also makes sideEffect

const CartIcon = ({ toggleCart, itemCount }) => {
    return(
        <div className='cart-icon' onClick={() => toggleCart()}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}


// const mapStateToProps = ({ cart: { cartItems }}) => ({  //we're getting a slice of the state and we need to know that every time the state gets updated by a reducer mapStateToProps gets called so for example even when we change the currentUser by signing in or signing up this mapState inside of the cartIcon component gets called too which is not good for performance, so in order to prevent this from happening we need to use something called Selector ( we also need to know that arrays and objects are reference types so for example eventhough everytime we get the same cartItems array but javaScript consider it as a different object) now if the output or the value of Selector doesn't change we don't wanna re-render our component and it is called memoization which is the caching of the selector's value and we can achieve this memoization using a library called reselect.and reselect allows us to write the selectors in such a way so that it knows  that if the properties it's pulling from the state and using are the same(their value doesn't change and the output of the selectors is not different then it wont actually pass them into our component it'll just pass the old value and our react will know not to re-render )
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// });

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// explained why we need to use selector everytime we're getting a slice of the state and then we applied it into our website to increase the performance
