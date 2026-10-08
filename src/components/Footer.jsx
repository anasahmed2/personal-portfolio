import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

const socials = [
  { href: 'https://www.linkedin.com/in/anasahmed05/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/anasahmed2', label: 'GitHub', Icon: FaGithub },
  { href: '/assets/Anas_Ahmed_Software_Resume.pdf', label: 'Resume', Icon: FaFileDownload },
]

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-900/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-400 font-display text-sm font-bold text-white">
              AA
            </span>
            <span className="font-display text-lg font-semibold text-slate-800">
              Anas Ahmed
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-slate-500 transition-colors hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-600"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
