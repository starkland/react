// React
import React from 'react';

// Assets
const reactLogo = 'http://reactjs.cn/react/img/logo.svg';
import '../../css/Header.css';

function _someThing() {
	// should change the element class
	// nav-toggle & nav-menu

	console.warn('123');
}

function Header() {
	return (
		<nav className="nav dark">
			<div className="nav-left">
				<a className="nav-item" target="_blank" href="http://reactjs.cn/">
					<img src={reactLogo} alt="React logo"/>
				</a>
			</div>

			<div className="nav-center">
				<a className="nav-item" href="https://github.com/starkland/react" target="_blank">
					<span className="icon">
						<i className="fa fa-github"></i>
					</span>
				</a>

				<a className="nav-item" href="https://twitter.com/thulioph_" target="_blank">
					<span className="icon">
						<i className="fa fa-twitter"></i>
					</span>
				</a>
			</div>

			<span className="nav-toggle"
				onClick={_someThing}>
				<span></span>
				<span></span>
				<span></span>
			</span>

			<div className="nav-right nav-menu">
				<a className="nav-item">Home</a>
			</div>
		</nav>
	);
}

export default Header;