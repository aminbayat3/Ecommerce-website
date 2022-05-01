import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';


const CollectionItem = ({ item, cartItems}) => {
    const { name, imageUrl, price } = item;

    const onHandleClick = () => {
        cartItems(item);
    }

    return(
        <div className="collection-item">
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton onHandleClick={onHandleClick} inverted>Add item to cart </CustomButton> 
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    cartItems: (item) => dispatch(addItem(item))
});

// we cannot use onClick on a component, so instead we can define a ClickHandler function with the same name to remedy this problem
export default connect(null, mapDispatchToProps)(CollectionItem);