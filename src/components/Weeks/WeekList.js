import React from "react"; 
import Weeks from "./Weeks"

export default class WeekList extends React.Component {

  handleButton(e){
    this.props.doneFunc(); 
  }

  render() {
    console.log(this.props.done)

    return (
      
      <ul>
        <h2>{this.props.title}</h2>
        <button onClick={this.handleButton.bind(this)}>Make Change</button>
        <p>{this.props.done}</p>
        {
          this.props.details.map(function (item, i) {
            return (
                <Weeks  key={i} weekItems={item}/>
              )
          })
        }
      </ul>
    );
  }
}; 

