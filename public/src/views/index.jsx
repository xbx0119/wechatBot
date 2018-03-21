import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Index extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main">
				<div className="index">
					<h1>wechatBot</h1>
					<p>a simple wechat robot for our student work</p>
					<Link to="/console">start use</Link>
				</div>
			</div>
		)
	}
};

export default Index;