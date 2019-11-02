import React from 'react';
import './fonts/fonts.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<main>
			<Header />
			<Intro />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
