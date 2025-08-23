import './Contact.css'

const Contact = () => {
	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				<h2>Contact Me</h2>
				<div className="contact-content">
					<p>
						I'm always interested in hearing about new opportunities and exciting projects.
						Feel free to get in touch!
					</p>
					<div className="contact-links">
						<a 
							href="https://github.com/Arefaris" 
							target="_blank" 
							rel="noopener noreferrer"
							className="contact-link"
						>
							GitHub
						</a>
						<a 
							href="mailto:fenexxx1@gmail.com" 
							className="contact-link"
						>
							Email
						</a>
						<a 
							href="https://linkedin.com/in/vladislav-fishman" 
							target="_blank" 
							rel="noopener noreferrer"
							className="contact-link"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact