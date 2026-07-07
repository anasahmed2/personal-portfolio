const Experience = () => {
  // Placeholder data - you'll fill this in later
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Morgan Stanley",
      period: "May 2026 - Aug 2026"
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
    <section id="experience" className="min-h-screen py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold section-title mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle text-lg">My journey in the tech industry</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="glass rounded-[1.75rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-t-4 border-indigo-400"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-indigo-300 font-semibold">{exp.company}</p>
                </div>
                <span className="rounded-full bg-slate-700/50 px-4 py-2 text-sm font-semibold text-indigo-300">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
