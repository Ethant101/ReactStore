import React from "react";



class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item">
                <div className="right floated content">
                    <span>{this.props.price}</span>
                    <div className="ui button">Remove</div>
                </div>
                <img className="ui avatar image" src={this.props.img}/>
                <div className="content">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default CartItem;

