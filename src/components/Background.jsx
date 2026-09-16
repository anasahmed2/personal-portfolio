/**
 * Fixed decorative background: deep gradient base, animated aurora blobs,
 * and a subtle dotted grid. Sits behind all content, pointer-events none.
 */
const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] animate-aurora-1 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute -right-40 top-1/4 h-[34rem] w-[34rem] animate-aurora-2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] animate-aurora-1 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
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
