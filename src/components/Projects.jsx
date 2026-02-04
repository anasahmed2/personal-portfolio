const Projects = () => {
  // Placeholder data - you'll fill this in later
  const projects = [
    {
      title: "Jarviz AI Assistant",
      description: "Futuristic voice-activated AI assistant inspired by Iron Man's JARVIS. Features multimodal vision processing, real-time camera analysis, OCR translation, weather integration, and an immersive PyQt5 HUD overlay with LangGraph-orchestrated agent workflows.",
      technologies: ["Python", "LangChain", "LangGraph", "OpenCV", "PyQt5", "Whisper", "ElevenLabs", "Qwen VL", "EasyOCR", "WebSockets", "Asyncio"],
      link: "https://github.com/namanmiglani/Jarvis"
    },
    {
      title: "Exercise Form Tracker",
      description: "Full-stack application with Flask backend and React frontend. Integrated OpenCV and MediaPipe achieving 95% accuracy in motion tracking and vector angle calculations for precise exercise movement detection.",
      technologies: ["Flask", "React", "JavaScript", "CSS", "OpenCV", "MediaPipe", "Groq", "Axios"],
      link: "https://github.com/hamin2006/nwHacks2025-gymAI"
    },
    {
      title: "Smart Streetlight & Weather Monitoring System",
      description: "Built a smart streetlight and weather station using STM32 to enable adaptive lighting, real-time environmental monitoring, and cloud data visualization. Streams live sensor and air-quality data to a web dashboard for energy optimization.",
      technologies: ["Python", "C/C++", "Flask", "JavaScript", "HTML", "CSS", "React", "PostgreSQL", "Raspberry Pi", "MongoDB"],
      link: "https://github.com/UBCSmartCity/SmartStreetLight"
    },
    {
      title: "Finance Tracking Application",
      description: "Finance tracker with Java backend and Swing GUI for managing financial lists and tracking transactions. Achieved 95% test coverage with JUnit, validating 30+ methods and classes for a bug-free experience.",
      technologies: ["Java", "Swing", "JUnit", "JSON", "IntelliJ"],
      link: "https://github.com/anasahmed2/Java-Projects/tree/main/project_o5c5g"
    },
    {
      title: "Game Behavior Analysis Model",
      description: "K-Nearest Neighbors classification model using Scikit-learn to predict player experience levels. Improved accuracy from 70% to 90% through hyperparameter tuning with GridSearchCV on 300+ entry dataset.",
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Altair"],
      link: "https://github.com/anasahmed2/Machine-Learning"
    },
    {
      title: "Chess",
      description: "Java-based chess game with a graphical user interface using HTML, CSS and Javascript. Features include two-player mode, move validation, check/checkmate detection, and a user-friendly design for an engaging gameplay experience.",
      technologies: ["Java", "IntelliJ", "VS Code", "HTML", "CSS", "JavaScript", "JSON"],
      link: "https://github.com/anasahmed2/Chess"
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
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105 relative overflow-hidden flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
