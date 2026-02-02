const Projects = () => {
  // Placeholder data - you'll fill this in later
  const projects = [
    {
      title: "Project 1",
      description: "Description of your project goes here. What it does, what technologies you used, etc.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your project goes here. What it does, what technologies you used, etc.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Description of your project goes here. What it does, what technologies you used, etc.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                >
                  View Project 
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
