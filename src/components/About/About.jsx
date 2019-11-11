import React, { Component } from 'react';
import './About.css';
import Profile from '../../images/self.png';

export class About extends Component {
	render() {
		return (
			<section className="about" id="about">
				<div className="aboutLeftContent">
					<img src={Profile} alt="Profile" className="profileImage" />
				</div>
				<div className="aboutRightContent">
					<div className="aboutTextWrap">
						<h2>I'm a Frontend Developer</h2>
						<p>
							My strength lies in development but combined with my experience in user testing and design,
							I create with the user's experience in mind.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
