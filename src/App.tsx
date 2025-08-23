import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
