import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="header">
                <div class="logo">
                    <img src="" alt="" />
				</div>
                    <ul class="nav">
                        <li><Link to="/console">控制台</Link></li>
                        <li><Link to="">登录</Link></li>
                        <li><Link to="">注册</Link></li>
                    </ul>
			</div>
        )
    }
}

export default Header;