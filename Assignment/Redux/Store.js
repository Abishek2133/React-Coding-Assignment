// store.js
import { createStore } from 'redux';
import counterReducer from './Reducers';

const store = createStore(counterReducer);

export default store;
