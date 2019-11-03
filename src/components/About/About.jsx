import React from 'react';
import Self from '../../images/self.png';
import './About.css';

export default function About() {
	return (
		<section className=" aboutHeading" id="aboutMe">
			<div className="photo">{/* <img src={Self} alt="self portrait" /> */}</div>
			<h1>This is About Me</h1>
		</section>
	);
}
