import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Header from './header';
import Footer from './footer';
import { getProductList } from '../store/productListActions';
import AddToCart from "./AddToCart";
import store from "../store";
import Product from "./Product";

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartCounts: 0
        };
        this.cartCount = 0; //number that state count gets assigned
        this.productList = []; //array of product ids that state products gets assigned
    }

    //products is array of ids of products from api
    componentDidMount() {
        this.props.addProductsToProps();
        // axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        //     .then((res) => {
        //         this.setState({products: res.data})
        //     })
    }



    listOfProducts = (products) => {
        return products.map((item) => {
                return (
                    <Product product={item} path={`/details/${item.id}`}/>
                );
            }
        );
    };

    // <button onClick={this.handleAddToCart}
    // value={item.id}
    // className="ui right floated primary button">
    // Add to Cart
    // <i className="right chevron icon"> </i>
    // </button>

    render() {
        return (
            <div>
                <Header cartCount={this.state.cartCounts}/>
                <div className="ui divided items productContainer">
                    {/*getting product list from the prop added by the redux map state to props function*/}
                    {this.listOfProducts(this.props.productList)}
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    // this returned object gets added to props by redux via the connect function below black magic
    return {
        productList: reduxState.productReducers.productList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addProductsToProps: () => dispatch(getProductList())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));
//export default ProductsPage;