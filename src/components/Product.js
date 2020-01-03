import React from "react";
import {Link} from "react-router-dom";
import AddToCart from "./AddToCart";
import store from "../store";

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    handleAddToCart = (e) => {
        console.log(this.props.product);
        // this.cartCount ++;
        console.log('added to cart');
        store.dispatch( {
            type:'ADD_TO_CART',
            product:this.props.products,
        })
        // this.productList.push(e.target.value);
        // this.setState({ products: this.productList, cartCounts: this.cartCount });
        // console.log(this.state);
    };
    render() {
        return (
            <div key={this.props.product.id} className="item">
                <div className="image">
                    <img src={this.props.product.img} alt='img'/>
                </div>
                <div className="content">
                    <a className="header"><Link to={this.props.path}>{this.props.product.title}</Link></a>
                    <div className="meta">
                        <span>${this.props.product.price}</span>
                    </div>
                    <div className="description">
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className="extra">
                        {/*Additional Details*/}
                    </div>
                    <div className="extra">
                        <AddToCart id={this.props.product.id} onButtonClick={this.handleAddToCart}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;