import React, {Component} from 'react';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'
import {Button} from "react-bootstrap";

import '../App.css';
import context from "../DataProvider";
import CartItem from "./CartItem";
import CartTableHeader from "./CartTableHeader";


class Cart extends Component {

    state = {
        redirect: false,
        sumprice: ""
    };

    buyCart = () => {
        axios.post(`http://localhost:9000/cart/buy`, {cartData: this.context.cartData});
        console.log("This should BUY");
    };

    emptyCart = () => {
        this.context.fetchEmptyCart("http://localhost:9000/cart/delete/all");
        console.log("Cart has been emptied");
    };

    sumPrice = () => {
        const cartItems = this.context.cartData;
        const priceTotal = cartItems.reduce((totalPrice, cartItem) => totalPrice + parseInt(cartItem.price, 10), 0);
        this.setState({sumprice: priceTotal});
        console.log(priceTotal);
    };



    componentWillMount() {
        this.context.fetchCart("http://localhost:9000/cart/all");
        console.log(this.context.cartData);
    }

    render() {
        return (
            <context.Consumer>
                {({cartData}) => (
                    <div>
                        <CartTableHeader/>
                        <div className="cartcontainer">
                            {cartData.map((cartItem) => (
                                <CartItem cartItem={cartItem}/>
                            ))}
                        </div>
                        {this.sumPrice}
                        <h1 >{this.state.sumprice}</h1>
                        <Button className="btn buy" variant="success"
                                onClick={() => this.buyCart()}>Buy</Button>
                        <Button className="btn emptycart" variant="warning"
                                onClick={() => this.emptyCart()}>Empty cart</Button>
                    </div>
                )}


            </context.Consumer>
        )
    }


}

Cart.contextType = context;
export default Cart;