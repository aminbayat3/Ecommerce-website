import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => { // we have access to match because of the Route
    console.log(collection);
    return(
        <div className='category'>
            <h2> Category PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({ //important***: we can access the props in here as a second argument
    collection: selectCollection(ownProps.match.params.collectionId)(state)  //curring when we have a function nested in another function // we could also modify our data and set their ids to 'hats' or 'sneakers ....
});

export default connect(mapStateToProps)(CollectionPage);