import AddToCartReducer from "./AddToCartReducer";

export default function CartReducer(state = [
    {
        items:AddToCartReducer(null, {})
    }
],action) {
    switch (action.type) {
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
    }
}
