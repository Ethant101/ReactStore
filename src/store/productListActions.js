export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
//LOAD and LOAD_SUCCESS are apart of redux-axios-middleware so you have to use these verbs

export function getProductList() {
    return {
        type: LOAD,
        payload: {
            request: {
                method: 'get',
                url: 'https://my-json-server.typicode.com/tdmichaelis/json-api/products'
            }
        }
    }
}

