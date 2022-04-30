import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const onHandleClick = () => {
    console.log('CollectionItemButton Clicked!!');
}

const CollectionItem = ({ name, imageUrl, price }) => {
    return(
        <div className="collection-item">
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton onHandleClick={onHandleClick}>Add item to cart </CustomButton> 
        </div>
    )
}
// we cannot use onClick on a component, so instead we can define a ClickHandler function with the same name to remedy this problem
export default CollectionItem;