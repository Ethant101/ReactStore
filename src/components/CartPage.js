import React from "react";
import Header from "./header";
import Footer from "./footer";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className='cartContent'>
                    {/*example cart Page*/}
                    <div className="ui middle aligned divided list">
                        <div className="item">
                            <div className="right floated content">
                                <div className="ui button">Remove</div>
                            </div>
                            <img className="ui avatar image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg"/>
                                <div className="content">
                                    Toshiba - 49” Class – LED - 1080p
                                </div>
                        </div>
                        <div className="item">
                            <div className="right floated content">
                                <div className="ui button">Remove</div>
                            </div>
                            <img className="ui avatar image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290163_sd.jpg"/>
                                <div className="content">
                                    LG - 75\" Class - LED - UK6190 Series - 2160p
                                </div>
                        </div>
                        <div className="item">
                            <div className="right floated content">
                                <div className="ui button">Remove</div>
                            </div>
                            <img className="ui avatar image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5746/5746805_sd.jpg"/>
                                <div className="content">
                                    Sharp - 50\" Class - LED - 2160p - Smart
                                </div>
                        </div>
                        <div className="item">
                            <div className="right floated content">
                                <div className="ui button">Remove</div>
                            </div>
                            <img className="ui avatar image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg"/>
                                <div className="content">
                                    Apple - AirPods with Charging Case
                                </div>
                        </div>
                    </div>
                    <div className='CartSpecs'>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CartPage;