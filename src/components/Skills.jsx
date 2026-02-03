const Skills = () => {
  // Placeholder data - you'll fill this in later
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "C", "C++", "C#", "SQL", "HTML", "CSS", "R"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Flask", ".NET Framework", "Express.js", "LangChain", "LangGraph", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "MediaPipe", "YOLO", "PyQt5", "Whisper", "ElevenLabs", "Nivo.js", "Matplotlib", "Altair", "Tailwind CSS", "Swing", "JUnit", "MSTest", "Axios", "WebSockets", "Asyncio"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "PostgreSQL", "MongoDB", "MySQL", "VS Code", "IntelliJ", "Visual Studio", "Jupyter Notebook", "Jira", "Postman", "Raspberry Pi", "STM32", "TI AM243x", "UART", "Modbus", "LiDAR", "AprilTags", "GridSearchCV"]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {category.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 group cursor-default"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
