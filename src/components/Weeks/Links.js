import React from "react"; 

export default class Links extends React.Component {

	render() {


		console.log('hello', this.props.linkItems)
    	return (
    		<li>{this.props.LinkItems}</li>
    	)
  }
}

