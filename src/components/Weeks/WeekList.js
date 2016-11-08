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

  render() {
    //console.log(this.props.details)

    return (
      <div className='col-sm-6'>
        <ul>
          <h3>{this.props.details.weektitle}</h3>
          <button onClick={this.handleButton.bind(this)}>{this.state.completionStatus}</button>
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

