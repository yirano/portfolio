import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
// import ContactIcon from '../../images/icons/feather.png';
import './Contact.css';
class Contact extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: '',
		contactActivate: false,
		hide: ''
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

	handleClick = () => {
		console.log('clicked');
		this.setState((prevState) => {
			return (prevState.contactActivate = !prevState.contactActivate);
		});
	};

	UNSAFE_componentWillMount() {
		this.setState((prevState) => {
			return !this.state.contactActivate ? (prevState.hide = { visibility: 'hidden' }) : null;
		});
	}

	componentDidMount() {
		this.setState((prevState) => {
			prevState.hide = { visibility: 'visible' };
		});
	}
	render() {
		const buttonColor = {
			backgroundColor: 'transparent'
		};
		return (
			<section className="contact" id="contact">
				<button
					style={this.state.contactActivate ? { backgroundColor: 'transparent' } : null}
					className="contactActivate"
					onClick={this.handleClick}
				/>
				<div
					style={this.state.hide}
					className={this.state.contactActivate ? 'expandContact' : 'minimizeContact'}
				>
					<div className="contactFlexwrap">
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="leftContact">
								<label htmlFor="name" />
								<input
									type="text"
									name="name"
									value={this.state.name}
									className="text-primary"
									onChange={this.handleChange.bind(this, 'name')}
									placeholder="Name"
									required
								/>
								<label htmlFor="email" />
								<input
									type="email"
									name="email"
									value={this.state.email}
									className="text-primary"
									onChange={this.handleChange.bind(this, 'email')}
									placeholder="Your Email"
									required
								/>
								<label htmlFor="subject" />
								<input
									type="text"
									name="subject"
									className="text-primary"
									value={this.state.subject}
									onChange={this.handleChange.bind(this, 'subject')}
									placeholder="Subject"
									required
								/>
							</div>
							<div className="rightContact">
								<label htmlFor="message" />
								<textarea
									type="text"
									name="message"
									className="text-primary"
									value={this.state.message}
									onChange={this.handleChange.bind(this, 'message')}
									placeholder="Write your message here"
								/>
								<button variant="primary" type="submit">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		);
	}
}
export default Contact;
