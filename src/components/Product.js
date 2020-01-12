import React from "react";
import {Link} from "react-router-dom";
import AddToCart from "./AddToCart";
import store from "../store";
import StarRating from "./StarRating";


class Product extends React.Component {
    handleAddToCart = (e) => {
        console.log(this.props.product.id, 'added to cart');

        store.dispatch( {
            type:'ADD_TO_CART',
            product:this.props.product,
            id:this.props.product.id,
        });

        console.log(store.getState());


    };

    render() {
        return (
            <div key={this.props.product.id} className="item">
                <div className="image">
                    <img src={this.props.product.img} alt='img'/>
                </div>
                <div className="content">
                    <span className="header"><Link to={this.props.path}>{this.props.product.title}</Link></span>
                    <div className="meta">
                        <span>${this.props.product.price}</span>
                        <StarRating rating={this.props.product.rating}/>
                        <span>{this.props.product.rating}</span>
                    </div>
                    <div className="description">
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className="extra">
                        {/*Additional Details*/}
                    </div>
                    <div className="extra">
                        <AddToCart product={this.props.product} onButtonClick={this.handleAddToCart}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;