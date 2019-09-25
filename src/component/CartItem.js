import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

import '../App.css';
import context from "../DataProvider";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";

class CartItem extends Component {

    state = {
        redirect: false,
    };

    deleteFromCart = () => {
        axios.delete(`http://localhost:9000/cart/delete/${this.props.cartItem.id}`);
        window.location.reload();
        this.context.fetchCart("http://localhost:9000/cart/all");
        console.log("This should delete from cart");
    };

    render() {
        return (
            <div>
                <Table className="cart-list" striped bordered size="sm">
                <tbody>
                    <tr>
                        <td class="tablecell" style={{width: `30%`}} className="name-column">{this.props.cartItem.name}</td>
                        <td class="tablecell" style={{width: `15%`}} className="price-column">{this.props.cartItem.price} $</td>
                        <td class="tablecell" style={{width: `15%`}}><Button className="btn" variant="outline-danger"
                                     onClick={() => this.deleteFromCart(this.props.cartItem.id)}>Delete item</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
    );
    }

    }

    CartItem.contextType = context;
    export default CartItem;
