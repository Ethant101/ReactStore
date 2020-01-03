import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import {Link} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        // probably build a reducer and action to do this next line
        axios.get(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/${id}`)
            .then((res) => {
                this.setState({ product: res.data }, () => {
                    console.log(this.state);
                });
            });
    }

    path = `/list`;

    render() {
        let id = this.props.match.params.id;
        console.log('------->id', id);

        return (
            <div>
                <Header />
                <div className="ui modal">
                    <div className="header">
                        {this.state.product.title}
                    </div>
                    <div className="image content">
                        <div className="ui medium image">
                            <img src={this.state.product.img}/>
                        </div>
                        <div className="description">
                            <div className="ui header">We've auto-chosen a profile image for you.</div>
                            <p>{this.state.product.description}</p>
                            <p>{this.state.product.rating}</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui black deny button">
                            <Link to={this.path}>Return To Home</Link>
                        </div>
                        <div className="ui positive right labeled icon button">
                            Add To Cart
                            <i className="checkmark icon"> </i>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductDetail;