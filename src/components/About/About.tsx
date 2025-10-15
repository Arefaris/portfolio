import './About.css'

const About = () => {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className="about-content">
					<div className="about-text">
						<img className='me' src='./photo/img.png'></img>
						<h3>About Me</h3>
						<p>
							Full Stack Developer with experience in JavaScript, TypeScript, Python, and SQL. 
							Skilled in building responsive, scalable, and real-time web applications using React, 
							modern frameworks, and development tools.
						</p>
						<div className="skills">
				
							<div className="skills-grid">
								<div className="skill-tag">
									<span>Frontend Development</span>
									<p>React, TypeScript, Modern JavaScript frameworks and responsive design</p>
								</div>

								<div className="skill-tag">
									<span>Backend Development</span>
									<p>Node.js, Express, RESTful APIs and microservices architecture</p>
								</div>

								<div className="skill-tag">
									<span>Database Design</span>
									<p>PostgreSQL, SQL optimization and database architecture</p>
								</div>
								
								<div className="skill-tag">
									<span>Mobile & Real-time</span>
									<p>Responsive applications and real-time features implementation</p>
								</div>
								
							</div>
						</div>

						<div className="technologies">
							<h3>Technologies I Work With</h3>
							<div className='technologies-flex'> 
								<span>JavaScript</span>
								<span>TypeScript</span>
								<span>Python</span>
								<span>SQL</span>
								<span>React</span>
								<span>Express</span>
								<span>PostgreSQL</span>
								<span>Zustand</span>
								<span>Telegraf.js</span>
								<span>OpenAI API</span>
								<span>Go</span>
							</div>
						
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default About