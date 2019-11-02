import React from 'react';
import './Header.css';
import headerBg from '../../images/SVG/headerBg.svg';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/">About Me</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
