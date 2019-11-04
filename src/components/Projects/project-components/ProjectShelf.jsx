import React, { Component } from 'react';

export class ProjectShelf extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div className="projectShelf">
				{this.props.items.map((item) => (
					<div key={item.id} className="projectShelfCard">
						<div className="imgControl" id="imgControl" />
						<img src={item.image} alt="" />
						<h3 className="projectShelfTitle">{item.projectName}</h3>
					</div>
				))}
			</div>
		);
	}
}

export default ProjectShelf;
