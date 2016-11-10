import React from "react"; 

export default class Input extends React.Component {

addLink(event) {
		event.preventDefault(); 
        console.log(this.refs.link.value)
    }

render(){

	return(
		<form onSubmit={this.addLink.bind(this)}>
			<input type='text' ref='link' />
			<button type='submit'>Submit</button>
		</form>

		)
}


}