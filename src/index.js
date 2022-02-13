import React from 'react';
import ReactDOM from 'react-dom';

import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';


ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
ReactDOM.render(<Content />,document.getElementById('content'));