import React from "react"; 
import Header from './Header';
import WeekList from './Weeks/WeekList'

export default class Layout extends React.Component {

render() {
	const weekDetails = [
		{num: 1, topic: "ES6 introduction", links: [['Higher Order Functions','https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'],
                                        ['Map','https://www.youtube.com/watch?v=bCqtb-Z5YGQ&index=2&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'],
                                        ['Reduce','https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3'],
                                        ['Reduce Advance','https://www.youtube.com/watch?v=1DMolJ2FrNY&index=4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'],
                                        ['ES6, var let and const','https://www.youtube.com/watch?v=6sQDTgOqh-I'],
                                        ['Arrow Functions','https://www.youtube.com/watch?v=6sQDTgOqh-I']]},
		{num: 2, topic: "ES6 core topics", links: [['ES6 Cheat Sheet', 'http://es6-features.org/#Constants'],
                                    ['Article: JavaScript ES6+: var, let, or const?', 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.qt5ewv5om'],
                                    ['ES6 overview of core features', 'https://www.youtube.com/watch?v=CozSF5abcTA'],
                                    ['ES6 in depth part 1','https://www.youtube.com/watch?v=AfWYO8t7ed4'],
                                    ['ES6 in depth part 2', 'https://www.youtube.com/watch?v=LmL0Gh193M0'], 
                                    ['Spread Operator', 'https://www.youtube.com/watch?v=oTuM8aS62Bg&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt&index=4'], 
                                    ['Classes', 'https://www.youtube.com/watch?v=XHYvWYbqgJE&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt&index=5'],
                                    ['Inheritance', 'https://www.youtube.com/watch?v=S_8WrECd0PU&index=6&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt'], 
                                    ['Generators', 'https://www.youtube.com/watch?v=2VUludkxZz0&index=7&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt'],
                                    ['ES6 Interactive Guide', 'http://stack.formidable.com/es6-interactive-guide/#/spread-operator']
                                    ]},
		{num: 3, topic: "Thinking in react", links: [
                                                    ['React Docs','https://facebook.github.io/react/docs/thinking-in-react.html'],
                                                    ['React Components and Rendering','https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be'],
                                                    ['Composing Multiple Components','https://www.youtube.com/watch?v=vu_rIMPROoQ'],
                                                    ['State vs Props & Application Data','https://www.youtube.com/watch?v=qh3dYM6Keuw'],
                                                    ['React on ES6+','https://babeljs.io/blog/2015/06/07/react-on-es6-plus']
        ]}
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