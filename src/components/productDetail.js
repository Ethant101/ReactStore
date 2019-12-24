import React from 'react';
import axios from "axios";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        }
    }




    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/${id}`)
            .then((res) => {
                this.setState({product: res.data}, ()=>{
                    console.log(this.state)
                })
            })
    }

    render() {


        let id = this.props.match.params.id;
        return (
            <div className="blah">
                <i className="close icon"> </i>
                <div className="header">
                    {this.state.product.title}
                </div>
                <div className="image content">
                    <div className="ui medium image">
                        <img src="/images/avatar/large/chris.jpg" />
                    </div>
                    <div className="description">
                        <div className="ui header">We've auto-chosen a profile image for you.</div>
                        <p>We've grabbed the following image from the <a href="https://www.gravatar.com"
                                                                         target="_blank">gravatar</a> image associated
                            with your registered e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button">
                        Nope
                    </div>
                    <div className="ui positive right labeled icon button">
                        Yep, that's me
                        <i className="checkmark icon"> </i>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductDetail;