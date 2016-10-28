import React from "react"; 

export default class Links extends React.Component {
	render() {
    	return (
    		<li><a href={this.props.LinkItems[1]}>{this.props.LinkItems[0]}</a></li>
    	)
  }
}



