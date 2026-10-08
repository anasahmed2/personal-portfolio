import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Experience = () => {
  const experiences = [
    {
      title: "AI Software Engineer Intern",
      company: "Ericsson",
      period: "Sep 2026 - Dec 2026"
    },
    {
      title: "Software Engineer Intern",
      company: "Morgan Stanley",
      period: "May 2026 - Aug 2026"
    },
    {
      title: "Software Engineer Intern",
      company: "Atlas Power Technologies",
      period: "May 2025 - Dec 2025"
    },
    {
      title: "Software Engineer",
      company: "UBC SAE AeroDesign",
      period: "Sep 2025 - Present"
    },
    {
      title: "Software Engineer",
      company: "UBC Smart City",
      period: "Jan 2025 - Sep 2025"
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
