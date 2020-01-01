import React from "react";

class CartPage extends React.Component {
    render() {
        return (
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
        )
    }
}

export default CartPage;