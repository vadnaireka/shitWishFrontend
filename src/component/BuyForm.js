import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import context from "../DataProvider";
import axios from "axios";
import {Redirect} from 'react-router-dom';


class BuyForm extends Component {

    state = {
        name: "",
        email: "",
        address: "",
        paymentmethod: "",
        shippingmethod: "",
    };


    onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8762/shitwish/cart/buy",
            {
                name: this.state.name, description: this.state.email, address: this.state.address,
                paymentmethod: this.state.paymentmethod, shippingmethod: this.state.shippingmethod
            });
        this.setState({redirect: true})

    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to="/success"/>
        }
    };

    popupConfirmation = () => {
        window.confirm("Thank you for your order! We sent you a confirmation, please check your e-mails!");
    };

    render() {
        return (
            <div>
                <form className="buy-form" onSubmit={this.onSubmit}>
                    <p>Name: <input className="buy-form-title" onChange={this.onChange} type="text" name="name"
                                    value={this.state.name}/></p>
                    <p>E-mail address: <input className="buy-form-email" onChange={this.onChange} type="text"
                                              name="email"
                                              value={this.state.email}/></p>
                    <p>Shipping address: <input className="buy-form-address" onChange={this.onChange} type="text"
                                                name="address"
                                                value={this.state.address}/></p>
                    <p>Payment method: <select onChange={this.onChange} className="input" name="paymentmethod">
                        <option value="creditcard">Credit/Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cash">Cash on delivery</option>
                    </select></p>
                    <p>Shipping method: <select onChange={this.onChange} className="input" name="shippingmethod">
                        <option value="delivery">Home delivery</option>
                        <option value="pickup">Pick-up point</option>
                        <option value="personalpickup">Personal pick-up</option>
                    </select></p>
                    <button onClick={this.popupConfirmation}>Buy</button>
                </form>
            </div>
        )
    }

}

BuyForm.contextType = context;

export default BuyForm;