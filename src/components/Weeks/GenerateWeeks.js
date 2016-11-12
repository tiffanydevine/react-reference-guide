import React from "react"; 
import WeekList from './WeekList'

export default class GenerateWeeks extends React.Component {

	render() {
		let x = this.props.details
		let addLink = this.props.addLink
		console.log(this.props.details)
		return(

			<div>
				{
					Object.keys(x).map(function(key, index) {
		              	return (
		                  <WeekList key={index} details={x[key]} addLink={addLink} />
		                )
	            	})
          		} 

			</div>

			)
	}
}