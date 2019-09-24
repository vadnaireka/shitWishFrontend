import React, {Component} from "react";
import axios from "axios";

const context = React.createContext({
    allProducts: [],
    product: "",
    errors :[],
    cartData: [],
    cartItem: "",
    fetchAllProducts: (url) => {},
    fetchProductDetail: (url) => {},
    fetchCart: (url) => {}
});



export class DataProvider extends Component {
    state = {
        allProducts: [],
        product: "",
        errors :[],
        cartData: [],
        cartItem: "",
        fetchAllProducts: (url) => {
            axios.get(url)
                .then(response => {
                    console.log("response: "+ response.toString());
                    this.setState({allProducts: response.data});
                    console.log("allProduct: " + this.state.allProducts)
                }).catch(reason => {
                    console.log(reason);
                    this.setState({"errors":[reason]})
            })
            },
        fetchProductDetail: (url) => {
            axios.get(url)
                .then(response => {
                    this.setState({product: response.data});
                }).catch(reason => {
                console.log(reason);
                this.setState({"errors":[reason]})
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