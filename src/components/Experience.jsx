const Experience = () => {
  // Placeholder data - you'll fill this in later
  const experiences = [
    {
      title: "Incoming Software Developer Intern",
      company: "Morgan Stanley",
      period: "May 2026 - Aug 2026",
      description: "Incoming Software Developer Intern at Morgan Stanley."
    },
    {
      title: "Software Developer Intern",
      company: "Atlas Power Technologies",
      period: "May 2025 - Dec 2025",
      description: "Developed a full-stack system using C# and .NET Framework for embedded hardware communication via UART with <20ms latency. Designed data storage using MongoDB and PostgreSQL. Implemented TSN protocol in C across TI AM243x boards achieving 99% reliability. Integrated C++ libmodbus library for Modbus network I/O device communication."
    },
    {
      title: "Software Engineer",
      company: "UBC SAE AeroDesign",
      period: "Sep 2025 - Present",
      description: "Developed autonomous payload-capture system in Python using OpenCV and Pupil AprilTags with >85% tag detection accuracy. Implemented pre-trained YOLO model for real-time payload detection and localization, enhancing system reliability to 95%."
    },
    {
      title: "Software Engineer",
      company: "UBC Smart City",
      period: "Jan 2025 - Sep 2025",
      description: "Designed and implemented PostgreSQL database on Raspberry Pi managing 2000+ sensor readings. Created Python Flask backend with RESTful API. Developed Next.js frontend with React and CSS, integrated Nivo.js for data visualization and analytics."
    }
  ]

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My journey in the tech industry</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-30 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-stretch ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105 flex flex-col justify-between">
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                    <p className="text-gray-300 leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ring-4 ring-slate-900 z-10"></div>
                </div>
                
                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
