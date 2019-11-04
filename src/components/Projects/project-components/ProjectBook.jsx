import React, { Component } from 'react';
import projects from './ProjectLibrary';

export class ProjectBook extends Component {
	constructor() {
		super();
		this.state = {
			projects: projects
		};
	}

	flip = () => {
		console.log('entered');
		this.setState((prevState) => {
			this.state.projects.map((project) => {
				project.active = !project.active;
			});
		});
	};

	render(props) {
		return (
			<div className="projectBook">
				{this.state.projects.map((item) => (
					<div key={item.id} className="projectShelfCard" onMouseEnter={this.flip}>
						<img src={item.image} alt="" />
						<h3 className="projectShelfTitle">{item.projectName}</h3>
					</div>
				))}
			</div>
		);
	}
}

export default ProjectBook;
