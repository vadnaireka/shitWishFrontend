import React, {Component} from 'react';
import '../App.css';
import context from "../DataProvider";


class Header extends Component {

    state = {
        redirect: false,
    };

    componentWillMount() {
        this.context.fetchAllProducts("http://localhost:8081/product/list");
        console.log(this.context.allProducts)
    }

    render() {
        return(
            <div>
                <h1>ShitWish</h1>
            </div>
        )
    }

}

Header.contextType = context;
export default Header;