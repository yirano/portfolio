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

	projectHover = (id) => {};

	render(props) {
		const opacity = {
			opacity: 1,
			transition: 'all 600ms'
		};

		return (
			<section className="projectShelf" id="projects">
				<div className="sectionTitle">
					<h3>selected works</h3>
				</div>
				<div className="projectBook">
					{this.state.projects.map(
						({ id, image, projectName, active, projectGit, projectURL, projectLang, projectDesc }) => (
							<div key={id} className="projectShelfCard" onMouseEnter={this.projectHover}>
								<img src={image} alt={projectName} />

								{/* <ul className="projectCardList" style={active ? opacity : null}>
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
								</ul> */}
							</div>
						)
					)}
				</div>
			</section>
		);
	}
}

export default Projects;
