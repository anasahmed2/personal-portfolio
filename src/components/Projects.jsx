import { FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const projects = [
    {
      title: "Jarviz AI Assistant",
      description: "Futuristic voice-activated AI assistant inspired by Iron Man's JARVIS. Features multimodal vision processing, real-time camera analysis, OCR translation, weather integration, and an immersive PyQt5 HUD overlay with LangGraph-orchestrated agent workflows.",
      technologies: ["Python", "LangChain", "LangGraph", "OpenCV", "PyQt5", "Whisper", "ElevenLabs", "Qwen VL", "EasyOCR", "WebSockets", "Asyncio"],
      link: "https://github.com/namanmiglani/Jarvis"
    },
    {
      title: "GymAI: AI-Powered Exercise Tracker",
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
    },
    {
      title: "NFL Championship Classifier",
      description: "Machine learning system using XGBoost to predict NFL Super Bowl champions based on historical team performance data. Implements time-based cross-validation to prevent data leakage, hyperparameter tuning with GridSearchCV, and comprehensive evaluation metrics including Log Loss, ROC-AUC, and Brier Score for accurate probability calibration.",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter Notebook", "GridSearchCV", "Seaborn", "NumPy"],
      link: "https://github.com/anasahmed2/nfl_championship_classifier"
    },
    {
      title: "AI Strategy Game",
      description: "C++/SFML top-down RTS prototype with a custom ECS architecture. Features player and enemy factions, a worker economy with gold gathering, unit production, combat, A* grid pathfinding, behavior-tree-driven enemy AI with a shared blackboard, fog of war, drag-box selection, and a HUD/debug overlay.",
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
              className={index === 0 ? 'xl:col-span-2' : ''}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-7"
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
                <p className="mt-3 flex-grow leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
