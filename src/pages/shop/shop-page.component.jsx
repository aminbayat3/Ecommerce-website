import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  //we need to put the data in the redux because when we create our category component we will all these data again

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
