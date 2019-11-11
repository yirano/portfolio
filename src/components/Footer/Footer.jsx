import React from 'react';
import Github from '../../images/SVG/github.svg';
import LinkedIn from '../../images/SVG/linkedin.svg';
import Twitter from '../../images/SVG/twitter.svg';
import './Footer.css';

export default function Footer() {
	return (
		<footer>
			<h4>yirano</h4>
			<div className="footerLinks ">
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
						<a href="https://www.linkedin.com/in/yt-arellano/" target="_blank" rel="noopener noreferrer">
							<img src={LinkedIn} alt="LinkedIn link" />
						</a>
					</li>
				</ul>
			</div>
			<div className="footerBottom">
				<p>&copy;2019 Tiffany Arellano</p>
			</div>
		</footer>
	);
}
