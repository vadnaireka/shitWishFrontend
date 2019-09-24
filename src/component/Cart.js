import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import context from "../DataProvider";
import CartItem from "./CartItem";
import CartTableHeader from "./CartTableHeader";
import Table from 'react-bootstrap/Table';


class Cart extends Component {

    state = {
        redirect: false
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
                    </div>
                )}
            </context.Consumer>
        )
    }


}

Cart.contextType = context;
export default Cart;