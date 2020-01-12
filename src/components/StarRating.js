import StarRatings from 'react-star-ratings';

import React from "react";

class StarRating extends React.Component {
    render() {
        // rating = 2;
        return (
            <StarRatings
                rating={this.props.rating}
                starRatedColor="gold"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="1px"
            />
        );
    }
}
export default StarRating;