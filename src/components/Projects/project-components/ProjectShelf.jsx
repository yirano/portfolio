import React, { Component } from "react";

export class ProjectShelf extends Component {
  constructor() {
    super();
    this.state = {
      flip: false
    };
  }

  flip = props => {
    console.log(this.props.items);
    this.setState(prevState => {
      return (prevState.flip = !prevState.flip);
    });
  };

  render(props) {
    const flipCard = this.state.flip ? "cardFlip" : "";
    return (
      <div className="projectShelf">
        {this.props.items.map(item => (
          <div
            key={item.id}
            className="projectShelfCard"
            onMouseEnter={this.flip}
            onMouseLeave={this.flip}
          >
            <img src={item.image} alt="" className={flipCard} />
            <h3 className="projectShelfTitle">{item.projectName}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectShelf;
