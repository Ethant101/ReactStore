import {PRODUCTS_LOADED} from "./productListActions";

export default function reducer(state = {}, action={}) {
let newState;
    switch(action.type) {
        case PRODUCTS_LOADED:
            console.log(state, 'reducerState');
            newState = {
                ...state,
            };
        default:
            return state;
    }
}