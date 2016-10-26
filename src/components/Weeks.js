import React from "react"; 

import Links from './Weeks/Links'
import Notes from './Weeks/Notes'

export default class Weeks extends React.Component {

  render() {
    return (
    	<div>
    		<h2>{this.props.week}</h2>
    			<ul>
    				<Links />
    				<Notes />
    			</ul>
    	</div>
    )
  }
}
