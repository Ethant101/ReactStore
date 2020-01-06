import { applyMiddleware, combineReducers, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import productReducers from './reducers/productReducers';
import CartReducer from "./reducers/CartReducer";
import axios from 'axios';

const reducer = combineReducers({
    //productReducers,
    Cart:CartReducer
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(axios)),);
console.log(store, 'store');
export default store;