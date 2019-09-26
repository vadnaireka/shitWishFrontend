import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    allProducts: [],
    product: "",
    errors :[],
    cartData: [],
    cartItem: "",
    comments: [],
    fetchAllProducts: (url) => {},
    fetchProductDetail: (url) => {},
    fetchCart: (url) => {},
    fetchEmptyCart: (url) => {}
});





export class DataProvider extends Component {
    state = {
        allProducts: [],
        product: {},
        errors: [],
        comments: [],
        cartData: [],
        cartItem: "",
        fetchAllProducts: (url) => {
            axios.get(url)
                .then(response => {
                    console.log("responce: "+ response.toString());
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
                }).catch(reason => {
                console.log(reason);
                this.setState({"errors": [reason]})
            })
        },

        fetchCart: (url) => {
            axios.get(url)
                .then(response => {
                    this.setState({cartData: response.data});
                }).catch(reason => {
                    console.log(reason);
                    this.setState({"errors": [reason]})
            })
        },

        fetchEmptyCart: (url) => {
            axios.delete(url);
            this.setState({cartData: []});
        }

    };

    render(){
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        );
    }
}

export default context;