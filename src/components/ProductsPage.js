import React from 'react';
import axios from 'axios';
import ProductDetail from "./productDetail";

class ProductsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((res) => {
                this.setState({ products: res.data })
            })
    }
    PopulateModal = (item) => {
        return (
            <ProductDetail />
        )
    };
    render() {

        const listOfProducts = this.state.products.map((item) => (
            <div key={item.id} className="item">
                <div className="image">
                    <img src={item.img} alt='img' />
                </div>
                <div className="content">
                    <a className="header">{item.title}</a>
                    <div className="meta">
                        <span>${item.price}</span>
                    </div>
                    <div className="description">
                        <p>{item.description}</p>
                    </div>
                    <div className="extra">
                        {/*Additional Details*/}
                    </div>
                    <div className="extra">
                        <div className="ui right floated primary button">
                            Add to Cart
                            <i className="right chevron icon"> </i>
                        </div>
                    </div>
                </div>
            </div>
            )
        );
        // console.log(listOfProducts);
        return (
            <div className="ui divided items productContainer">
                {listOfProducts}
            </div>
        )
    }
}

export default ProductsPage;