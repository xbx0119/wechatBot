import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";
import { matchRoutes, renderRoutes } from 'react-router-config'

import style from './styles/app.scss';

import Header from './components/header';
import Footer from './components/footer';


class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                {renderRoutes(this.props.route.routes)}
                <Footer/>
            </div>
        )
    }

}

export default App;