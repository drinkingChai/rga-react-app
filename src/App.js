import React, { Component } from 'react';

// styles
import './css/App.css';

// components
import Nav from './Nav'
import Main from './Main'
import Social from './Social'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav /> 
        <Main />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
