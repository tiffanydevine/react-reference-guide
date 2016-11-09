import React from "react"; 
import Weeks from "./Weeks"

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

  inputChange(e) {
        // Log new `value` to JavaScript console
        console.log(e.target.value)
  }

  render() {
    //console.log(this.props.details)

    return (
      <div>
        <ul>
          <h3>{this.props.details.weektitle}</h3>
          <input type='text' onChange={this.inputChange.bind(this)}/>
          <button onClick={this.handleButton.bind(this)}>Submit</button>
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

