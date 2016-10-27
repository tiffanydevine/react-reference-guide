import React from "react"; 

export default class Links extends React.Component {

	render() {
  		const listItems = this.props.names.map(function(friend){
      		return <li> {friend} </li>;
  		}); 

    return (
    	<p>Links Placeholder</p>
    )
  }
}

