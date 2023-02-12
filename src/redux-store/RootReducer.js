// Imports
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';

// Version 2
import AuthenticationReducer from './reducer/AuthenticationReducer';
import UserReducer from './reducer/UserReducer';
import AccessibilityReducer from './reducer/AccessibilityReducer';
import AclReducer from './reducer/AclReducer';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['authentication', 'userInformation', 'accessibility',]
}

export const rootReducer = combineReducers({
	authentication: AuthenticationReducer,
	userInformation: UserReducer,
	accessibility: AccessibilityReducer,
	acl: AclReducer,
});

export const persist = persistReducer(persistConfig, rootReducer);