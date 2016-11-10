import React from "react"; 
import Weeks from "./Weeks"
import Input from "./Input"

export default class WeekList extends React.Component {
  constructor(){
    super(); 
      this.state ={
        completionStatus: "Click if finished"
      }
  }

  handleButton(e){
    const weekID = this.props.details.weekID
    this.props.doneFunc(weekID); 
  }

  addLink(e) {
        // Log new `value` to JavaScript console
        console.log(e.target.value)
  }

  render() {
    //console.log(this.props.details)

    return (
      <div>
        <ul>
          <h3>{this.props.details.weektitle}</h3>
            <Input />
          <p>{this.props.details.done}</p>
          {
            this.props.details.links.map(function (item, i) {
              return (
                  <Weeks  key={i} weekItems={item}/>
                )
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

