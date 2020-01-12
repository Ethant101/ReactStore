import React from "react";
import store from "../store";
// import {getProductList} from "../store/productListActions";
// import {withRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import ProductsPage from "./ProductsPage";

class CartItem extends React.Component {
    handleRemoveItem = () => {
        store.dispatch( {
            type:'REMOVE_FROM_CART',
            id:this.props.id,
        });
    };
    componentWillMount() {
        store.subscribe(() => this.forceUpdate())
    }
    render() {
        return (
            <div className="item CartItem">
                <div className="right floated content">
                    <span>${this.props.product.price}</span>
                    <div className="ui button" onClick={this.handleRemoveItem}>Remove</div>
                </div>
                <img className="ui avatar image" src={this.props.product.img} alt={this.props.product.img}/>
                <div className="content">
                    {this.props.product.title}
                </div>
            </div>
        )
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
export default CartItem