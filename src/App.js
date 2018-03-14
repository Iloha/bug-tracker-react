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
            toDoList,
            toDoInput: '',
           todoInputValid: false
       })
   }
   inputChange (v) {
       let todoInputValid =  v.length >= 3 && v.indexOf('   ') !== 0;
       console.log(todoInputValid);

       this.setState({
           toDoInput: v,
           todoInputValid
       })
   }
   removeItem (i) {
       this.state.toDoList.splice(i, 1);
       this.setState({
           toDoList: this.state.toDoList
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
          {/*<button className="button"*/}
                   {/*onClick={() => this.setState({open: !this.state.open, name: `$this.state.name + '.'`})}>Toggle open</button>*/}
          {/*{*/}
              {/*this.state.open ? <Content/> : 'No content'*/}
          {/*}*/}
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                      <input  className="form-control" type="text" value={this.state.toDoInput}
                             onChange={e => this.inputChange(e.target.value)}/>
                  </div>
                  <div className="col-sm">
                      <button className="btn btn-info "
                              disabled={!this.state.todoInputValid}

                              onClick={() => this.addToDo()}>Add</button>
                      { this.state.todoInputValid === false  ? (
                          <div className="invalid-feedback"> невалидно</div>
                      ) : ( ' '
                      )}


                  </div>
              </div>
              <div className="row">
                  <div className="col-sm">
                      <ol className="list-group mt-5">
                          {
                              this.state.toDoList.map( (el, i) => <li className="list-group-item" key={i}><span>{el}</span>
                                  <button className="btn btn-danger ml-4"
                                          onClick={() => this.removeItem(i)}>удалить</button> </li>)

                          }
                      </ol>
                  </div>
              </div>
          </div>

          <Footer name = {sn}/>
      </div>
    );
  }
}

export default App;
