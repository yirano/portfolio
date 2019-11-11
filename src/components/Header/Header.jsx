import React, { Component } from 'react';
import Github from '../../images/SVG/github.svg';
import LinkedIn from '../../images/SVG/linkedin.svg';
import Twitter from '../../images/SVG/twitter.svg';
import './Header.css';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			menuActive: false
		};
	}

	menuActive = () => {
		this.setState((prevState) => {
			return (prevState.menuActive = !prevState.menuActive);
		});
	};

	handleNavScroll = () => {
		this.setState((prevState) => {
			return (prevState.menuActive = !prevState.menuActive);
		});
	};
	render() {
		return (
			<header>
				<h3>yirano</h3>
				<nav>
					<ul>
						<li>
							<a href="#about">about me</a>
						</li>
						<li>
							<a href="#projects">projects</a>
						</li>
						<li>
							<a href="#contact">contact me</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
