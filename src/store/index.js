import { applyMiddleware, combineReducers, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import productReducers from './productReducers';
import axios from 'axios';

const reducer = combineReducers({
    productReducers,
    //cartContentReducers
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(axios)),);
console.log(store, 'store')
export default store;