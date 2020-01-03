import { LOAD, LOAD_SUCCESS } from '../productListActions';

export default function reducer(state = {}, action = {}) {
    let newState;

    switch (action.type) {
        case LOAD:
            //this is called when we first start to make axios call, but we have no data just yet
            return newState = {
                productList: []
            };
        case LOAD_SUCCESS:
            // this reducer is automatically called with a LOAD_SUCCESS its apart of redux-axios-middleware black magic
            // the result of the axio request is bolted on to action in payload by redux-axios-middleware, black magic
            // we are moving it to productList for convenience
            return newState = {
                productList: action.payload.data
            };
        default:
            return newState = {
                productList: []
            };
    }
}