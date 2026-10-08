import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import Reveal from './Reveal'
import BlurText from './reactbits/BlurText'
import ShinyText from './reactbits/ShinyText'
import TiltedCard from './reactbits/TiltedCard'

const socials = [
  { href: 'https://www.linkedin.com/in/anasahmed05/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/anasahmed2', label: 'GitHub', Icon: FaGithub },
  { href: '/assets/Anas_Ahmed_Software_Resume.pdf', label: 'Resume', Icon: FaFileDownload },
]

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="order-2 space-y-7 lg:order-1 lg:col-span-7">
            <div className="space-y-5">
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
                <BlurText
                  text="Hi, I'm"
                  animateBy="words"
                  direction="top"
                  delay={120}
                  stepDuration={0.4}
                  className="block"
                />
                <BlurText
                  text="Anas Ahmed"
                  animateBy="letters"
                  direction="bottom"
                  delay={60}
                  stepDuration={0.4}
                  className="text-shimmer block"
                />
              </h1>

              <Reveal delay={160}>
                <p className="text-2xl font-medium md:text-3xl">
                  <ShinyText
                    text="Computer Science @ UBC"
                    color="#cbd5e1"
                    shineColor="#e0e7ff"
                    speed={3.5}
                    className="font-medium"
                  />
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-slate-400 sm:text-lg">
                  <span>
                    <span className="font-semibold text-slate-200">AI SWE Intern</span> @{' '}
                    <span className="font-semibold text-indigo-300">Ericsson</span>
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
                  <span>
                    Prev @{' '}
                    <span className="font-semibold text-slate-200">Morgan Stanley</span>
                    {' '}&amp;{' '}
                    <span className="font-semibold text-slate-200">APT Inc.</span>
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={340}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3.5 font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative">Get in Touch</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 font-semibold text-slate-100 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.06]"
                >
                  View Work
                </a>
                <div className="flex items-center gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column — profile */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <Reveal delay={200} className="w-full max-w-sm">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-cyan-400/40 opacity-60 blur-2xl" />
                <TiltedCard
                  imageSrc="/assets/profile_pic.jpg"
                  altText="Anas Ahmed"
                  captionText="Anas Ahmed"
                  containerHeight="460px"
                  containerWidth="100%"
                  imageHeight="440px"
                  imageWidth="340px"
                  rotateAmplitude={12}
                  scaleOnHover={1.06}
                  showMobileWarning={false}
                  showTooltip
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={500}>
          <a
            href="#skills"
            className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-slate-300"
          >
            Scroll
            <HiArrowDown className="animate-bounce" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Home
