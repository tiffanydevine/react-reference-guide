import React from "react"; 


export default class Weeks extends React.Component { 
  render() {
  	
    return 	(
    	<div>
	    	<h3 id="weekTitle">{this.props.weekItems.weektitle}</h3>
	    	<li><a href={this.props.weekItems.link}>{this.props.weekItems.title}</a></li>
	    </div>
	    )
  }
};
