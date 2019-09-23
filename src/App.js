import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from "./DataProvider";
import Header from "./component/Header";
import ProductPage from "./component/ProductPage";
import CommentList from "./component/CommentList";



function App() {
  return (
      <DataProvider>
        <Router>
          <div className="app">
            <Route path="/" render={props => (
                <div>
                  <Header/>
                  <ProductPage />
                  <CommentList />
                </div>
            )}/>
          </div>
        </Router>
      </DataProvider>
  )
}

export default App;
