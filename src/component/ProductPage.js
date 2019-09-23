import React, {Component} from 'react';
import '../App.css';
import context from "../DataProvider";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.css';



class ProductPage extends Component {

    state = {
        redirect: false,
    };



    render() {
        return(
            <context.Consumer>
                {({allProducts}) => (
                    <div className="productcontainer">
                        {allProducts.map((product) => (
                            <Product product={product}/>
                        ))}
                    </div>
                )}
            </context.Consumer>
        )
    }

}

ProductPage.contextType = context;
export default ProductPage;