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
				<button onClick={this.menuActive} className="hamburgerMenu">
					<span />
					<span />
					<span />
				</button>

				<nav className={this.state.menuActive ? 'responsiveNav' : null}>
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
					<ul className="socialLinks">
						<li>
							<a href="https://twitter.com/yiirano" target="_blank">
								<img src={Twitter} width="30px" alt="social media icon" />
							</a>
						</li>
						<li>
							<a href="https://github.com/yirano" target="_blank">
								<img src={Github} width="30px" alt="social media icon" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/yt-arellano" target="_blank">
								<img src={LinkedIn} width="30px" alt="social media icon" />
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
