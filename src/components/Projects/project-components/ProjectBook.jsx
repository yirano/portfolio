import React, { Component } from 'react';
import projects from './ProjectLibrary';

export class ProjectBook extends Component {
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

	switch = (id) => {
		this.setState((prevState) => {
			return (prevState.switch = !prevState.switch);
		});
		this.setState((prevState) => {
			return (prevState.projectID = id);
		});
	};

	render(props) {
		const opacity = {
			opacity: 1,
			transition: 'all 600ms'
		};

		return (
			<div className="projects">
				<div className={this.state.switch ? 'getRidOf' : 'projectBook'}>
					{this.state.projects.map(({ id, image, projectName, active }) => (
						<div
							key={id}
							className="projectShelfCard"
							onMouseEnter={() => this.flip(id)}
							onMouseLeave={() => this.flip(id)}
							onClick={() => this.switch(id)}
						>
							<img src={image} alt="" className={active ? 'cardFlip' : ''} />
							<h3 className="projectShelfTitle" style={active ? opacity : null}>
								{projectName}
							</h3>
						</div>
					))}
				</div>
				{this.state.projects.map(({ projectName, id, image, projectURL, projectGit, projectLang }) => {
					if (this.state.projectID === id) {
						return (
							<div key={id} className={this.state.switch ? 'projectPresent' : 'getRidOf'}>
								<div key={id} className="leftContent">
									<img src={image} alt="" />
								</div>
								<div className="rightContent">
									<h3>{projectName}</h3>
									<ul>
										<li>
											<a href={projectURL} target="_blank" rel="noopener noreferrer">
												Live Page
											</a>
										</li>
										<li>
											<a href={projectGit} target="_blank" rel="noopener noreferrer">
												Project Github
											</a>
										</li>
										<li>{projectLang.join(', ').toUpperCase()}</li>
									</ul>
									<button onClick={() => this.switch(id)} className="close">
										[<span className="highlight">Back</span>]
									</button>
								</div>
							</div>
						);
					}
				})}
			</div>
		);
	}
}

export default ProjectBook;
