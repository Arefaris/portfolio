import usePortfolioStore from '../../store/portfolio-store'
import './Header.css'

const Header = () => {
	const { activeSection, setActiveSection } = usePortfolioStore()

	const scrollToSection = (sectionId: string) => {
		setActiveSection(sectionId)
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<header className="header">
			<div className="header-container">
				<div className="logo">
					<h1>Vladislav Fishman</h1>
				</div>
				<nav className="navigation">
					<ul>
						<li>
							<button
								className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
								onClick={() => scrollToSection('about')}
							>
								About Me
							</button>
						</li>
						<li>
							<button
								className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
								onClick={() => scrollToSection('projects')}
							>
								Projects
							</button>
						</li>
						<li>
							<button
								className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
								onClick={() => scrollToSection('contact')}
							>
								Contact
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header