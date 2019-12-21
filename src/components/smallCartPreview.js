import React from "react";



class SmallCartPreview extends React.Component {
    render() {
        return (
            <div className='cartItem'>
                <div className='itemLeft'>
                    <img src={item.img} alt='tv' />
                    <span>${item.price}</span>
                </div>
                <i className="fas fa-times-circle x"> </i>
            </div>
        )
    }
}

export default SmallCartPreview;

