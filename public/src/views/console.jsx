import React, { Component } from 'react';

class Console extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="console">
                    <div className="console-nav">
                        控制台 导航
                    </div>
                    <div className="console-body">
                        控制台 内容
                    </div>
                </div>
            </div>
        )
    }
}

export default Console;