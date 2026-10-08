import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useState, useEffect } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/anasahmed05/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/anasahmed2', label: 'GitHub', Icon: FaGithub },
  { href: '/assets/Anas_Ahmed_Software_Resume.pdf', label: 'Resume', Icon: FaFileDownload },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-slate-900/5 bg-white/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-400 font-display text-sm font-bold text-white shadow-glow">
            AA
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-800">
            Anas<span className="text-teal-500">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-900/5 bg-white/60 p-1.5 shadow-sm backdrop-blur md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.id
                  ? 'text-teal-700'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {active === link.id && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/15 to-sky-500/15 ring-1 ring-inset ring-teal-500/20" />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/5 bg-white/70 text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-600 hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/5 bg-white/70 text-slate-700 shadow-sm transition-colors hover:text-teal-600 md:hidden"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-900/5 bg-white/90 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                active === link.id
                  ? 'bg-teal-500/10 text-teal-700'
                  : 'text-slate-500 hover:bg-slate-900/5 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 px-1 pt-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/5 bg-white/70 text-slate-500 shadow-sm transition-colors hover:text-teal-600"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
