import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from "./DataProvider";
import Header from "./component/Header";
import ProductPage from "./component/ProductPage";
import ProductDetails from "./component/ProductDetails";
import Cart from "./component/Cart";
import ProductForm from "./component/ProductForm";
import BuyForm from "./component/BuyForm";


function App() {
    return (
        <DataProvider>
            <Router>
                <div className="app">
                    <Header/>
                    <Route exact path="/" render={props => (
                        <div>
                            <ProductForm/>

                            <ProductPage/>

                        </div>
                    )}/>
                    <Route exact path="/product/:id" component={ProductDetails}/>

                    <Route exact path="/cart" render={props => (
                        <Cart/>
                    )}/>
                    <Route path="/buyform" render={props => (
                        <div>
                            <BuyForm/>
                        </div>
                    )}/>
                </div>
            </Router>
        </DataProvider>
    )
}

export default App;
