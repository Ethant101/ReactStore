import React from "react";
// import store from "../store";
// import {getProductList} from "../store/productListActions";
// import {withRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import {ProductsPage} from "./ProductsPage";
// import SmallCartPreview from "./smallCartPreview";
// import CartItem from "./CartItem";

class AddToCart extends React.Component {

    // componentDidMount() {
    //     this.props.addCartToProps();
    // }
    // cartContents = (contents) => {
    //     return contents.map((item) => {
    //         return (
    //             <CartItem item={item} />
    //         )
    //     })
    // };

    render() {
        return (
            <button className="ui right floated primary button"
                    onClick={this.props.onButtonClick}
            >
                Add to Cart
                <i className="right chevron icon"> </i>
            </button>
        )
    }

}

// function mapStateToProps(reduxState) {
//     // this returned object gets added to props by redux via the connect function below black magic
//     return {
//         CartList: reduxState.CartReducer.CartList
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         addCartToProps: () => dispatch(getCartContent())
//     };
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToCart));
export default AddToCart;