import Reveal from './Reveal'

const SectionHeading = ({ eyebrow, title, highlight, subtitle }) => {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <Reveal>
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeading
