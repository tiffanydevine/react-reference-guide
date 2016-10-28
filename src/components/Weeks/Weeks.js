import React from "react"; 


export default class Weeks extends React.Component { 
  render() {
  	
    return 	(<li><a href={this.props.weekItems.link}>{this.props.weekItems.title}</a></li>)
  }
};
