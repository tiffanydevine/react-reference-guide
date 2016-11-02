import React from "react"; 
import Weeks from "./Weeks"

export default class WeekList extends React.Component {

  handleButton(e){
    const theWeek = this.props.details
    this.props.doneFunc(theWeek); 
  }

  render() {
    //console.log(this.props.details)

    return (
      
      <ul>
        <h2>{this.props.details.weektitle}</h2>
        <button onClick={this.handleButton.bind(this)}>Make Change</button>
        <p>{this.props.details.done}</p>
        {
          this.props.details.links.map(function (item, i) {
            return (
                <Weeks  key={i} weekItems={item}/>
              )
          })
        }
      </ul>
    );
  }
}; 

