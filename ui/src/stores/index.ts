import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import Divider from './Divider';
const store = configureStore({
    reducer: {
        Divider
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const UseAppDispatch = () => useDispatch<typeof store.dispatch>();
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;