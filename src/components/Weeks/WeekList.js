import React from "react"; 
import Weeks from "./Weeks"

export default class WeekList extends React.Component {
 render() {

    return (
      
      <ul>
      <h2>{this.props.title}</h2>
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

