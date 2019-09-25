import React, {Component} from 'react';
import '../App.css';
import context from "../DataProvider";
import Product from "./Product";
import Comments from "./Comments"
import 'bootstrap/dist/css/bootstrap.css';
import CommentList from "./CommentList";
import Header from "./Header";
import {Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";



class ProductDetails extends Component {

    state = {
        redirect: false,
    };

    componentDidMount() {
        this.context.fetchProductDetail("http://localhost:8762/product/product/" + this.props.match.params.id);
    }

    render() {
        return(
            <context.Consumer>
                {({product}) => (
                    <div>
                        {product && product.ProductEntity ? <h2>{product.ProductEntity.name}</h2> : <div>Pillanat, toltok</div>}
                        {product && product.ProductEntity ? <img className="product-fullimage" src={product.ProductEntity.pictureUrl}/> : <div>Pillanat, toltok</div>}
                        {product && product.ProductEntity ? <p className="product-description">{product.ProductEntity.description}</p> : <div>Pillanat, toltok</div>}
                        {product && product.ProductEntity ? <p className="product-price">{product.ProductEntity.price}</p> : <div>Pillanat, toltok</div>}


                        {/*<Button className="btn" variant="danger" onClick={() => this.redirectToDetails(this.props.product.id)}>Add to Cart</Button>*/}
                        {product && product.ProductRecommendations ? <CommentList comments={product.ProductRecommendations}/> : <div>Pillanat, toltok</div>}
                    </div>
                    )}
            </context.Consumer>
        )
    }

}

ProductDetails.contextType = context;

export default ProductDetails;