import React from "react"; 

export default class Input extends React.Component {

handleButton(event) {
		event.preventDefault(); 
		let weekID = this.props.weekID
		let title = this.refs.title.value;
		let link =  this.refs.link.value;
        this.props.addLink(title, link, weekID); 
    }

render(){
	console.log(this.props.weekID)

	return(
		<form onSubmit={this.handleButton.bind(this)}>
			<p>
				<label>Link title</label>
				<input className='block' type='text' ref='title' />
				<button type='submit'>Submit</button>
			</p>
			<p>
				<label>Link</label>
				<input className='block' type='text' ref='link' />
				<button type='submit'>Submit</button>
			</p>
		</form>

		)
}


}