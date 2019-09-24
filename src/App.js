import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from "./DataProvider";
import Header from "./component/Header";
import ProductPage from "./component/ProductPage";
import ProductDetails from "./component/ProductDetails";

import Cart from "./component/Cart";


function App() {
  return (
      <DataProvider>
        <Router>
          <div className="app">
            <Route exact path="/" render={props => (
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
              <Route path="/:id" render={props => (
                  <div>
                      <Header/>
                      <ProductDetails/>
                  </div>
              )}/>
          </div>
        </Router>
      </DataProvider>
  )
}

export default App;
