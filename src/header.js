import React from 'react';
//import Logo from 'assets/spiderManArt.png';


class Header extends React.Component {
    constructor() {
        super();
    }
    cartCount = 0;
    render() {
        return (
            <div className='navHeader'>
                <div className='leftNav'>
                    <div className='logoHeader'>
                    </div>
                    <h2 className='Products'>Products</h2>
                    <h2 className='Categories'>Categories</h2>
                    <div className="productDrop"> </div>
                </div>
                <div className='rightNav'>
                    <div className='cartCount'>{this.cartCount}</div>
                    <i className="fas fa-shopping-cart"> </i>
                </div>
            </div>
        )
    }
}

export default Header;