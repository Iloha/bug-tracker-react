import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';


class App extends Component {

   constructor(props) {
       super(props);

       this.state = {
           toDoList: [],
           toDoInput: 'abc',

       };
   }
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
   addToDo () {
       console.log('click')
       const toDoList = this.state.toDoList;
       toDoList.push({
           id: this.uuidv4(),
           name: this.state.toDoInput })
       this.setState({
            toDoList,
            toDoInput: 'abc',
           todoInputValid: false
       })
   }
   inputChange (v) {
       let todoInputValid =  v.trim().length >= 3;
       this.setState({
           toDoInput: v,
           todoInputValid
       })
   }
   removeItem (id) {
       const toDoList = this.state.toDoList.filter(el=> el.id !== id )
       //this.state.toDoList.splice(el, 1);
       this.setState({ toDoList},  () => {console.log(this.state);})
   }
   render() {
        console.log(this.state.toDoList)


    return (
      <div >

          {this.state.name}
          <Header/>
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
                              this.state.toDoList.map( (el) => <li className="list-group-item" key={el.id}><span>{el.name}</span>
                                  <span className="btn btn-danger ml-4"
                                          onClick={() => this.removeItem(el.id)}>удалить</span> </li>)

                          }
                      </ol>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
