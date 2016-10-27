import React from "react"; 


export default class Weeks extends React.Component { 
  render() {
    return <li>Week {this.props.weekItems.num}</li>;
  }
};
