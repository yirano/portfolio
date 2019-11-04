import React, { Component } from "react";
import projects from "./ProjectLibrary";

export class ProjectBook extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects
    };
  }

  flip = item => {
    console.log(this.id);
    this.state.projects.map(project => {
      this.setState(prevState => {
        return (project.active = !project.active);
      });
      return project.active;
    });
  };

  render(props) {
    return (
      <div className="projectBook">
        {this.state.projects.map(({ id, image, projectName }) => (
          <div
            key={id}
            className="projectShelfCard"
            onMouseEnter={() => this.flip(id)}
            onMouseLeave={this.flip}
          >
            <img src={image} alt="" />
            <h3 className="projectShelfTitle">{projectName}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectBook;
