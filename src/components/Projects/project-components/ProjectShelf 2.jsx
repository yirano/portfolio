import React, { Component } from 'react';
import ProjectBook from './ProjectBook';

export class ProjectShelf extends Component {
	constructor() {
		super();
	}

	render(props) {
		return (
			<div className="projectShelf">
				<ProjectBook items={this.props.items} />
			</div>
		);
	}
}

export default ProjectShelf;
