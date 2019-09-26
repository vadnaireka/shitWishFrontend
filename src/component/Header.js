import React, {Component} from 'react';
import '../App.css';
import context from "../DataProvider"


class Header extends Component {

    state = {
        redirect: false,
    };

    componentWillMount() {
        this.context.fetchAllProducts("http://localhost:8762/product/product/list");
        console.log(this.context.allProducts)
    }

    render() {
        return(
            <div>
                {context.allProducts ? <p className="cartCounter" style={{color : "white", fontSize : "30px", position : "relative"}}><i className="shopping cart icon large" style={{color : "white", fontSize : "10px"}} />{context.allProducts.length}</p> :
                    <p className="cartCounter" ><i className="shopping cart icon large" style={{color : "white", fontSize : "10px"}} />0</p>}
                <h1 className="header">ShitWish</h1>

            </div>
        )
    }

}

Header.contextType = context;
export default Header;