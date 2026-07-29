const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-indigo-900/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-purple-900/15 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-900/10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
           

            <div className="space-y-5">
              <h2 className="text-xl text-indigo-300 font-semibold">Welcome to my portfolio</h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.05]">
                Hi, I'm <br />
                <span className="gradient-text">Anas Ahmed</span>
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-slate-200 font-medium max-w-2xl">
              Computer Science Student & Software Developer
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              I’m a UBC Computer Science student building at the intersection of AI, embedded systems, and full-stack software.
              I develop real-time hardware–software systems, computer vision applications, and cloud-connected platforms that turn
              sensor data into intelligent action. From low-latency embedded communication to ML-powered vision systems and modern
              web dashboards, I enjoy engineering reliable systems that bridge the digital and physical worlds.
            </p>

            <div className="flex flex-wrap gap-3">
              {['AI Systems', 'Embedded Software', 'Full-Stack Web', 'Computer Vision'].map((item) => (
                <span key={item} className="rounded-full bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200 border border-slate-700 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 text-white rounded-full font-semibold shadow-lg shadow-indigo-900 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 rounded-full font-semibold text-slate-100 bg-slate-800/80 border border-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-700 hover:border-slate-600">
                View Work
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                ['AI', 'Vision-driven projects'],
                ['Systems', 'Hardware to cloud'],
                ['Web', 'Modern interfaces']
              ].map(([label, description]) => (
                <div key={label} className="glass rounded-2xl p-4">
                  <div className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.2em]">{label}</div>
                  <div className="mt-2 text-sm text-slate-600">{description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-md w-full group">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-sky-400 via-fuchsia-400 to-orange-300 blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative overflow-hidden rounded-[2rem] bg-white/85 border border-white/70 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_45%)]"></div>
                <div className="relative p-5">
                  <div className="glass rounded-[1.5rem] p-4">
                    <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 bg-sky-50">
                      <img 
                        src="/assets/profile_pic.jpg" 
                        alt="Anas Ahmed" 
                        className="h-[420px] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
