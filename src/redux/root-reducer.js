import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // we are telling redux what kind of storage we wanna use in this case localStorage we could also write 'sessionStorage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root', //what point inside of our reducer object do we wanna store everything
    storage,
    whitelist: ['cart'] // our user reducer is already persistence because we used firebase to handle that so we only use cart reducer now
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);