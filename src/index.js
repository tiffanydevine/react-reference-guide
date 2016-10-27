import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import './index.css';

const weekDetails = [
	{num: 1, topic: "ES6", links: ['a','r','t']},
	{num: 1, topic: "ES6", links: ['t','i','f','f']},
	{num: 1, topic: "ES6", links: ['h','e','l','l','o']}
	]; 


ReactDOM.render(
  <Layout details={weekDetails}/>,
  document.getElementById('root')
);
