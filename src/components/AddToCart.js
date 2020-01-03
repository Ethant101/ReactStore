import React from "react";
import store from "../store";
import {getProductList} from "../store/productListActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ProductsPage} from "./ProductsPage";

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
    }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToCart));