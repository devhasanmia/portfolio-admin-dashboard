import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/BaseApi';
import authReducer from './services/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'auth',
    storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
