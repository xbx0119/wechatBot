import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, hashHistory } from "react-router-dom";
import { renderRoutes } from 'react-router-config'


import routes from './routes';


ReactDOM.render(
	<Router history={hashHistory}>
		{renderRoutes(routes)}
	</Router>,
	document.getElementById('root')
);
