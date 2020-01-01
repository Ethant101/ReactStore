import {ADD_TO_CART, DELETE_FROM_CART} from './cartContentActions';
export default function reducer(state = {}, action = {}) {
    let newState;

    switch (action.type) {
        case:ADD_TO_CART:
            return newState = {
                cartCount: 0,
                cartList: [],
            };
        case: DELETE_FROM_CART:
            return newState = {
                cartCount: 0, //-1
                cartList: [], //minus whatever was removed
            };
        default:
            return newState = {
                cartList: [],
            };
    }
}