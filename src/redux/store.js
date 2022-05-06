import { createStore, applyMiddleware } from 'redux'; // we can also create our custom middlewares and afterwares( they go either before the dispatch function or after it), like custom hooks just search on the internet
import { persistStore } from 'redux-persist'; //it allows our browser to actually cache our store now depending on certain configuration options that we're going to set
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store); // so this persistor is essentially a persisted version of store, and this is how we can actually create our new provider that wraps our application

export { store, persistor };