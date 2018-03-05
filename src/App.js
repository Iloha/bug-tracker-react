import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';


class App extends Component {
  render() {

      const sn = 'React16'

    return (
      <div >
          <Header
            siteName = {sn}
            lang = "EN"
          />
          <Content

          />
          <Footer name = {sn}/>
      </div>
    );
  }
}

export default App;
