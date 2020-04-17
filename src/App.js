import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="shop-container">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
      </Router>

    );
  }
}

export default App;