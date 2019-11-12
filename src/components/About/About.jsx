import React, { Component } from 'react';
import './About.css';
import Profile from '../../images/self.JPG';

export class About extends Component {
	render() {
		return (
			<section className="about" id="about">
				<div className="topContent">
					<h3>My name is Tiffany, and I'm a Frontend Developer.</h3>
				</div>
				<div className="aboutLeftContent">
					<img src={Profile} alt="Profile" className="profileImage" />
				</div>
				<div className="aboutRightContent">
					<div className="aboutTextWrap">
						<p>
							My strength lies in development but combined with my experience in design and user testing,
							I create with the user's experience in mind.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
