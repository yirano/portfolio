import React from 'react';
import './Intro.css';
import '../../fonts/fonts.css';

export default function Intro() {
	return (
		<section className="heading" id="intro">
			<div className="headingTitle">
				<p>My name is Tiffany</p>
				<h1>Hello!</h1>
				<p className="alignRight">
					&amp; I'm a <span className="highlight">Frontend Developer</span>
				</p>
			</div>
		</section>
	);
}
