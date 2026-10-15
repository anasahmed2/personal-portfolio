import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiExternalLink,
} from 'react-icons/fi'
import './orbit-portfolio.css'

const projects = [
  {
    name: 'Jarviz AI Assistant',
    technologies: [
      'Python',
      'LangChain',
      'LangGraph',
      'OpenCV',
      'PyQt5',
      'Whisper',
      'ElevenLabs',
      'Qwen VL',
      'EasyOCR',
      'WebSockets',
      'Asyncio',
    ],
    repository: 'https://github.com/namanmiglani/Jarvis',
    position: { left: '14%', top: '19%' },
  },
  {
    name: 'GymAI: AI-Powered Exercise Tracker',
    technologies: [
      'Flask',
      'React',
      'JavaScript',
      'CSS',
      'OpenCV',
      'MediaPipe',
      'Groq',
      'Axios',
    ],
    repository: 'https://github.com/hamin2006/nwHacks2025-gymAI',
    position: { left: '55%', top: '12%' },
  },
  {
    name: 'Smart Streetlight & Weather Monitoring System',
    technologies: [
      'Python',
      'C/C++',
      'Flask',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'PostgreSQL',
      'Raspberry Pi',
      'MongoDB',
    ],
    repository: 'https://github.com/UBCSmartCity/SmartStreetLight',
    position: { left: '66%', top: '35%' },
  },
  {
    name: 'Finance Tracking Application',
    technologies: ['Java', 'Swing', 'JUnit', 'JSON', 'IntelliJ'],
    repository:
      'https://github.com/anasahmed2/Java-Projects/tree/main/project_o5c5g',
    position: { left: '48%', top: '58%' },
  },
  {
    name: 'Game Behavior Analysis Model',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Altair'],
    repository: 'https://github.com/anasahmed2/Machine-Learning',
    position: { left: '17%', top: '63%' },
  },
  {
    name: 'Chess',
    technologies: [
      'Java',
      'IntelliJ',
      'VS Code',
      'HTML',
      'CSS',
      'JavaScript',
      'JSON',
    ],
    repository: 'https://github.com/anasahmed2/Chess',
    position: { left: '7%', top: '40%' },
  },
  {
    name: 'NFL Championship Classifier',
    technologies: [
      'Python',
      'XGBoost',
      'Scikit-learn',
      'Pandas',
      'Matplotlib',
      'Jupyter Notebook',
      'GridSearchCV',
      'Seaborn',
      'NumPy',
    ],
    repository: 'https://github.com/anasahmed2/nfl_championship_classifier',
    position: { left: '45%', top: '80%' },
  },
  {
    name: 'AI Strategy Game',
    technologies: [
      'C++17',
      'SFML',
      'CMake',
      'ECS',
      'Behavior Trees',
      'FSM',
      'A* Pathfinding',
      'WSL',
    ],
    repository: 'https://github.com/anasahmed2/AI-Strategy-Game',
    position: { left: '77%', top: '68%' },
  },
]

const experience = [
  {
    title: 'AI Software Engineer Intern',
    organization: 'Ericsson',
    date: 'Sep 2026–Dec 2026',
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Morgan Stanley',
    date: 'May 2026–Aug 2026',
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Atlas Power Technologies',
    date: 'May 2025–Dec 2025',
  },
  {
    title: 'Lead Software Engineer',
    organization: 'UBC SAE AeroDesign',
    date: 'Sep 2025–Present',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    skills: 'Python, Java, JavaScript, C, C++, C#, SQL, HTML, CSS, R',
  },
  {
    title: 'Frameworks & libraries',
    skills:
      'React, Next.js, Flask, .NET Framework, Express.js, LangChain, LangGraph, Pandas, NumPy, Scikit-learn, OpenCV, MediaPipe, YOLO, PyQt5, Whisper, ElevenLabs, Nivo.js, Matplotlib, Altair, Tailwind CSS, Swing, JUnit, MSTest, Axios, WebSockets, Asyncio',
  },
  {
    title: 'Tools & technologies',
    skills:
      'Git, GitHub, PostgreSQL, MongoDB, MySQL, VS Code, IntelliJ, Visual Studio, Jupyter Notebook, Jira, Postman, Raspberry Pi, STM32, TI AM243x, UART, Modbus, LiDAR, AprilTags, GridSearchCV',
  },
]

function ExternalLinkButton({ href, children }) {
  return (
    <a className="orbit-button" href={href} target="_blank" rel="noreferrer">
      {children}
      <FiArrowUpRight size={14} aria-hidden="true" />
    </a>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = 'service_w7x991i'
      const templateId = 'template_yya0eul'
      const publicKey = 'UdwQn1MmdirvUF1QB'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'anas31ahmed03@gmail.com',
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="orbit-form" onSubmit={handleSubmit}>
      <div className="orbit-field-group">
        <label htmlFor="name">Name</label>
        <input
          className="orbit-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>

      <div className="orbit-field-group">
        <label htmlFor="email">Email</label>
        <input
          className="orbit-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div className="orbit-field-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="orbit-textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tell me about your project..."
        />
      </div>

      <button className="orbit-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'}
        <FiArrowUpRight size={14} aria-hidden="true" />
      </button>

      {submitStatus === 'success' && (
        <p className="orbit-form-status is-success">
          ✓ Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="orbit-form-status is-error">
          ✗ Failed to send message. Please email me directly at anas31ahmed03@gmail.com
        </p>
      )}
    </form>
  )
}

export default function OrbitPortfolio() {
  const [activeProject, setActiveProject] = useState(0)
  const project = projects[activeProject]

  return (
    <main className="orbit-page" id="top">
      <header className="orbit-topbar">
        <a className="orbit-brand" href="#top" aria-label="Anas Ahmed, back to top">
          <span className="orbit-brand-mark" aria-hidden="true">
            A
          </span>
          <span>
            ANAS AHMED <small>/ PORTFOLIO</small>
          </span>
        </a>
        <nav className="orbit-nav" aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a className="orbit-nav-contact" href="#contact">
            Connect <FiArrowUpRight size={12} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="orbit-hero" aria-labelledby="orbit-title">
        <div className="orbit-shell orbit-hero-layout">
          <div className="orbit-hero-copy">
            <div className="orbit-kicker">
              Personal observatory · software & systems
            </div>
            <h1 className="orbit-title" id="orbit-title">
              Anas<span>Ahmed.</span>
            </h1>
            <p className="orbit-hero-intro">
              <strong>Computer Science @ UBC</strong>
              <br />
              Software Engineering, AI, and Embedded Systems.
            </p>
            <div className="orbit-hero-actions">
              <a className="orbit-button" href="#work">
                Explore the project field
                <FiArrowDownRight size={15} aria-hidden="true" />
              </a>
              <ExternalLinkButton href="/assets/Anas_Ahmed_Software_Resume.pdf">
                Résumé
              </ExternalLinkButton>
            </div>
          </div>

          <div className="orbit-profile">
            <div className="orbit-profile-orbit" aria-hidden="true" />
            <div className="orbit-portrait-wrap">
              <span className="orbit-portrait-fallback" aria-hidden="true">
                AA
              </span>
              <img
                className="orbit-portrait"
                src="/assets/profile_pic.jpg"
                alt="Anas Ahmed"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="orbit-profile-caption">
              <span>Computer Science</span>
              <span>UBC</span>
            </div>
          </div>
          <div className="orbit-index" aria-hidden="true">
            FIELD NOTES · 01—08
          </div>
        </div>
        <a className="orbit-scroll-cue" href="#work">
          Scroll to explore
        </a>
      </section>

      <div className="orbit-shell orbit-strip" aria-label="Profile overview">
        <div className="orbit-strip-cell">
          <span className="orbit-label">Current study</span>
          <span className="orbit-strip-value">Computer Science @ UBC</span>
        </div>
        <div className="orbit-strip-cell">
          <span className="orbit-label">Current role</span>
          <span className="orbit-strip-value">
            AI Software Engineer Intern @ Ericsson
          </span>
        </div>
        <div className="orbit-strip-cell">
          <span className="orbit-label">Role dates</span>
          <span className="orbit-strip-value">Sep 2026–Dec 2026</span>
        </div>
      </div>

      <section
        className="orbit-section orbit-work"
        id="work"
        aria-labelledby="orbit-work-title"
      >
        <div className="orbit-shell">
          <div className="orbit-section-heading">
            <div>
              <div className="orbit-label">The project field · 08 objects</div>
              <h2 className="orbit-heading" id="orbit-work-title">
                Choose a <em>Project.</em>
              </h2>
            </div>
          </div>
          <div className="orbit-discovery">
            <div className="orbit-field" aria-label="Interactive project constellation">
              <span className="orbit-field-label">
                PROJECT FIELD / SELECT A NODE
              </span>
              {projects.map((item, index) => (
                <button
                  className="orbit-node"
                  key={item.name}
                  type="button"
                  style={{
                    left: item.position.left,
                    top: item.position.top,
                  }}
                  aria-pressed={activeProject === index}
                  aria-label={`Select project ${index + 1}: ${item.name}`}
                  onClick={() => setActiveProject(index)}
                >
                  <span className="orbit-node-dot" aria-hidden="true" />
                  <span className="orbit-node-name">{item.name}</span>
                  <span className="orbit-node-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>

            <article className="orbit-detail" aria-live="polite" aria-atomic="true">
              <div className="orbit-detail-top">
                <span>Selected object</span>
                <span className="orbit-detail-number">
                  {String(activeProject + 1).padStart(2, '0')} / 08
                </span>
              </div>
              <h3>{project.name}</h3>
              <p className="orbit-tech-label">Technologies</p>
              <ul className="orbit-tech-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="orbit-repo"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                Open source repository
                <FiExternalLink size={15} aria-hidden="true" />
              </a>
            </article>
          </div>

          <div className="orbit-project-index" aria-label="All projects">
            {projects.map((item, index) => (
              <button
                className="orbit-index-button"
                key={item.name}
                type="button"
                aria-pressed={activeProject === index}
                onClick={() => setActiveProject(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="orbit-section orbit-experience"
        id="experience"
        aria-labelledby="orbit-experience-title"
      >
        <div className="orbit-shell orbit-experience-layout">
          <div className="orbit-experience-intro">
            <div className="orbit-label">Work, in sequence</div>
            <h2 className="orbit-heading" id="orbit-experience-title">
              <em>Experience.</em>
            </h2>
          </div>
          <div className="orbit-timeline">
            {experience.map((role) => (
              <article
                className="orbit-role"
                key={`${role.organization}-${role.date}`}
              >
                <div className="orbit-role-marker" aria-hidden="true" />
                <div>
                  <h3>{role.title}</h3>
                  <p className="orbit-role-org">{role.organization}</p>
                </div>
                <div className="orbit-role-date">{role.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="orbit-section orbit-skills"
        id="skills"
        aria-labelledby="orbit-skills-title"
      >
        <div className="orbit-shell">
          <h2 className="orbit-heading" id="orbit-skills-title">
            <em>Skills & Technologies.</em>
          </h2>
          <div className="orbit-skills-grid">
            {skillGroups.map((group) => (
              <article className="orbit-skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="orbit-contact"
        id="contact"
        aria-labelledby="orbit-contact-title"
      >
        <div className="orbit-shell orbit-contact-content">
          <div>
            <h2 className="orbit-contact-title" id="orbit-contact-title">
              Continue the
              <br />
              <em>conversation.</em>
            </h2>
            <div className="orbit-contact-side">
              <p>
                Send a message and I’ll get back to you, or reach me directly.
              </p>
              <a className="orbit-contact-direct" href="mailto:anas31ahmed03@gmail.com">
                anas31ahmed03@gmail.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="orbit-shell orbit-footer">
        <p>ANAS AHMED · COMPUTER SCIENCE @ UBC</p>
        <p>
          <a href="https://github.com/anasahmed2" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a
            href="https://www.linkedin.com/in/anasahmed05/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {' · '}
          <a
            href="/assets/Anas_Ahmed_Software_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
        </p>
        <a href="#top">
          Return to observation deck <FiArrowRight size={12} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}
