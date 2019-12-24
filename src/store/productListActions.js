export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';

export function getProductList() {
    console.log('test')
    return {
        type: PRODUCTS_LOADED,
        payload: {
            request: {
                onSuccess: (r) => {console.log(r, "blah")},
                onComplete: (r) => {console.log(r, "blah")},
                method: 'get',
                url: 'https://my-json-server.typicode.com/tdmichaelis/json-api/products'
            }
        }
    }
}