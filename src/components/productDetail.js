import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import AddToCart from "./AddToCart";
import store from "../store";
import StarRating from "./StarRating";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }
    componentWillMount() {
        store.subscribe(() => this.forceUpdate())
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        // probably build a reducer and action to do this next line
        axios.get(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/${id}`)
            .then((res) => {
                this.setState({ product: res.data }, () => {
                    console.log(this.state);
                });
            });
    }

    path = `/list`;

    handleAddToCart = (e) => {
        console.log(this.state.product.id, 'added to cart');

        store.dispatch( {
            type:'ADD_TO_CART',
            product:this.state.product,
            id:this.state.product.id,
        });

        console.log(store.getState());


    };

    render() {
        let id = this.props.match.params.id;
        console.log('------->id', id);

        return (
            <div>
                <Header cartCount={store.getState().Cart.length} />
                <div className="ui modal">
                    <div className="header">
                        {this.state.product.title}
                    </div>
                    <div className="image content">
                        <div className="ui medium image">
                            <img src={this.state.product.img} alt={this.state.product.img}/>
                        </div>
                        <div className="description">
                            <div className="ui header">
                                <StarRating rating={this.state.product.rating} />
                                <p>{this.state.product.rating}</p>
                            </div>
                            <p>{this.state.product.description}</p>

                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui black deny button">
                            <Link to={this.path}>Return To Home</Link>
                        </div>
                        <div className="ui positive right labeled icon ">
                            <AddToCart product={this.state.product} onButtonClick={this.handleAddToCart}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductDetail;