import React from "react"; 
import Weeks from "./Weeks"

export default class WeekList extends React.Component {
 render() {

    return (
      <ul>
      {
        this.props.details.map(function (item, i) {
          return <Weeks  key={i} weekItems={item}/>
        })
      }
      </ul>
    );
  }
}; 

