import React from "react"; 

export default class AddWeek extends React.Component {

handleButton(event) {
		event.preventDefault(); 
		let description = this.refs.weekDescription.value 
        this.props.addWeek(description); 
        this.refs.weekDescription.value  = ''
        
    }


  render() {

  	return(
  		<form className="form-horizontal" onSubmit={this.handleButton.bind(this)}>
			<div className="form-group">
				<label className="col-sm-2 control-label">Description</label>
					<div className="col-sm-10">
						<input className="form-control" id="focusedInput" type="text" placeholder="Click to focus..." ref='weekDescription' />
					</div>	
			</div>
			<div> 
				<button type='submit'>Add A New Week</button>
			</div> 
		</form>

  		)

  }
}