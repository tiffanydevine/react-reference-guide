import React from "react"; 
import Header from './Header';
import WeekList from './Weeks/WeekList'

export default class Layout extends React.Component {

render() {
	const weekDetails = [
		{num: 1, topic: "ES6 introduction", links: ['a','r','t']},
		{num: 2, topic: "ES6 core topics", links: ['t','i','f','f']},
		{num: 3, topic: "Thinking in react", links: ['h','e','l','l','o']}
		]

    return (

    	<div>
    		<Header />
    		<WeekList details={weekDetails}/>
    	</div>
    )
  }
}

/*
const weekDetails = [
{num: 1, topic: "ES6", links: ['a','r','t']},
{num: 1, topic: "ES6", links: ['t','i','f','f']},
{num: 1, topic: "ES6", links: ['h','e','l','l','o']}
]

*/