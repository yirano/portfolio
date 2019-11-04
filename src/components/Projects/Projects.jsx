import React, { Component } from 'react';
import './Projects.css';
import BookmarkLP from '../../images/projectImgs/BookmarkLP.jpg';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			project: [
				{
					image: '{BookmarkLP}',
					projectName: 'Bookmark Landing Page'
				}
			]
		};
	}
	render() {
		return (
			<section className="projects" id="projects">
				<div className="projectDisplay">
					<img src={BookmarkLP} alt="Bookmark LP" />
				</div>
				<div className="projectInfo">
					<h3>{this.state.project[0].projectName}</h3>
				</div>
			</section>
		);
	}
}

export default Projects;
