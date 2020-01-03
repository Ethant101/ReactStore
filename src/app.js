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
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;