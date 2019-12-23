import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";


import Header from "./header";
import Footer from "./footer";
import ProductsPage from "./components/ProductsPage";
import LoginPage from "./components/LoginPage";

class App extends Component {
    render() {
        return (
            <div>
                {/*<LoginPage />*/}
                {/*<Header />*/}
                <ProductsPage />
                {/*<Footer />*/}
            </div>
        );
    }
}

export default App;