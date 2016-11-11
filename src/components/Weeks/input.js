import React from "react"; 

export default class Input extends React.Component {

handleButton(event) {
		event.preventDefault(); 
		let weekID = this.props.weekID
		let title = this.refs.title.value;
		let link =  this.refs.link.value;
        this.props.addLink(title, link, weekID); 
        this.refs.title.value = ''
        this.refs.link.value = ''
    }

render(){
	console.log(this.props.weekID)

	return(
		<form className="form-horizontal" onSubmit={this.handleButton.bind(this)}>
			<div className="form-group">
				<label className="col-sm-2 control-label">Link title</label>
					<div className="col-sm-10">
						<input className="form-control" id="focusedInput" type="text" placeholder="Click to focus..." ref='title' />
					</div>	
			</div>
			<p></p>
			<div className="form-group">
				<label  className="col-sm-2 control-label">Link</label>
					<div className="col-sm-10">
						<input className="form-control" id="focusedInput" type="text" placeholder="Click to focus..." ref='link' />
					</div>
			</div>
			<button type='submit'>Submit</button>
		</form>

		)
}


}