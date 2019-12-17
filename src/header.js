import React from 'react';
//import Logo from 'assets/spiderManArt.png';


class Header extends React.Component {
    cartCount = 0;
    render() {
        return (
            <div className='header'>
                <div className='leftNav'>
                    <div className='logoHeader'>
                    </div>
                    <h1 className='Products'>Products</h1>
                    <h1 className='Categories'>Categories</h1>
                </div>
                <div className='rightNav'>
                    <div className='cartCount'>{this.cartCount}</div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        )
    }
}

export default Header;