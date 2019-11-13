import React, { Component } from 'react';
import './About.css';
import Profile from '../../images/self.JPG';

export class About extends Component {
	render() {
		return (
			<section className="about" id="about">
				<div className="topContent">
					<h3>My name is Tiffany &amp; I'm a Frontend Developer.</h3>
				</div>
				<div className="aboutRightContent">
					<div className="aboutTextWrap">
						<p className="quote">
							Combined with my experience in testing &amp; design, I create with the user in mind.
						</p>

						<p>
							A former math major turned web developer, I have invested the past two years learning &amp;
							creating. I find joy in overcoming the challenges{' '}
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
