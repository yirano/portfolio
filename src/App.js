import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
import About from './components/About/About';
// import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<main>
				<Header />
				<About />
				{/* <Skills /> */}
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
