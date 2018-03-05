import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';


class App extends Component {
  render() {
    return (
      <div >
          <Header/>
          <Content/>
          <Footer/>
      </div>
    );
  }
}

export default App;
