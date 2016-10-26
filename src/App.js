import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Title extends Component {
  constructor(){
    super(); 
    this.title = "React Resources"
  }

  render() {
    return <h1>{this.title}</h1>;
  }
}

/*
class ClassWeek extends Component {
  render(){
    return (
      )
  }

}
*/
export default Title; 
