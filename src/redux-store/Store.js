// Imports
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { persist, rootReducer } from './RootReducer';

// Declaration
const middlewares = [];

//STORE WITH PERSIST
export const storeWithPersist = createStore(persist, applyMiddleware(...middlewares));
export const persistor = persistStore(storeWithPersist);

//STORE WITHOUT PERSIST
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


if(window.location.pathname === '/logout'){
    persistor.purge();
}