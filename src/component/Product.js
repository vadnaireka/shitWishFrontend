import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import context from "../DataProvider";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';


class Product extends Component {


    state = {
        url: "",
        redirect: false,

    };

    redirectToDetails = (id) =>{
        //this.context.fetchProductDetail("http://localhost:8762/product/"+id);
        console.log("redirecttodetails");
        this.setState({url:"/"+id});
        this.setState({redirect: true});
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
            <div className="card text-center">
                <Card.Body className="card-body">
                    <img className="card-image" src={this.props.product.pictureUrl}/>

                    <Card.Title className="card-title">{this.props.product.name}</Card.Title>
                    <Card.Text className="card-text">{this.props.product.description}</Card.Text>

                    <Button className="btn" variant="secondary" onClick={() => this.redirectToDetails(this.props.product.id)}>See details</Button>
                </Card.Body>
            </div>
            </div>

        )
    }

}

Product.contextType = context;

export default Product;

