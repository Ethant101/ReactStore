import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductDetail from './productDetail';
import Header from '../header';
import Footer from '../footer';
import { getProductList } from '../store/productListActions';

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        };
    }

    //products is array of ids of products from api
    componentDidMount() {
        this.props.addProductsToProps();
        // axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        //     .then((res) => {
        //         this.setState({products: res.data})
        //     })
    }

    PopulateModal = (item) => {
        return (
            <ProductDetail/>
        );
    };

    handleAddToCart = (e) => {
        console.log(e.target.value);
        this.setState({ cart: e.target.value });
        console.log(this.state);
    };

    listOfProducts = (products) => {
        return products.map((item) => {
                let path = `/details/${item.id}`;
                return (

                    <div key={item.id} value={item} className="item">
                        <div className="image">
                            <img src={item.img} alt='img'/>
                        </div>
                        <div className="content">
                            <Link to={path}>{item.title}</Link>
                            <a className="header">{item.title}</a>
                            <div className="meta">
                                <span>${item.price}</span>
                            </div>
                            <div className="description">
                                <p>{item.description}</p>
                            </div>
                            <div className="extra">
                                {/*Additional Details*/}
                            </div>
                            <div className="extra">
                                <button onClick={this.handleAddToCart}
                                        value={item.id}
                                        className="ui right floated primary button">
                                    Add to Cart
                                    <i className="right chevron icon"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
        );
    };

    //TODO: on click of add to cart increments cart and updates cart
    render() {
        return (
            <div>
                <Header/>
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