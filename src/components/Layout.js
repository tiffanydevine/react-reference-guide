import React from "react"; 
import Header from './Header';
import WeekList from './Weeks/WeekList'

export default class Layout extends React.Component {
    constructor(){
        super(); 
            this.state = {
              week1: [
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
                },
              ],
              week2: [
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
                },
              ],
              week3: [
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
                },
              ],
            }
            }


render() {

    return (

    	<div>
    		<Header />
    		<WeekList title="Week1" details={this.state.week1}/>
            <WeekList title="Week2" details={this.state.week2}/>
            <WeekList title="Week3" details={this.state.week3}/>
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