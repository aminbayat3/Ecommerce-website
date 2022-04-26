import { createStore, applyMiddleware } from 'redux'; // we can also create our custom middlewares and afterwares( they go either before the dispatch function or after it), like custom hooks just search on the internet
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;