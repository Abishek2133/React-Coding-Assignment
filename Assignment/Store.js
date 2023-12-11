import { configureStore } from '@reduxjs/toolkit';
import CountReducer from '../Component/Redux';
export const store = configureStore ({
    reducer: {
        counter: CountReducer
    },
});
