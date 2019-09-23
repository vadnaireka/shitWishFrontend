import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from "./DataProvider";
import Header from "./component/Header";
import ProductPage from "./component/ProductPage";
import ProductDetails from "./component/ProductDetails";



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
              <Route path="/hello" render={props => (
                  <div>
                      <ProductDetails/>
                  </div>
              )}/>
          </div>
        </Router>
      </DataProvider>
  )
}

export default App;
