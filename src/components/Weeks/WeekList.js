import React from "react"; 
import Weeks from "./Weeks"
import Input from "./Input"

export default class WeekList extends React.Component {


  render() {
    let addLink = this.props.addLink
    let details = this.props.details


    return (
      <div>
        <ul>
          <h3 id="weekTitle">{details.weektitle}</h3>
            <Input addLink={addLink} details={details}/>  
              {
                this.props.details.links.map(function(item, i){
                  return (<Weeks key={i} weekItems={item} />)
                })
              }  
                  
                
       </ul>
      </div>
    );
  }
}; 

// refer back to ideas.js I need to pass a function into Weeklist from layout. This funciton will 
// take link and title arguements as well as week idea. I will then pass them as props up to layout in 
// order to update the state. 

