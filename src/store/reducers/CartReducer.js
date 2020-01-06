import { ADD_TO_CART, REMOVE_FROM_CART} from "../cartContentActions";
import uuid from 'uuid';

export default function reducer(state = [], action = {}) {
    let newState;
    switch (action.type) {
        case ADD_TO_CART:
            newState = {
                item: action.product,
                targetId: uuid.v4(),
            };
            return state.concat(newState);
        case REMOVE_FROM_CART:{
            return state.item.filter(m => m.id !== action.id); //remove function
        }
        default:
            return state;
    }
}