import React, { Component } from 'react';
import projects from './project-components/ProjectLibrary';
import ProjectSpotlight from '../ProjectSpotlight/ProjectSpotlight';
import ProjectShelf from '../ProjectShelf/ProjectShelf';
import './Projects.css';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: projects,
			switch: false,
			projectID: '',
			cardActive: false
		};
	}

	render(props) {
		const opacity = {
			opacity: 1,
			transition: 'all 600ms'
		};

		return (
			<section className="projectShelf" id="projects">
				{this.state.cardActive ? (
					<ProjectSpotlight projects={this.state.projects} />
				) : (
					<ProjectShelf projects={this.state.projects} />
				)}
			</section>
		);
	}
}

export default Projects;
