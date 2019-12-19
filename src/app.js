import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import ProductsPage from "./components/ProductsPage";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductsPage />
                <Footer />
            </div>
        );
    }
}

export default App;