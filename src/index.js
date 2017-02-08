// Set up your application entry point here...

import React from 'react';
import {render} from 'react-dom';
import Header from './containers/header';
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.scss';

const Index = () => {
    return (
        <Header/>
    );
};

render(
    <Index/>, document.getElementById('app'));