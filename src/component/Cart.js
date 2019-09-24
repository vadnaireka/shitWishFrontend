import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import {Button} from "react-bootstrap";

import '../App.css';
import context from "../DataProvider";
import CartItem from "./CartItem";
import CartTableHeader from "./CartTableHeader";


class Cart extends Component {

    state = {
        redirect: false
    };

    buyCart = () => {
        console.log("This should BUY");
    };

    emptyCart = () => {
        this.context.fetchEmptyCart("http://localhost:9000/cart/delete/all");
        console.log("This should EMPTY  cart");
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