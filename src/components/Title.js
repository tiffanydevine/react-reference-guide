import React from "react"; 

export default class Title extends React.Component {
  constructor(){
    super(); 
    this.title = "React Resources"
  }

  render() {
    return <h1>{this.title}</h1>;
  }
}