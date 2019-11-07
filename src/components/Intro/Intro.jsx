import React, { Component } from 'react';
import './Intro.css';
import '../../fonts/fonts.css';
// import vid from '../../images/videos/sky.mp4';
import profile from '../../images/self.JPG';

export class Intro extends Component {
	render() {
		return (
			<section className="hero" id="hero">
				<div className="leftHero">
					<div className="imageFrame">
						<img className="profileImg" src={profile} alt="self" />
					</div>
				</div>
				<div className="rightHero">
					<div className="heroTextContainer">
						<h2>Welcome!</h2>
						<p>
							My name is Tiffany. I'm a Frontend Developer with a focus in developing with the user
							experience in mind. I'm also a self proclaimed JavaScript junkie.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Intro;
