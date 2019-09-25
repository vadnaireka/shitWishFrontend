import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    allProducts: [],
    product: {},
    errors: [],
    comments: [],

    fetchAllProducts: (url) => {
    },
    fetchProductDetail: (url) => {
    },
    fetchProductComments: (url) => {
    }

});

export class DataProvider extends Component {
    state = {
        allProducts: [],
        product: {},
        errors: [],
        comments: [],

        fetchAllProducts: (url) => {
            axios.get(url)
                .then(response => {
                    console.log("responce: " + response.toString());
                    this.setState({allProducts: response.data});
                    console.log("allProduct: " + this.state.allProducts)
                }).catch(reason => {
                console.log(reason);
                this.setState({"errors": [reason]})
            })
        },

        fetchProductDetail: (url) => {
            axios.get(url)
                .then(response => {
                    this.setState({product: response.data});
                    console.log("product with comment" + this.state.product);
                    console.log("product with comment" + this.state.product)
                }).catch(reason => {
                console.log(reason);
                this.setState({"errors": [reason]})
            })
        },

        fetchProductComments: (url) => {
            console.log("working");
            axios.get(url)
                .then(response => {
                    this.setState({comments: response.data});
                })
                .catch(reason => {
                console.log(reason);
                this.setState({"errors": [reason]})
            })
        },






    };

    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        );
    }
}

export default context;