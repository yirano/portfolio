import React, { Component } from 'react';
import Github from '../../images/SVG/github.svg';
import LinkedIn from '../../images/SVG/linkedin.svg';
import Twitter from '../../images/SVG/twitter.svg';
import './Header.css';

export class Header extends Component {
	componentDidMount() {
		const nav = document.getElementById('nav');
		window.addEventListener('scroll', () => {
			return window.scrollY > 10 ? (nav.classList = 'sticky') : (nav.classList = '');
		});
	}
	render() {
		return (
			<header>
				<nav id="nav" className="">
					<div className="socialLinks">
						<ul>
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
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
