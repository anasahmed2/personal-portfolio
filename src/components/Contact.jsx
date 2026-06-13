import { useState } from 'react'
import emailjs from '@emailjs/browser'

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

  return (
    <section id="contact" className="min-h-screen py-24 relative flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold section-title mb-4">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="section-subtitle text-lg">Let’s build something amazing together</p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="glass rounded-[2rem] p-8 lg:p-10 lg:col-span-2">
            <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 mb-6">
              Available for collaborative work
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Have an idea worth building?</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              If you want to talk about software, embedded systems, AI, or a product that needs a sharper interface,
              send a message and I’ll get back to you.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4">
                <div className="text-sm font-semibold text-sky-700 uppercase tracking-[0.2em]">Email</div>
                <a href="mailto:anas31ahmed03@gmail.com" className="mt-1 block text-slate-700 hover:text-sky-700 transition-colors duration-300">
                  anas31ahmed03@gmail.com
                </a>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <div className="text-sm font-semibold text-amber-700 uppercase tracking-[0.2em]">Focus</div>
                <div className="mt-1 text-slate-700">AI systems, full-stack apps, computer vision, and embedded tooling</div>
              </div>
            </div>
          </div>

          <div className="glass p-8 sm:p-10 rounded-[2rem] lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/90 border border-sky-100 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 shadow-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/90 border border-sky-100 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-6 py-4 bg-white/90 border border-sky-100 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 resize-none shadow-sm"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-orange-400 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-sky-200 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="text-emerald-700 text-center p-4 glass rounded-2xl border border-emerald-100">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-rose-700 text-center p-4 glass rounded-2xl border border-rose-100">
                ✗ Failed to send message. Please email me directly at anas31ahmed03@gmail.com
              </div>
            )}
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
