import React from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
        }
    }

    showCart = () => {

    };
    //TODO: Make Categories change what displays
    render() {
        // const [isShown, setIsShown] = useState(false);
        return (
            <div className='navHeader'>
                <div className='leftNav'>
                    <div className='logoHeader'>
                    </div>
                    <Link to={'/list'} className='Products'><h2>Products</h2></Link>
                    <form>
                        <select onChange={this.props.handleCategoryChange} name="Categories" className='Categories'>
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
                    <Link to='/cart' className='cart'><i onClick={this.showCart} className="fas fa-shopping-cart cart"> </i></Link> {/*link to cart page around this i*/}
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