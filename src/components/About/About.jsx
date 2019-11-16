import React, { Component } from 'react';
import './About.scss';
// import Profile from '../../images/self.JPG';

export class About extends Component {
	render() {
		return (
			<section className="about" id="about">
				<div className="topContent">
					<h4>
						<span className="quote">My name is Tiffany Arellano &amp; I am a Frontend Developer</span>.<br />
						Combined with my experience in user testing and design, I create with the user in mind.
					</h4>
				</div>
			</section>
		);
	}
}

export default About;
