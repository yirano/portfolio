import React, { Component } from 'react';

import ProjectShelf from './project-components/ProjectShelf';
import './Projects.css';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
	}

	render() {
		return (
			<section className="projects" id="projects">
				<ProjectShelf />
			</section>
		);
	}
}

export default Projects;
