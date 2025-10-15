import { create } from 'zustand'

export interface Project {
	id: number
	title: string
	description: string
	githubUrl: string
	liveDemo?: string
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
			title: 'From-x.com',
			description: 'The fastest and easiest way to download videos from Twitter/X. Lightning-fast downloads with HD quality support up to 1080p. No sign-up required, no watermarks - just paste the URL and download. Used by hundreds of people daily.',
			githubUrl: 'https://github.com/Arefaris/xcomdownloader',
			liveDemo: "https://from-x.com/",
			technologies: ['React', 'TypeScript']

		},
		{
			id: 2,
			title: 'SmartTrip',
			description: 'A travel planning application with AI-powered trip generation. Features user authentication, trip planning with budget and date selection, and responsive design using React, TypeScript, and Zustand.',
			githubUrl: 'https://github.com/Arefaris/SmartTrip.git',
			liveDemo: "https://smart-trip.cc/",
			technologies: ['React', 'TypeScript', 'Zustand', 'Node.js', 'Express', 'PostgreSQL']
		},
		{
			id: 3,
			title: 'Telegram AI Chatbot',
			description: 'A Telegram bot built with Telegraf.js that integrates with OpenAI API to provide AI-powered conversations. Features custom prompts, user authentication, and configurable AI models.',
			githubUrl: 'https://github.com/Arefaris/telegram_bot.git',
			technologies: ['Node.js', 'Telegraf.js', 'OpenAI API', 'TypeScript']
		},
		{
			id: 4,
			title: 'Book Recommendation App',
			description: 'A web application that provides personalized book recommendations using AI. Integrates with Open Library API to fetch book details and covers, featuring responsive design and real-time search.',
			githubUrl: 'https://github.com/Arefaris/vigilant-octo-journey.git',
			liveDemo: "https://nextbookread.netlify.app/",
			technologies: ['TypeScript', 'Vite', 'OpenAI API', 'Open Library API']
		},
		{
			id: 5,
			title: 'Easy Media Renamer',
			description: 'A desktop application built with Go and Wails that allows users to rename TV show episodes using TVmaze API data. Features cross-platform support and a modern React frontend.',
			githubUrl: 'https://github.com/Arefaris/Easy-Media-Renamer.git',
			technologies: ['Go', 'Wails', 'React', 'TVmaze API']
		}
	],
	setActiveSection: (section) => set({ activeSection: section }),
}))

export default usePortfolioStore