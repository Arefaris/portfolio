import { create } from 'zustand'

export interface Project {
	id: number
	title: string
	description: string
	githubUrl: string
	technologies: string[]
}

interface PortfolioState {
	activeSection: string
	projects: Project[]
	setActiveSection: (section: string) => void
}

const usePortfolioStore = create<PortfolioState>((set) => ({
	activeSection: 'about',
	projects: [
		{
			id: 1,
			title: 'SmartTrip',
			description: 'A travel planning application with AI-powered trip generation. Features user authentication, trip planning with budget and date selection, and responsive design using React, TypeScript, and Zustand.',
			githubUrl: 'https://github.com/Arefaris/SmartTrip.git',
			technologies: ['React', 'TypeScript', 'Zustand', 'Node.js', 'Express', 'PostgreSQL']
		},
		{
			id: 2,
			title: 'Telegram AI Chatbot',
			description: 'A Telegram bot built with Telegraf.js that integrates with OpenAI API to provide AI-powered conversations. Features custom prompts, user authentication, and configurable AI models.',
			githubUrl: 'https://github.com/Arefaris/telegram_bot.git',
			technologies: ['Node.js', 'Telegraf.js', 'OpenAI API', 'TypeScript']
		},
		{
			id: 3,
			title: 'Book Recommendation App',
			description: 'A web application that provides personalized book recommendations using AI. Integrates with Open Library API to fetch book details and covers, featuring responsive design and real-time search.',
			githubUrl: 'https://github.com/Arefaris/vigilant-octo-journey.git',
			technologies: ['TypeScript', 'Vite', 'OpenAI API', 'Open Library API']
		},
		{
			id: 4,
			title: 'Easy Media Renamer',
			description: 'A desktop application built with Go and Wails that allows users to rename TV show episodes using TVmaze API data. Features cross-platform support and a modern React frontend.',
			githubUrl: 'https://github.com/Arefaris/Easy-Media-Renamer.git',
			technologies: ['Go', 'Wails', 'React', 'TVmaze API']
		}
	],
	setActiveSection: (section) => set({ activeSection: section }),
}))

export default usePortfolioStore