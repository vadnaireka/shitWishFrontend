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
        redirect: false,

    };


    onSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8762/shitwish/product/saveproduct", {name: this.state.name, description:this.state.description, price:this.props.price, url:this.state.url})
    };

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        this.setState({redirect: true})
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={this.state.url}/>
        }
    };

    render() {
        return(
            <div>
                {this.renderRedirect()}
                <form className="product-form"  onSubmit={this.onSubmit}>
                    <input className="product-form-title" onChange={this.onChange} type="text" name="name" placeholder="Product name..."
                           value={this.state.name}/>
                    <textarea onChange={this.onChange} className="description" name="description" placeholder="Description..."
                            value={this.state.description}/><br/>
                    <input className="product-form-price" onChange={this.onChange} type="number" name="price" placeholder="Price..."
                           value={this.state.price}/>
                    <input className="product-form-url" onChange={this.onChange} type="text" name="url" placeholder="Picture URL..."
                           value={this.state.url}/>
                    <input className="btn btn-outline-secondary" type="submit" name="" value="Add"/>
                </form>
            </div>

        )
    }

}

ProductForm.contextType = context;

export default ProductForm;