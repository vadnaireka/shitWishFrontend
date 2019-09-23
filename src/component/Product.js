import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import context from "../DataProvider";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";


class Product extends Component {

    state = {
        url: "",
        redirect: false,

    };

    render() {
        return(
            <div className="card text-center">
            {/*<Card className="float-left row-sm product" style={{width: "18rem"}}>*/}
                <Card.Body className="card-body">
                    <img className="card-image" src={this.props.product.pictureUrl}/>

                    <Card.Title className="card-title">{this.props.product.name}</Card.Title>
                    <Card.Text className="card-text">{this.props.product.description}</Card.Text>

                    <Button className="btn" variant="secondary" onClick={() => this.redirectToDetails(this.props.product.id)}>See details</Button>
                    {/*<Rating onClick={(rate) => this.saveRating(this.props.data.eventEntity, rate)} placeholderRating={this.props.data.averagerating}/>*/}
                </Card.Body>
            {/*</Card>*/}
            </div>
        )
    }

}

Product.contextType = context;

export default Product;

