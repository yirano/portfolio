import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './Contact.css';
class Contact extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state;
		let templateParams = {
			email: email,
			from_name: name,
			to_name: 'user_Ph7Q4dFDfBXaCF6O82qSl',
			subject: subject,
			message_html: message
		};
		emailjs.send('gmail', 'template_eOv2qlYU', templateParams, 'user_Ph7Q4dFDfBXaCF6O82qSl');
		this.resetform();
	}
	resetform() {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value });
	};
	render() {
		return (
			<section className="contactContainer">
				<div className="leftContent">
					<h3>Let's Work Together!</h3>
				</div>

				<div className="rightContent">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<label className="text-muted" />
						<input
							type="email"
							name="email"
							value={this.state.email}
							className="text-primary"
							onChange={this.handleChange.bind(this, 'email')}
							placeholder="Enter email"
						/>
						<label className="text-muted" />
						<input
							type="text"
							name="name"
							value={this.state.name}
							className="text-primary"
							onChange={this.handleChange.bind(this, 'name')}
							placeholder="Name"
						/>
						<label className="text-muted" />
						<input
							type="text"
							name="subject"
							className="text-primary"
							value={this.state.subject}
							onChange={this.handleChange.bind(this, 'subject')}
							placeholder="Subject"
						/>
						<label className="text-muted" />
						<textarea
							type="text"
							name="message"
							className="text-primary"
							value={this.state.message}
							onChange={this.handleChange.bind(this, 'message')}
						/>
						<button variant="primary" type="submit">
							Submit
						</button>
					</form>
				</div>
			</section>
		);
	}
}
export default Contact;
