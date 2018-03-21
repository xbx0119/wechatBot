import React, { Component } from 'react';

class Error extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>message</h1>
				<h2>error.status</h2>
				<pre>error.stack</pre>
			</div>
		)
	}
}

export default Error;