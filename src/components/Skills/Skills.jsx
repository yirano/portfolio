import React from 'react';
import './Skills.css';
// import HTMLCSS from '../../images/icons/htmlcss.png';
// import ReactIcon from '../../images/icons/react.png';
// import GitIcon from '../../images/icons/git.png';
// import Photoshop from '../../images/icons/photoshop.png';
// import Javascript from '../../images/icons/javascript.png';
// import Bootstrap from '../../images/icons/bootstrap.png';
// import UX from '../../images/icons/ux.png';
// import Responsive from '../../images/icons/responsive.svg';
import SelfImage from '../../images/self.JPG';

export default class Skills extends React.Component {
	showHtmlCount = () => {
		// let htmlCount = 0;
		fetch('http://api.github.com/users/yirano/repos').then((response) => response.json()).then((data) =>
			data.map((x) => {
				console.log(x);
				return x;
			})
		);
	};
	render() {
		return (
			<section className="skills" id="skills">
				<div className="aboutMe">
					<img src={SelfImage} alt="Self Profile" width="400px" />
				</div>
				{/* <div className="skillCards">
					<div className="skillCard htmlcss" onMouseEnter={this.showHtmlCount}>
						<div className="cardTitle">
							<img src={HTMLCSS} alt="HTML/CSS icon" />
							<h4>HTML3/CSS3</h4>
						</div>
					</div>
					<div className="skillCard js">
						<div className="cardTitle">
							<img src={Javascript} alt="Javascript icon" />
							<h4>Javascript</h4>
						</div>
					</div>
					<div className="skillCard bootstrap">
						<div className="cardTitle">
							<img src={Bootstrap} alt="Javascript icon" />
							<h4>Bootstrap</h4>
						</div>
					</div>
					<div className="skillCard react">
						<div className="cardTitle">
							<img src={ReactIcon} alt="React icon" />
							<h4>ReactJS</h4>
						</div>
					</div>
					<div className="skillCard responsive">
						<div className="cardTitle">
							<img src={Responsive} alt="Responsive icon" />
							<h4>Responsive</h4>
						</div>
					</div>
					<div className="skillCard photoshop">
						<div className="cardTitle">
							<img src={Photoshop} alt="Photoshop icon" />
							<h4>Photoshop</h4>
						</div>
					</div>
					<div className="skillCard git">
						<div className="cardTitle">
							<img src={GitIcon} alt="Git icon" />
							<h4>Git</h4>
						</div>
					</div>
					<div className="skillCard ux">
						<div className="cardTitle">
							<img src={UX} alt="UX icon" />
							<h4>User Testing</h4>
						</div>
					</div>
				</div> */}
			</section>
		);
	}
}
