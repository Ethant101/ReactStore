import React from "react";
import store from "../store";

import Header from "./header";
import Footer from "./footer";
import CartItem from "./CartItem";


class CartPage extends React.Component {
    cartItems = (items) => {

        return items.map((item) => {
            return (
                <CartItem key={item.id = "cart"} product={item.item} id={item.targetId} path={`/details/${item.item.id}`} />
            )
        })
    };
    componentWillMount() {
        store.subscribe(() => this.forceUpdate())
    }
    totalPrice = () => {
        let cost = 0;
        if(store.getState().Cart.length === 0) {
            return '0.00'
        }
        else {
            for(let i = 0; i < store.getState().Cart.length; i++) {
                cost += store.getState().Cart[i].item.price
            }
            return cost.toFixed(2);
        }
    };
    purchase = () => {
        if(store.getState().Cart.length === 0) {
            alert('You must have items in the cart before you can purchase!');
            this.props.history.push('/list');
        } else {
            this.props.history.push('/purchase');
            // console.log(store.getState())
            store.dispatch({
                type:"CLEAR_CART"
            })
        }
    };
    render() {
        return (
            <div>
                <Header cartCount={store.getState().Cart.length}/>
                <div className='ui middle aligned divided list cartContent'>
                    {this.cartItems(store.getState().Cart)} {/* Renders cart items*/}
                    <div className='CartSpecs'> {/* All info in here should be brought in from store */}
                        <div className='text'>
                            <span className='total'>Total</span>
                            <span>{store.getState().Cart.length} Items</span>
                            <span className='totalPrice'>${this.totalPrice()}</span>
                        </div>
                        <div className='purchaseOuter'>
                            <button className='purchase' onClick={this.purchase}>Confirm Purchase</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}



export default CartPage;