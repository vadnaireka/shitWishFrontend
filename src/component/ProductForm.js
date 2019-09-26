import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import context from "../DataProvider";
import axios from "axios";
import {Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';


class ProductForm extends Component {

    state = {
        name: "",
        description: "",
        price:"",
        url: "",
        productId: "",
        redirect: false,
        redirectUrl: ""

    };


    onSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8762/product/product/save",
            {name: this.state.name, description:this.state.description, price:this.state.price, url:this.state.url})
            .then(response => {
                this.setState({productId: response.data.id})
            });
        this.setState({redirectUrl: "/"+this.state.productId});
        this.setState({redirect: true})
    };

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});

    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={this.state.redirectUrl}/>
        }
    };

    render() {
        return(
            <div className="formContainer">

                {this.renderRedirect()}
                <form className="product-form"  onSubmit={this.onSubmit}>
                    <h2 className="form-title">Upload new product</h2>
                    <input className="product-form-title" onChange={this.onChange} type="text" name="name" placeholder="Product name..."
                           value={this.state.name}/>
                    <textarea onChange={this.onChange} className="description" name="description" placeholder="Description..."
                            value={this.state.description}/><br/>
                    <input className="product-form-price" onChange={this.onChange} type="number" step="0.01" name="price" placeholder="Price..."
                           value={this.state.price}/>
                    <input className="product-form-url" onChange={this.onChange} type="text" name="url" placeholder="Picture URL..."
                           value={this.state.url}/>
                    <input className="btn btn-outline-secondary" type="submit" name="" value="Save"/>
                </form>
            </div>

        )
    }

}

ProductForm.contextType = context;

export default ProductForm;