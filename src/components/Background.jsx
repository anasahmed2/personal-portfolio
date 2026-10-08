import Aurora from './reactbits/Aurora'

/**
 * Fixed decorative background: soft light canvas, a live WebGL aurora (React Bits)
 * in light mode, pastel color washes, and a subtle dotted grid. Sits behind all
 * content, pointer-events none.
 */
const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f5f8f8]">
      {/* WebGL aurora — top band, light mode pastel */}
      <div className="absolute inset-x-0 top-0 h-[70vh] opacity-50">
        <Aurora colorStops={['#2dd4bf', '#38bdf8', '#5eead4']} amplitude={1.0} blend={0.6} speed={0.6} lightMode />
      </div>

      {/* Soft color glows */}
      <div className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] animate-aurora-1 rounded-full bg-teal-300/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-[30rem] w-[30rem] animate-aurora-2 rounded-full bg-sky-300/25 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-aurora-1 rounded-full bg-emerald-300/25 blur-[120px]" />

      {/* Dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(13,148,136,0.16) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* Soft top sheen + bottom fade to canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f5f8f8]" />
    </div>
  )
}

export default Background
