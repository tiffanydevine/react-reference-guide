import React from "react"; 
import Links from './Links'


export default class Weeks extends React.Component { 
  render() {
  	//console.log(this.props.weekItems.links)
    return 	(<li>
    	   		<h3>Week {this.props.weekItems.num}: {this.props.weekItems.topic} </h3>
    	   			<ul>{
    	   				this.props.weekItems.links.map(function(item, i){
    	   					console.log(item)
    	   					return <Links key={i} LinkItems={item}/>;
    	   				})
    	   			}
    	   			</ul>
    	   	</li>)
  }
};
