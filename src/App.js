import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from "./DataProvider";
import Header from "./component/Header";
import ProductPage from "./component/ProductPage";
import Cart from "./component/Cart";
import BuyForm from "./component/BuyForm";


function App() {
  return (
      <DataProvider>
        <Router>
          <div className="app">
            <Route path="/" render={props => (
                <div>
                  <Header/>
                  <ProductPage/>
                </div>
            )}/>
            <Route path="/cart" render={props => (
                <div>
                    <Cart/>
                </div>
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
