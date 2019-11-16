import React, { Component } from 'react';
import Github from '../../images/SVG/github.svg';
import LinkedIn from '../../images/SVG/linkedin.svg';
import Twitter from '../../images/SVG/twitter.svg';
import './Header.scss';

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

	render() {
		return (
			<header>
				<button onClick={this.menuActive} className="hamburgerMenu">
					<span />
					<span />
					<span />
				</button>

				<nav>
					<ul className="socialLinks">
						<h3>y.</h3>
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
							<a href="https://www.linkedin.com/in/yt-arellano" target="_blank" rel="noopener noreferrer">
								<img src={LinkedIn} width="22px" alt="social media icon" />
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
