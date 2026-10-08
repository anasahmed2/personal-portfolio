import Aurora from './reactbits/Aurora'

/**
 * Fixed decorative background: deep base, a live WebGL aurora (React Bits),
 * plus a subtle dotted grid. Sits behind all content, pointer-events none.
 */
const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* WebGL aurora — top band */}
      <div className="absolute inset-x-0 top-0 h-[70vh] opacity-60">
        <Aurora colorStops={['#6366f1', '#a855f7', '#22d3ee']} amplitude={1.1} blend={0.55} speed={0.6} />
      </div>

      {/* Soft color glows */}
      <div className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] animate-aurora-1 rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-[30rem] w-[30rem] animate-aurora-2 rounded-full bg-purple-600/15 blur-[120px]" />

      {/* Dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  )
}

export default Background
