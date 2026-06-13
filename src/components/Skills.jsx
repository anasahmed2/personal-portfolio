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
    <section id="skills" className="min-h-screen py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold section-title mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle text-lg">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-[1.75rem] transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 via-fuchsia-500 to-orange-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-sky-200">
                  {category.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-2 text-slate-600 hover:text-sky-700 transition-colors duration-300 group cursor-default"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-orange-400 rounded-full group-hover:scale-125 transition-transform"></div>
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
