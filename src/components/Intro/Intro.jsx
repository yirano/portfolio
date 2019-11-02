import React from 'react';
import './Intro.css';
import '../../fonts/fonts.css';

export default function Intro() {
	const m = {
		margin: '0 auto',
		paddingLeft: '410px'
	};
	return (
		<div className="heading">
			<div className="colors">
				<div className="colorPal one" />
				<div className="colorPal two" />
				<div className="colorPal four" />
				<div className="colorPal eight" />
				<div style={m}>
					<div className="fonts">
						<h1 className="fontTwo">Hello!</h1>
						<h3 className="fontFour">My name is Tiffany</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
