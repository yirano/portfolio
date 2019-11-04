import React, { Component } from 'react';
import './Projects.css';
import BookmarkLP from '../../images/projectImgs/BookmarkLP.jpg';

export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			active: true,
			projects: [
				{
					id: 0,
					image: '{BookmarkLP}',
					projectName: 'Bookmark Landing Page',
					projectGit: 'https://github.com/yirano/react-bookmark_lp',
					projectURL: 'https://yirano.github.io/react-bookmark_lp/',
					projectLang: [ 'html', 'css', 'javascript', 'react' ],
					active: true
				},
				{
					id: 1,
					image: '{BookmarkLP}',
					projectName: 'Four Card Feature',
					projectGit: 'https://github.com/yirano/frontend-four_card_feature',
					projectURL: 'https://yirano.github.io/frontend-four_card_feature/src/',
					projectLang: [ 'html', 'css', 'javascript' ],
					active: false
				},
				{
					id: 2,
					image: '{BookmarkLP}',
					projectName: 'Base Apparel',
					projectGit: 'https://github.com/yirano/frontend-base_apparel',
					projectURL: 'https://yirano.github.io/frontend-base_apparel/src/',
					projectLang: [ 'html', 'css', 'javascript' ],
					active: false
				}
			]
		};
	}

	closePresent = () => {
		this.setState((prevState) => {
			return (this.state.active = !this.state.active);
		});
	};
	render() {
		return (
			<section className="projects" id="projects">
				{this.state.projects.map((project) => {
					return this.state.active && project.active ? (
						<div key={project.id} className="projectPresent">
							<div className="projectDisplay">
								<img src={BookmarkLP} alt="Bookmark LP" />
							</div>
							<div className="projectInfo">
								<h3>{project.projectName}</h3>
							</div>
							<button onClick={this.closePresent}>[close]</button>
						</div>
					) : (
						<div key={project.id} className="projectShelf" />
					);
				})}
			</section>
		);
	}
}

export default Projects;
