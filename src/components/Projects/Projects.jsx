import React, { Component } from 'react';
import ProjectBook from './project-components/ProjectBook';
import ProjectShelf from './project-components/ProjectShelf';
import './Projects.css';
import projects from './project-components/ProjectLibrary';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			active: false,
			projects: projects
		};
	}

	render() {
		return (
			<section className="projects" id="projects">
				<ProjectBook items={this.state.projects} />
				<ProjectShelf items={this.state.projects} />
			</section>
		);
	}
}

export default Projects;
