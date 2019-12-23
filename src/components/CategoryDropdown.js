import React from "react";
import axios from 'axios';

class CategoryDropdown extends React.Component {
    state = {
        categories: [],
    };
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/typicode/categories')
            .then((res) => {
                this.setState({ categories: res.data })
            })
    }
    render() {
        const listOfCategories = this.state.categories.map((item, index) => (
                <div key={index} className="dropCategory">
                    <span>{item}</span>
                </div>
            )
        );
        return (
            <div className="catDrop">{listOfCategories}</div>

        )
    }
}

export default CategoryDropdown;