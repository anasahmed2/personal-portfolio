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
      scrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Portfolio</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/anasahmed05/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/anasahmed2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="YOUR_RESUME_URL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
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
