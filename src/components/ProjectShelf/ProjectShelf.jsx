import React, { Component } from 'react';
import './ProjectShelf.css';

export class ProjectShelf extends Component {
	render() {
		return (
			<section className="projectShelf">
				<div className="sectionTitle">
					<h3>selected works</h3>
				</div>
				<div className="projectBook">
					{this.props.projects.map(
						({ id, image, projectName, active, projectGit, projectURL, projectLang, projectDesc }) => (
							<div key={id} className="projectShelfCard" onClick={this.handleClick}>
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

export default ProjectShelf;
