import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-xl border-b border-slate-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          <div className="text-2xl font-bold">
            <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-slate-100 shadow-sm border border-slate-700 transition-transform duration-300 hover:scale-[1.02]">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300"></span>
              <span className="gradient-text">Portfolio</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-300 hover:text-indigo-300 transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-slate-300 hover:text-indigo-300 transition-all duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-indigo-300 transition-all duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-indigo-300 transition-all duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-indigo-300 transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex space-x-3">
            <a 
              href="https://www.linkedin.com/in/anasahmed05/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800/80 p-2 text-slate-300 shadow-sm border border-slate-700 transition-all duration-300 transform hover:scale-110 hover:text-indigo-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/anasahmed2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-white/80 p-2 text-slate-600 shadow-sm border border-sky-100 transition-all duration-300 transform hover:scale-110 hover:text-sky-600"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="/assets/Anas_Ahmed_Software_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-white/80 p-2 text-slate-600 shadow-sm border border-sky-100 transition-all duration-300 transform hover:scale-110 hover:text-sky-600"
              aria-label="Resume"
            >
              <FaFileDownload size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
