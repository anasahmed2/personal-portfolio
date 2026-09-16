import { HiOutlineCode, HiOutlineCube, HiOutlineChip } from 'react-icons/hi'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: HiOutlineCode,
      skills: ["Python", "Java", "JavaScript", "C", "C++", "C#", "SQL", "HTML", "CSS", "R"]
    },
    {
      title: "Frameworks & Libraries",
      icon: HiOutlineCube,
      skills: ["React", "Next.js", "Flask", ".NET Framework", "Express.js", "LangChain", "LangGraph", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "MediaPipe", "YOLO", "PyQt5", "Whisper", "ElevenLabs", "Nivo.js", "Matplotlib", "Altair", "Tailwind CSS", "Swing", "JUnit", "MSTest", "Axios", "WebSockets", "Asyncio"]
    },
    {
      title: "Tools & Technologies",
      icon: HiOutlineChip,
      skills: ["Git", "GitHub", "PostgreSQL", "MongoDB", "MySQL", "VS Code", "IntelliJ", "Visual Studio", "Jupyter Notebook", "Jira", "Postman", "Raspberry Pi", "STM32", "TI AM243x", "UART", "Modbus", "LiDAR", "AprilTags", "GridSearchCV"]
    }
  ]

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills &"
          highlight="Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={index * 120}>
                <div className="card group h-full p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
