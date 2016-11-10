import React from "react"; 

export default class Input extends React.Component {

addLink(event) {
		event.preventDefault(); 
		let title = this.refs.title.value;
		let link =  this.refs.title.value;
        console.log(this.refs.link.value)
    }

render(){

	return(
		<form onSubmit={this.addLink.bind(this)}>
			<p>
				Link Title: <input type='text' ref='link' />
				<button type='submit'>Submit</button>
			</p>
			<p>
				Link: <input type='text' ref='link' />
				<button type='submit'>Submit</button>
			</p>
		</form>

		)
}


}