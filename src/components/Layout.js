import React from "react"; 
import Header from './Header';
import Weeks from './Weeks'

export default class Layout extends React.Component {

render() {
    return (
    	<div>
    		<Header />
    		<Weeks week='Week 1'/>
    		<Weeks week='Week 2'/>
    		<Weeks week='Week 3'/>
    	</div>
    )
  }
}
