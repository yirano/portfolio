import React from 'react';
import './Skills.scss';
import HTMLCSS from '../../images/icons/htmlcss.png';
import ReactIcon from '../../images/icons/react.png';
import Illustrator from '../../images/icons/illustrator.png';
import Photoshop from '../../images/icons/photoshop.png';
import Javascript from '../../images/icons/javascript.png';
import Bootstrap from '../../images/icons/bootstrap.png';
import UX from '../../images/icons/ux.png';
import Responsive from '../../images/icons/responsive.svg';

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
				<div className="skillsText">
					<table className="skillTable">
						<tbody>
							<tr>
								<th>skilled in</th>
							</tr>
							<tr>
								<td>HTML5/CSS3</td>
							</tr>
							<tr>
								<td>Javascript</td>
							</tr>
							<tr>
								<td>ReactJS</td>
							</tr>
							<tr>
								<td>Bootstrap</td>
							</tr>
							<tr>
								<td>Responsive Design</td>
							</tr>
							<tr>
								<td>Photoshop</td>
							</tr>
							<tr>
								<td>Illustrator</td>
							</tr>
							<tr>
								<td>User Testing</td>
							</tr>
							<tr>
								<td>Ruby</td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* <div className="skillCards">
					<div className="skillCard htmlcss" onMouseEnter={this.showHtmlCount}>
						<div className="cardTitle">
							<img src={HTMLCSS} alt="HTML/CSS icon" />
						</div>
					</div>
					<div className="skillCard js">
						<div className="cardTitle">
							<img src={Javascript} alt="Javascript icon" />
						</div>
					</div>
					<div className="skillCard bootstrap">
						<div className="cardTitle">
							<img src={Bootstrap} alt="Javascript icon" />
						</div>
					</div>
					<div className="skillCard react">
						<div className="cardTitle">
							<img src={ReactIcon} alt="React icon" />
						</div>
					</div>
					<div className="skillCard responsive">
						<div className="cardTitle">
							<img src={Responsive} alt="Responsive icon" />
						</div>
					</div>
					<div className="skillCard photoshop">
						<div className="cardTitle">
							<img src={Photoshop} alt="Photoshop icon" />
						</div>
					</div>
					<div className="skillCard git">
						<div className="cardTitle">
							<img src={Illustrator} alt="Adobe Illustrator icon" />
						</div>
					</div>
					<div className="skillCard ux">
						<div className="cardTitle">
							<img src={UX} alt="UX icon" />
						</div>
					</div>
				</div> */}
			</section>
		);
	}
}
