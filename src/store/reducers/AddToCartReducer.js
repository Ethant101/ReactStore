import uuid from 'uuid';


export default function AddToCartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const item = {
                product: action.product,
                id: uuid.v4(),
            };
        }

        case 'REMOVE_FROM_CART':
            //return state.filter(m => m.id !== action.id);
        default: {
            return state;
        }
    }
}