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
		const hide = {
			opacity: 0
		};
		return (
			<div className="projects">
				<div className="projectBook" style={this.state.switch ? hide : null}>
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
				<div style={this.state.switch ? null : hide}>
					{this.state.projects.map(({ projectName, id, image }) => {
						if (this.state.projectID === id) {
							return (
								<div key={id} className="projectPresent">
									<img src={image} alt="" />
									<h4>{projectName}</h4>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	}
}

export default ProjectBook;
