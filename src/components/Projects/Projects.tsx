import usePortfolioStore, { type Project } from '../../store/portfolio-store'
import './Projects.css'

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="project-card">
			<div className="project-content">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div className="technologies">
					{project.technologies.map((tech, index) => (
						<span key={index} className="tech-tag">
							{tech}
						</span>
					))}
				</div>
				<div className="project-links">
					<a 
						href={project.githubUrl} 
						target="_blank" 
						rel="noopener noreferrer"
						className="github-link"
					>
						View on GitHub →
					</a>
				</div>
			</div>
		</div>
	)
}

const Projects = () => {
	const { projects } = usePortfolioStore()

	return (
		<section id="projects" className="projects-section">
			<div className="projects-container">
				<h2>My Projects</h2>
				<div className="projects-grid">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects