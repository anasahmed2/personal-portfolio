import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Experience = () => {
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
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional"
          highlight="Experience"
          subtitle="My journey in the tech industry"
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <Reveal key={`${exp.company}-${index}`} delay={index * 100}>
                <div
                  className={`relative pl-10 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:ml-auto md:pl-12'
                      : 'md:mr-auto md:pr-12 md:text-right'
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink-950 ring-4 ring-indigo-500/30 left-0 md:top-3 ${
                      index % 2 === 0 ? 'md:-left-2' : 'md:left-auto md:-right-2'
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                  </span>

                  <div className="card p-6 text-left">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="chip font-mono">{exp.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="mt-1 font-semibold text-indigo-300">{exp.company}</p>
                    {exp.description && (
                      <p className="mt-4 leading-relaxed text-slate-400">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
