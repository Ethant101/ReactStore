import React from 'react';

//import Logo from 'assets/spiderManArt.png';

class Header extends React.Component {

    cartCount = 0;
    showCart = () => {

    };
    showDropdown = () => {

    };

    render() {
        // const [isShown, setIsShown] = useState(false);
        return (
            <div className='navHeader'>
                <div className='leftNav'>
                    <div className='logoHeader'>
                    </div>
                    <h2 className='Products'>Products</h2>
                    {/*onMouseEnter={() => setIsShown(true)} put below*/}
                    <h2 className='Categories'>Categories</h2>
                </div>
                <div className='rightNav'>
                    <div className='cartCount'>{this.cartCount}</div>
                    <i onClick={this.showCart} className="fas fa-shopping-cart cart"> </i>
                    <i className="dropdown icon"> </i>
                </div>
                <div className='cartContent'>
                    {/*{cartContent}*/}
                    <div className='cartItem'>
                        <div className='itemLeft'>
                            <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg' alt='tv'/>
                            <span>$199.99</span>
                        </div>
                        <i className="fas fa-times-circle x"> </i>
                    </div>
                    <div className='cartItem'>
                        <div className='itemLeft'>
                            <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290163_sd.jpg' alt='tv'/>
                            <span>$999.99</span>
                        </div>
                        <i className="fas fa-times-circle x"> </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;