import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/index';

const mainStore = configureStore({
    reducer: globalReducer
});

export default mainStore;