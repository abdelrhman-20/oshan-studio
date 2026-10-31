/** Lighter forest base for dark sections, shared so they read as one surface family. */
export const FOREST_SECTION_BG = 'bg-gradient-to-b from-forest-800 via-forest-700 to-forest-800'

/** Textured backdrop for forest sections: glows, a faint architectural grid, film grain and edge hairlines. */
export function ForestBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute -top-48 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-bronze-400/[0.14] blur-[150px]" />
      <div className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-forest-600/70 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-bronze-500/[0.10] blur-[140px]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgb(227 177 127 / 0.07) 1px, transparent 1px), linear-gradient(90deg, rgb(227 177 127 / 0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-400/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze-400/25 to-transparent" />
    </div>
  )
}
