import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<main>
				<Header />
				<Intro />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
