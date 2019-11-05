import React, { Component } from 'react';
import ProjectBook from './ProjectBook';

export class ProjectShelf extends Component {
	abc = () => {
		console.log('HI');
	};
	render() {
		return (
			<div className="projectShelf">
				<ProjectBook />
			</div>
		);
	}
}

export default ProjectShelf;
