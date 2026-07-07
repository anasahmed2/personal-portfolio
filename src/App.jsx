import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
