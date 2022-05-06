import React from "react";
import { Route } from 'react-router-dom';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => { //we should say match.path instead of saying /shop because our shopPage doesn't need to know which url we are in now and it also makes more reusable
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};


export default ShopPage;
