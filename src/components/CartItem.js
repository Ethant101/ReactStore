import React from "react";
import store from "../store";

class CartItem extends React.Component {
    handleRemoveItem = () => {
        store.dispatch( {
            type:'REMOVE_FROM_CART',
            id:this.props.id,
        });
    };
    render() {
        return (
            <div className="item CartItem">
                <div className="right floated content">
                    <span>${this.props.product.price}</span>
                    <div className="ui button" onClick={this.handleRemoveItem}>Remove</div>
                </div>
                <img className="ui avatar image" src={this.props.product.img}/>
                <div className="content">
                    {this.props.product.title}
                </div>
            </div>
        )
    }
}
export default CartItem