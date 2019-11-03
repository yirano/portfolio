import React, { Component } from 'react';
import './Intro.css';
import '../../fonts/fonts.css';
import Video from '../../images/videos/sky.mp4';

export class Intro extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="heading" id="intro">
				<div className="headingTitle">
					<div className="headingTitleBg" />
					<div className="headingTitleWrap">
						<p className="alignLeft">My name is</p>
						<h1>
							<span className="highlight">y</span>ir<span className="highlight">a</span>no
						</h1>
						<p className="alignRight">&amp; I'm a Frontend Developer</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Intro;
