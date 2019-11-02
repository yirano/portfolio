import React from 'react';
import './Header.css';
import headerBg from '../../images/SVG/headerBg.svg';

export default function Header() {
	return (
		<header>
			<nav>
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
			</nav>
		</header>
	);
}
