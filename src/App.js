import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

export class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<main>
					<Header />
					<About />
					<Projects />
					<Contact />
				</main>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
