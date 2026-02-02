const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-72 h-72 glass rounded-full flex items-center justify-center overflow-hidden border-2 border-purple-500/50">
                <span className="text-gray-400 text-lg">Your Photo</span>
              </div>
            </div>
          </div>

          {/* Summary section */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-xl text-purple-400 font-medium animate-fade-in">Welcome to my portfolio</h2>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm <br/>
                <span className="gradient-text">Anas Ahmed</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Computer Science Student & Software Developer
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I'm a Computer Science student at UBC with a passion for building innovative solutions. 
              From developing real-time embedded systems to creating machine learning applications, 
              I love solving complex problems with clean, efficient code. Currently exploring opportunities 
              in full-stack development and systems programming.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 glass text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
