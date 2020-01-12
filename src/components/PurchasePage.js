import React from "react";
import Header from "./header";
import Footer from "./footer";
import {Link} from "react-router-dom";

class PurchasePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Purchase">
                    <h1>Thank You for your purchase!</h1>
                    <Link to={'/list'}><i className="fas fa-arrow-left"></i>Back To Products</Link>
                </div>
                <Footer />
            </div>
        )
    }
}
export default PurchasePage;