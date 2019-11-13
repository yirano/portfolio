import React, { Component } from 'react';
import Github from '../../images/SVG/github.svg';
import LinkedIn from '../../images/SVG/linkedin.svg';
import Twitter from '../../images/SVG/twitter.svg';
import Contact from '../Contact/Contact';
import './Header.css';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			menuActive: false,
			contactActive: false
		};
	}

	menuActive = () => {
		this.setState((prevState) => {
			return (prevState.menuActive = !prevState.menuActive);
		});
	};

	handleClick = () => {
		this.setState((prevState) => {
			return (prevState.contactActive = !prevState.contactActive);
		});
	};

	render() {
		return (
			<div className="testBody">
				{this.state.contactActive ? <Contact /> : null}
				<header>
					<h3>y.</h3>
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
								<a href="https://twitter.com/yiirano" target="_blank" rel="noopener noreferrer">
									<img src={Twitter} width="22px" alt="social media icon" />
								</a>
							</li>
							<li>
								<a href="https://github.com/yirano" target="_blank" rel="noopener noreferrer">
									<img src={Github} width="22px" alt="social media icon" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/yt-arellano"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={LinkedIn} width="22px" alt="social media icon" />
								</a>
							</li>
						</ul>
					</nav>
					<button onClick={this.handleClick}>Click Me</button>
				</header>
			</div>
		);
	}
}

export default Header;
