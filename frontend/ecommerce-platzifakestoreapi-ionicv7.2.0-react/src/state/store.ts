import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
    },
});

// Exportar los hooks para usar el store en la aplicación
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
