import React, {Component} from 'react';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'
import {Button} from "react-bootstrap";

import '../App.css';
import context from "../DataProvider";
import CartItem from "./CartItem";
import CartTableHeader from "./CartTableHeader";
import {Redirect} from 'react-router-dom';



class Cart extends Component {

    state = {
        redirect: false,
        sumprice: "",
    };

    buyCart = () => {
        axios.post(`http://localhost:9000/cart/buy`, {cartData: this.context.cartData});
        this.setState({redirect: true});
        console.log("This should BUY");
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to="/buyform"/>
        }
    };

    emptyCart = () => {
        this.context.fetchEmptyCart("http://localhost:9000/cart/delete/all");
        console.log("Cart has been emptied");
    };

    sumPrice = () => {
        const cartItems = this.context.cartData;
        var total = 0;
        for(var i=0; i<cartItems.length; i++) {
            total += cartItems[i].price;
        }
        return total;
    };



    componentWillMount() {
        this.context.fetchCart("http://localhost:9000/cart/all");
        console.log(this.context.cartData);
    }

    render() {
        return (
            <context.Consumer>
                {({cartData}) => (
                    <div className="maxcart">
                        {this.renderRedirect()}
                        <CartTableHeader/>
                        <div className="cartcontainer">
                            {cartData.map((cartItem) => (
                                <CartItem cartItem={cartItem}/>
                            ))}
                        </div>
                        <p className="sumprice">Total: {this.sumPrice()} $</p>
                        <Button className="btn buy" variant="success"
                                onClick={() => this.buyCart()}>Checkout</Button>
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