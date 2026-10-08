import { FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './reactbits/SpotlightCard'

const Projects = () => {
  const projects = [
    {
      title: "Jarviz AI Assistant",
      technologies: ["Python", "LangChain", "LangGraph", "OpenCV", "PyQt5", "Whisper", "ElevenLabs", "Qwen VL", "EasyOCR", "WebSockets", "Asyncio"],
      link: "https://github.com/namanmiglani/Jarvis"
    },
    {
      title: "GymAI: AI-Powered Exercise Tracker",
      technologies: ["Flask", "React", "JavaScript", "CSS", "OpenCV", "MediaPipe", "Groq", "Axios"],
      link: "https://github.com/hamin2006/nwHacks2025-gymAI"
    },
    {
      title: "Smart Streetlight & Weather Monitoring System",
      technologies: ["Python", "C/C++", "Flask", "JavaScript", "HTML", "CSS", "React", "PostgreSQL", "Raspberry Pi", "MongoDB"],
      link: "https://github.com/UBCSmartCity/SmartStreetLight"
    },
    {
      title: "Finance Tracking Application",
      technologies: ["Java", "Swing", "JUnit", "JSON", "IntelliJ"],
      link: "https://github.com/anasahmed2/Java-Projects/tree/main/project_o5c5g"
    },
    {
      title: "Game Behavior Analysis Model",
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Altair"],
      link: "https://github.com/anasahmed2/Machine-Learning"
    },
    {
      title: "Chess",
      technologies: ["Java", "IntelliJ", "VS Code", "HTML", "CSS", "JavaScript", "JSON"],
      link: "https://github.com/anasahmed2/Chess"
    },
    {
      title: "NFL Championship Classifier",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter Notebook", "GridSearchCV", "Seaborn", "NumPy"],
      link: "https://github.com/anasahmed2/nfl_championship_classifier"
    },
    {
      title: "AI Strategy Game",
      technologies: ["C++17", "SFML", "CMake", "ECS", "Behavior Trees", "FSM", "A* Pathfinding", "WSL"],
      link: "https://github.com/anasahmed2/AI-Strategy-Game"
    }
  ]

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 3) * 100}
              className={`h-full ${index === 0 ? 'xl:col-span-2' : ''}`}
            >
              <SpotlightCard
                className="group h-full !p-0 !bg-ink-800/60 backdrop-blur-xl"
                spotlightColor={index === 0 ? '#22d3ee' : '#a855f7'}
                intensity={0.24}
                spotlightSize={320}
                borderGlow={0.85}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col p-7"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-slate-300 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:text-white">
                      <FaGithub size={20} />
                    </div>
                    <HiArrowUpRight
                      size={22}
                      className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-indigo-300">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex flex-grow flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
