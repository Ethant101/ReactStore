import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import ProductsPage from "./components/ProductsPage";
import ProductDetail from "./components/productDetail";
import LoginPage from "./components/LoginPage";
import CartPage from "./components/CartPage";
import PurchasePage from "./components/PurchasePage";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginPage}/>
                        <Route exact path="/details/:id" component={ProductDetail}/>
                        <Route exact path="/list" component={ProductsPage}/>
                        <Route exact path="/cart" component={CartPage} />
                        <Route exact path="/purchase" component={PurchasePage} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;