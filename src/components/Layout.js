import React from "react"; 
import Header from './Header';
import WeekList from './Weeks/WeekList'
import AddWeek from './AddWeek'
import GenerateWeeks from './Weeks/GenerateWeeks'

export default class Layout extends React.Component {
    constructor(){
        super(); 
            this.state = {
              weekNum1: {
                weekID: "weekNum1",
                weektitle: "Week 1: Introductions to ES6 and JS assesment" , 
                done: '',
                links: [    
                  {
                    title: 'JavaScript Assessment',
                    link: 'https://github.com/rmurphey/js-assessment',
                  },
                  {
                    title: 'DevDocs, offline version',
                    link: 'http://devdocs.io/offline',
                  },
                  {
                    title: 'FunFunFunctions: Higher Order Functions',
                    link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
                  },
                  {
                    title: 'FunFunFunctions: ES6/2015 var, let, and const',
                    link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
                  },
                  {
                    title: 'FunFunFunctions: ES6/2015 arrow functions',
                    link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
                  },
                  {
                    title: 'Industry Talk: Women in tech',
                    link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02',
                  },
                  {
                    title: 'JavaScript: Understanding the Weird Parts',
                    link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII',
                  },
                  {
                    title: 'ES6 at a glance',
                    link: 'http://es6-features.org/',
                  },
                  {
                    title: 'Essential ES6 / ES2015 JavaScript',
                    link: 'https://www.youtube.com/watch?v=CozSF5abcTA',
                  },
                  {
                    title: 'Javascript ES6 Cheatsheet - the best of JS ES6',
                    link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4',
                  }
                ]
              }, 
              weekNum2: {
                weekID: "weekNum2",
                weektitle: "Week 2: ES6 Core Features", 
                done: '',
                links: [
                  {
                    title: 'AirBnb Styleguide',
                    link: 'https://github.com/airbnb/javascript',
                  },
                  {
                    title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
                    link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
                  },
                  {
                    title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
                    link: 'https://frontendmasters.com/courses/computer-science/',
                  },
                  {
                    title: 'Git Intro',
                    link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
                  },
                  {
                    title: 'Sublime Text Power User Book by Wes Bos',
                    link: 'https://sublimetextbook.com/',
                  },
                  {
                    title: 'Atom keyboard shortcuts',
                    link: '',
                  }
                ]
              }, 
              weekNum3: {
                weekID: "weekNum3",
                weektitle:'Week 3: Thinking in Reactjs', 
                done: '',
                links: [  
                  {
                    title: 'Thinking in React',
                    link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
                  },
                  {
                    title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
                    link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
                  },
                  {
                    title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
                    link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
                  },
                  {
                    title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
                    link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s',
                  },
                  {
                    title: 'React on ES6+',
                    link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus',
                  },
                  {
                    title: 'Learn ES2015 · Babel',
                    link: 'https://babeljs.io/docs/learn-es2015/',
                  },
                  {
                    title: 'Our First 50,000 Stars - React Blog (History of React)',
                    link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html',
                  },
                  {
                    title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
                    link: 'https://youtu.be/DN4yLZB1vUQ',
                  },
                  {
                    title: 'React Developer Tools (for Chrome)',
                    link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
                  }
                ]
              }, 
              weekNum4: {
                weekID: "weekNum4",
                weektitle:'Week 4: State and Events in Reactjs', 
                done: '',
                links:[
                  {
                    title: 'React Docs: Handling Events', 
                    link: 'https://facebook.github.io/react/docs/handling-events.html'
                  },
                  {
                    title: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked', 
                    link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.rkhq5wos6'
                  },
                  {
                    title: 'Events & ReactJS', 
                    link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8'
                  },
                  {
                    title: 'State of Components', 
                    link: 'https://www.youtube.com/watch?v=e5n9j9n83OM&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=9'
                  },
                  {
                    title: 'How does ReactJS update the DOM?', 
                    link: 'https://www.youtube.com/watch?v=Iw2BLUjQo1E&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=10'
                  }
                ]
              }
            }
          }

    doneFunc(weekID){
      // set temp equal to the the entire weekNum1 object 
      // tricky part was how to access this object. I passed back weekID from my week component (will be specific to that instance of week)
      // now its a string but i can bracket the string in order to use it in object access. 
      // Therefore this.state."weekNum1" becomes this.state.weekNum1 !!
      // Next I change temp.done but left everything else about temp alone. 
      // Then for setState , I took the entire weekNum1 object and set it equal to temp.
      const temp = this.state[weekID]; 
      temp.done = "Week completed"
      this.setState({[weekID]: temp})
    }

    addLink(title, link, weekID){
      /// this is going to give us the length (Object.keys(this.state).length)
      // this is how i will generate the name: `weekNum${poo}`
    
      if (title === '' || link === '') {
        console.log('Add information to both fields')
      } else {
        const temp = this.state[weekID]; 
        temp.links.push({title, link})
        this.setState({[weekID]: temp})
      }
    }
    
    addWeek(description){
      console.log(this.state)
      let numWeeks = Object.keys(this.state).length + 1; 
      let weekName = `weekNum${numWeeks}`; 

      let temp = this.state
      let title = `Week ${numWeeks}: ${description}`
      temp[weekName] = {
        weekID: weekName, 
        weektitle: title, 
        done:'',
        links: [{}]
      }

      this.setState({[weekName]:{
        weekID: weekName, 
        weektitle: title, 
        done:'',
        links: []
      }})   
   
    }
  


    render() {

        return (

        	<div className="container">

            <Header />
            <div className='thing'>
              <GenerateWeeks details={this.state} addLink={this.addLink.bind(this)}/>
        	 </div>
           <div> 
              <AddWeek addWeek={this.addWeek.bind(this)}/>
           </div> 
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