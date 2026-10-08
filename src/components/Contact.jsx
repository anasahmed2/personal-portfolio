import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiOutlineMail, HiOutlineSparkles } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './reactbits/SpotlightCard'
import ShinyText from './reactbits/ShinyText'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace these with your EmailJS credentials
      const serviceId = 'service_w7x991i'
      const templateId = 'template_yya0eul'
      const publicKey = 'UdwQn1MmdirvUF1QB'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'anas31ahmed03@gmail.com'
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

  const inputClasses =
    'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-indigo-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-indigo-500/30'

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get"
          highlight="In Touch"
          subtitle="Let’s build something amazing together"
        />

        <div className="grid items-start gap-6 lg:grid-cols-5">
          {/* Info card */}
          <Reveal className="h-full lg:col-span-2">
            <SpotlightCard
              className="h-full !bg-ink-800/60 backdrop-blur-xl lg:!p-10"
              spotlightColor="#22d3ee"
              intensity={0.22}
              spotlightSize={320}
              borderGlow={0.85}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-indigo-300">
                <HiOutlineSparkles size={16} />
                <ShinyText text="Available for collaborative work" color="#818cf8" shineColor="#e0e7ff" speed={3} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-100">
                Have an idea worth building?
              </h3>
              <p className="mt-4 leading-relaxed text-slate-400">
                If you want to talk about software, embedded systems, AI, or a product that needs a sharper interface,
                send a message and I&rsquo;ll get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                    Email
                  </div>
                  <a
                    href="mailto:anas31ahmed03@gmail.com"
                    className="mt-1 flex items-center gap-2 text-slate-200 transition-colors duration-300 hover:text-indigo-300"
                  >
                    <HiOutlineMail size={18} />
                    anas31ahmed03@gmail.com
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                    Focus
                  </div>
                  <div className="mt-1 text-slate-200">
                    AI systems, full-stack apps, computer vision, and embedded tooling
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/anasahmed05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-white"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/anasahmed2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <SpotlightCard
              className="!bg-ink-800/60 p-8 backdrop-blur-xl sm:!p-10"
              spotlightColor="#a855f7"
              intensity={0.2}
              spotlightSize={360}
              borderGlow={0.8}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-4 font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                {submitStatus === 'success' && (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-emerald-300">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-center text-rose-300">
                    ✗ Failed to send message. Please email me directly at anas31ahmed03@gmail.com
                  </div>
                )}
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
