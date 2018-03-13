import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';


class App extends Component {

   constructor(props) {
       super(props);

       this.state = {
           open: false,
           toDoList: [],
           toDoInput: 'abc',
       };
   }
   addToDo () {
       console.log('click')
       const toDoList = this.state.toDoList;
       toDoList.push(this.state.toDoInput)
       this.setState({
        toDoList
       })
   }
  render() {
        console.log(this.state.toDoList)
      const sn = 'React16';

      const menu = [
          {
              link: 'http://facebook.com',
              name: 'Facebook',
          },
          {
              link: 'http://instagram.com',
              name: 'Instagram',
          },
      ]

    return (
      <div >

          {this.state.name}
          <Header
            siteName = {menu}
            lang = {this.state.open ? "Open" : "Closed"}
          />
/          <button className="button" onClick={() => this.setState({open: !this.state.open, name: `$this.state.name + '.'`})}>Toggle open</button>
          {
              this.state.open ? <Content/> : 'No content'
          }
          <div className="container">
              <div className="row">
                  <div className="form-group">
                      <input className="form-control" type="text" value={this.state.toDoInput} onChange={e => this.setState({toDoInput: e.target.value})}/>
                      <button className="btn btn-info " onClick={() => this.addToDo()}>Add</button>
                  </div>

                  <ol className="regular-list">
                      {
                          this.state.toDoList.map( (el, i) => <li className="regular-list__item" key={i}>{el}</li>)

                      }

                  </ol>
              </div>
          </div>

          <Footer name = {sn}/>
      </div>
    );
  }
}

export default App;
