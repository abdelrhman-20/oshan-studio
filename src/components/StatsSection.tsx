import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { statIcons } from '../data/stats'
import { CountUpValue } from './CountUpValue'

const EASE = [0.16, 1, 0.3, 1] as const

// Feeds the cursor position to the card's spotlight gradient via CSS variables.
function trackSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export function StatsSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  const [headingLead, ...headingRestWords] = t.stats.heading.split(' ')
  const headingRest = headingRestWords.join(' ')

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section dir={dir} data-nav-theme="light" className="relative overflow-hidden bg-cream-100 py-20 text-forest-950 sm:py-24 lg:py-32">
      {/* Warm ambient light and a fine dot texture that fades toward the edges */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-bronze-300/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(rgb(10 18 14 / 0.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 0%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered header: overline, title, subtitle */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div {...reveal()} className="flex items-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-bronze-500" aria-hidden="true" />
            <span dir="ltr" className="font-latin text-xs font-medium tracking-[0.35em] text-bronze-600">
              {t.stats.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-bronze-500" aria-hidden="true" />
          </motion.div>
          <motion.h2
            {...reveal(0.08)}
            className="mt-6 text-balance font-display text-3xl leading-[1.4] font-semibold sm:text-4xl lg:text-5xl"
          >
            <span className="text-bronze-600">{headingLead}</span>
            {headingRest && ' ' + headingRest}
          </motion.h2>
          <motion.p
            {...reveal(0.16)}
            className="mt-5 max-w-xl text-balance text-base leading-[1.9] text-forest-700/70 sm:text-lg"
          >
            {t.stats.supporting}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {t.stats.items.map((item, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div key={`${item.label}-${i}`} {...reveal(0.1 * i)} className="h-full">
                <div
                  onMouseMove={trackSpotlight}
                  className="group relative isolate flex h-full flex-col items-center overflow-hidden border border-forest-950/[0.08] bg-white/60 px-6 pt-12 pb-10 text-center shadow-[0_1px_2px_rgb(10_18_14/0.04),0_20px_50px_-30px_rgb(10_18_14/0.25)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-700 ease-out hover:-translate-y-1.5 hover:border-forest-950 hover:shadow-[0_40px_80px_-32px_rgb(10_18_14/0.6)] lg:px-8 lg:pt-14 lg:pb-12"
                >
                  {/* Forest panel that rises from the bottom on hover */}
                  <div
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-gradient-to-b from-forest-800 to-forest-950 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  {/* Cursor spotlight, only visible over the dark panel */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgb(205 155 99 / 0.16), transparent 70%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Architectural corner brackets that open outward on hover */}
                  {[
                    'top-3 start-3 border-t border-s',
                    'top-3 end-3 border-t border-e',
                    'bottom-3 start-3 border-b border-s',
                    'bottom-3 end-3 border-b border-e',
                  ].map((pos) => (
                    <span
                      key={pos}
                      className={`pointer-events-none absolute h-4 w-4 border-bronze-500/70 transition-all duration-700 ease-out group-hover:h-6 group-hover:w-6 group-hover:border-bronze-300 ${pos}`}
                      aria-hidden="true"
                    />
                  ))}

                  {/* Oversized ghost icon */}
                  <Icon
                    className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 h-44 w-44 -translate-x-1/2 text-forest-950/[0.03] transition-all duration-700 ease-out group-hover:scale-110 group-hover:text-cream-100/[0.04]"
                    strokeWidth={0.75}
                    aria-hidden="true"
                  />

                  {/* Numbers always read left-to-right so "+7" never flips to "7+" */}
                  <span dir="ltr" className="inline-block">
                    <CountUpValue
                      value={item.value}
                      className="font-serif text-8xl leading-[0.85] tabular-nums text-forest-950 transition-colors duration-700 group-hover:text-cream-100 lg:text-[7.5rem]"
                      prefixClassName="me-1 bg-gradient-to-b from-bronze-400 to-bronze-600 bg-clip-text text-transparent"
                    />
                  </span>

                  <div className="mt-7 flex items-center gap-2" aria-hidden="true">
                    <motion.span
                      initial={reducedMotion ? false : { width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + 0.1 * i, ease: EASE }}
                      className="h-px bg-bronze-500 transition-[width] duration-700 group-hover:w-10!"
                    />
                    <span className="h-1.5 w-1.5 rotate-45 bg-bronze-500" />
                    <motion.span
                      initial={reducedMotion ? false : { width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + 0.1 * i, ease: EASE }}
                      className="h-px bg-bronze-500 transition-[width] duration-700 group-hover:w-10!"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold text-forest-950 transition-colors duration-700 group-hover:text-cream-100 sm:text-xl">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700/65 transition-colors duration-700 group-hover:text-cream-100/60">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
