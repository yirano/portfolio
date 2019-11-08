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
	render() {
		return (
			<header>
				<button className="menuIcon" onClick={this.menuActive}>
					CLICK
				</button>
				{this.state.menuActive ? (
					<nav id="nav">
						<div className="navLinks">
							<ul>
								<li>
									<a href="#intro">Home</a>
								</li>
								<li>
									<a href="#projects">Projects</a>
								</li>
								<li>
									<a href="#aboutMe">About Me</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
								<li>
									<a href="https://twitter.com/yiirano" target="_blank" rel="noopener noreferrer">
										<img src={Twitter} alt="Twitter link" />
									</a>
								</li>
								<li>
									<a href="https://github.com/yirano" target="_blank" rel="noopener noreferrer">
										<img src={Github} alt="Github link" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/yt-arellano/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={LinkedIn} alt="LinkedIn link" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				) : null}
			</header>
		);
	}
}

export default Header;
