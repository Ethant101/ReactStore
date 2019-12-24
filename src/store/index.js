import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    products: {},

});


const store = createStore(reducer);



export default store