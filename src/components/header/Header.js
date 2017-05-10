// React
import React from 'react';

// Assets
const reactLogo = 'http://reactjs.cn/react/img/logo.svg';
import '../../css/Header.css';


class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};
	}

	toggleClass() {
		const currentState = this.state.isActive;
		this.setState({ isActive: !currentState });
	}

	render() {
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

				<span className={`nav-toggle ${this.state.isActive ? 'is-active': ''}`}
					onClick={this.toggleClass.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
				</span>

				<div
					className={`nav-right nav-menu ${this.state.isActive ? 'is-active': ''}`}>
					<a className="nav-item">Home</a>
				</div>
			</nav>
		);
	}
}

export default Header;