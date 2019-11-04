import React, { Component } from 'react';
import projects from './ProjectLibrary';

export class ProjectBook extends Component {
	constructor() {
		super();
		this.state = {
			projects: projects
		};
	}

	flip = (id) => {
		console.log(id);
		this.state.projects.map((project) => {
			this.setState((prevState) => {
				if (project.id === id) {
					return (project.active = !project.active);
				}
			});
			return project.active;
		});
	};

	render(props) {
		const opacity = {
			opacity: 1,
			transition: 'all 600ms'
		};
		return (
			<div className="projectBook">
				{this.state.projects.map(({ id, image, projectName, active }) => (
					<div
						key={id}
						className="projectShelfCard"
						onMouseEnter={() => this.flip(id)}
						onMouseLeave={() => this.flip(id)}
					>
						<img src={image} alt="" className={active ? 'cardFlip' : ''} />
						<h3 className="projectShelfTitle" style={active ? opacity : null}>
							{projectName}
						</h3>
					</div>
				))}
			</div>
		);
	}
}

export default ProjectBook;
