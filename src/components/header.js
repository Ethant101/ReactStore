import React from 'react';
import { connect } from 'react-redux';
import {getProductList} from "../store/productListActions";
import {withRouter} from "react-router-dom";
import {ProductsPage} from "./ProductsPage";
//import Logo from 'assets/spiderManArt.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
        }
    }

    showCart = () => {

    };
    showDropdown = () => {

    };
    //TODO: Bring in actual cart and increment cart count when items are added
    //TODO: Make Categories a form input dropdown
    render() {
        // const [isShown, setIsShown] = useState(false);
        return (
            <div className='navHeader'>
                <div className='leftNav'>
                    <div className='logoHeader'>
                    </div>
                    <h2 className='Products'>Products</h2>
                    <form>
                        <select name="Categories" className='Categories'>
                            <option value="Categories">Categories</option>
                            <option value="Phones">Phones</option>
                            <option value="TV">TV</option>
                            <option value="Small-Appliances">Small-Appliances</option>
                            <option value="refrigerator">Refrigerator</option>
                            <option value="Watches">Watches</option>
                            <option value="Action-Cam">Action-Cam</option>
                        </select>
                    </form>
                    {/*onMouseEnter={() => setIsShown(true)} put below*/}
                    {/*<h2 className='Categories'>Categories</h2>*/}
                </div>
                <div className='rightNav'>
                    <div className='cartCount'>{this.props.cartCount}</div>
                    <i onClick={this.showCart} className="fas fa-shopping-cart cart"> </i> {/*link to cart page around this i*/}
                    <i className="dropdown icon"> </i>
                </div>
            </div>
        );
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
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
export default Header;