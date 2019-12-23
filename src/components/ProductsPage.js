import React from 'react';
import axios from 'axios';

import ProductDetail from "./productDetail";
import Header from "../header";
import Footer from "../footer";

class ProductsPage extends React.Component {
    state = {
        products: [],
        cart: []
    };
    //products is array of ids of products from api
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((res) => {
                this.setState({ products: res.data })
            })
    }
    PopulateModal = (item) => {
        return (
            <ProductDetail />
        )
    };
    handleAddToCart = (e) => {
        console.log(e.target.value);
        this.setState( { cart: e.target.value });
        console.log(this.state);

    };
    //TODO: on click of add to cart increments cart and updates cart
    render() {
        const listOfProducts = this.state.products.map((item) => (
            <div key={item.id} value={item} className="item">
                <div className="image">
                    <img src={item.img} alt='img' />
                </div>
                <div className="content">
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
            )
        );
        // console.log(listOfProducts);
        return (
            <div>
                <Header />
                <div className="ui divided items productContainer">
                    {listOfProducts}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductsPage;