import React from "react"; 


export default class Weeks extends React.Component { 
  render() {
  	console.log(this.props.weekItems)
    return 	(<ul>
    	   			<ul>
    	   				  <li><a href={this.props.weekItems.link}>{this.props.weekItems.title}</a></li>	
              </ul>
    	   		</ul>
    	   	  )
  }
};
