import React from 'react';
import './Contact.css';

export default function Contact() {
	return (
		<section className=" contact" id="contact">
			<form action="">
				<label htmlFor="name" />
				<input type="text" name="name" id="name" placeholder="Name" required />
				<label htmlFor="email" />
				<input type="email" name="email" id="email" placeholder="Email Address" required />
				<label htmlFor="phone" />
				<input type="tel" name="phone" id="phone" placeholder="Phone Number - optional" />
				<label htmlFor="message" />
				<input type="text" name="message" id="message" placeholder="Message" />
			</form>
		</section>
	);
}
