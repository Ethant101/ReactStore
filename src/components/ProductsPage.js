import React from 'react';
import store from "../store";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";


import Header from './header';
import Footer from './footer';
import { getProductList } from '../store/productListActions';
import Product from "./Product";

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartCount: 0
        };
        this.productList = []; //array of product ids that state products gets assigned
    }
    componentWillMount() {
        store.subscribe(() => this.forceUpdate())
    }
    //products is array of ids of products from api
    componentDidMount() {
        //this.props.addProductsToProps();
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((res) => {
                this.setState({products: res.data})
            })
    }

    listOfProducts = (products) => {
        return products.map((item) => {
                return (
                    <Product key={item.id} product={item} path={`/details/${item.id}`}/>
                );
            }
        );
    };


    render() {
        return (
            <div>
                <Header cartCount={store.getState().Cart.length} />
                <div className="ui divided items productContainer">
                    {/*getting product list from the prop added by the redux map state to props function*/}
                    {this.listOfProducts(this.state.products)}
                </div>
                <Footer/>
            </div>
        );
    }
}

// function mapStateToProps(reduxState) {
//     // this returned object gets added to props by redux via the connect function below black magic
//     return {
//         productList: reduxState.productReducers.productList
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         addProductsToProps: () => dispatch(getProductList())
//     };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));
export default ProductsPage;