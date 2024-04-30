// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

// Define persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Persist the Redux store
export const persistor = persistStore(store);
