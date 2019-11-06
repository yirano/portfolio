import React, { Component } from 'react';

import projects from './project-components/ProjectLibrary';
import './Projects.css';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: projects,
			switch: false,
			projectID: ''
		};
	}

	flip = (id) => {
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
		const headerStyle = {
			textAlign: 'center',
			padding: '20px 0'
		};
		const moveUp = {
			marginTop: '-90px'
		};
		return (
			<section className="projectShelf" style={moveUp}>
				<h3 style={headerStyle}>Projects</h3>
				<div className="projectBook">
					{this.state.projects.map(
						({ id, image, projectName, active, projectGit, projectURL, projectLang, projectDesc }) => (
							<div
								key={id}
								className="projectShelfCard"
								onMouseEnter={() => this.flip(id)}
								onMouseLeave={() => this.flip(id)}
							>
								<img src={image} alt="" className={active ? 'cardFlip' : ''} />
								<div className="projectCardText" style={active ? opacity : null}>
									<h3 className="projectCardTitle"> {projectName}</h3>
									<p className="projectDesc">{projectDesc}</p>
								</div>

								<ul className="projectCardList" style={active ? opacity : null}>
									<li>
										<a href={projectURL} target="_blank" rel="noopener noreferrer">
											Live Page
										</a>
									</li>
									<li>
										<a href={projectGit} target="_blank" rel="noopener noreferrer">
											Github
										</a>
									</li>
								</ul>
							</div>
						)
					)}
				</div>
			</section>
		);
	}
}

export default Projects;
