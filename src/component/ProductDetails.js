import React, {Component} from 'react';
import '../App.css';
import context from "../DataProvider";
import Product from "./Product";
import Comments from "./Comments"
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import {Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";



class ProductDetails extends Component {

    state = {
        redirect: false,
    };



    render() {
        return(
            <context.Consumer>
                {({product}) => (
                    <div>
                        <h2>Toilet Mug</h2>
                        <img className="product-fullimage" src={"https://images-na.ssl-images-amazon.com/images/I/41%2B71ynSbvL._SL500_.jpg"}/>
                        <p className="product-description">This stupid piece of porcelain just poses too many questions, and provides too few answers. It’s a crap gift.</p>
                        <p className="product-price">5.99 USD</p>
                        <Button className="btn" variant="danger" onClick={() => this.redirectToDetails(this.props.product.id)}>Buy</Button>
                        <Comments/>
                    </div>
                )}
            </context.Consumer>
        )
    }

}

ProductDetails.contextType = context;

export default ProductDetails;