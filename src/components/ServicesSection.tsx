import { motion } from 'framer-motion'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { serviceImages } from '../data/services'

const EASE = [0.16, 1, 0.3, 1] as const
const MAX_TILT = 6

// Feeds cursor position to the card's spotlight and 3D tilt via CSS variables.
function trackCard(e: MouseEvent<HTMLDivElement>, tilt: boolean) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  el.style.setProperty('--x', `${x}px`)
  el.style.setProperty('--y', `${y}px`)
  if (tilt) {
    el.style.setProperty('--ry', `${((x / rect.width) * 2 - 1) * MAX_TILT}deg`)
    el.style.setProperty('--rx', `${(1 - (y / rect.height) * 2) * MAX_TILT}deg`)
  }
}

function resetCard(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

export function ServicesSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  const [headingLead, ...headingRestWords] = t.services.heading.split(' ')
  const headingRest = headingRestWords.join(' ')

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      id="services"
      data-nav-theme="light"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream-200 via-[#efe5d0] to-cream-200 py-20 text-forest-950 sm:py-24 lg:py-32"
    >
      {/* Sand backdrop: blueprint grid, a large compass arc, warm light and edge hairlines */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgb(156 111 65 / 0.09) 1px, transparent 1px), linear-gradient(90deg, rgb(156 111 65 / 0.09) 1px, transparent 1px), linear-gradient(rgb(156 111 65 / 0.045) 1px, transparent 1px), linear-gradient(90deg, rgb(156 111 65 / 0.045) 1px, transparent 1px)',
            backgroundSize: '96px 96px, 96px 96px, 24px 24px, 24px 24px',
            backgroundPosition: 'center top',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 80%)',
          }}
        />
        <div className="absolute -top-[28rem] left-1/2 h-[56rem] w-[56rem] -translate-x-1/2 rounded-full border border-bronze-500/20" />
        <div className="absolute -top-[22rem] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-dashed border-bronze-500/15" />
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-cream-100/70 blur-[120px]" />
        <div className="absolute -bottom-40 -end-40 h-[30rem] w-[30rem] rounded-full bg-bronze-300/25 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered header: overline, title, subtitle */}
        <div dir={dir} className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            {...reveal()}
            className={`inline-flex items-center gap-2.5 rounded-full border border-bronze-500/30 bg-bronze-400/10 px-4 py-1.5 font-semibold text-bronze-600 ${
              dir === 'rtl' ? 'font-arabic text-base' : 'font-latin text-xs tracking-[0.3em]'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" aria-hidden="true" />
            {t.services.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.08)}
            className="mt-6 text-balance font-display text-3xl leading-[1.4] font-semibold text-forest-950 sm:text-4xl lg:text-5xl"
          >
            <span className="text-bronze-600">{headingLead}</span>
            {headingRest && ' ' + headingRest}
          </motion.h2>
          <motion.p
            {...reveal(0.16)}
            className="mt-5 max-w-xl text-balance text-base leading-[1.9] text-forest-700/70 sm:text-lg"
          >
            {t.services.description}
          </motion.p>
        </div>

        <ul
          dir={dir}
          className="mt-14 grid list-none grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7 xl:gap-8"
        >
          {t.services.items.map((service, i) => {
            const image = serviceImages[i]
            return (
              <motion.li
                key={service.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.08 * (i % 3), ease: EASE }}
              >
                {/* Full-bleed photo card: title over a bottom fade, frosted arrow in the opposite corner */}
                <div
                  onMouseMove={(e) => trackCard(e, !reducedMotion)}
                  onMouseLeave={resetCard}
                  style={{ transform: 'perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
                  className="group @container relative aspect-[5/4] cursor-pointer overflow-hidden rounded-2xl bg-forest-950 shadow-[0_24px_50px_-28px_rgb(10_18_14/0.55)] transition-[transform,translate,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_44px_80px_-32px_rgb(10_18_14/0.7)]"
                >
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    style={{ objectPosition: image.focal }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Warm spotlight that follows the cursor */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgb(227 177 127 / 0.28), transparent 65%)',
                      mixBlendMode: 'soft-light',
                    }}
                    aria-hidden="true"
                  />
                  {/* Diagonal light sweep across the photo */}
                  <div
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[left,opacity] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-[130%] group-hover:opacity-100 motion-reduce:hidden"
                    aria-hidden="true"
                  />
                  {/* Bronze edge glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-[box-shadow] duration-500 ring-inset group-hover:ring-bronze-300/70"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 sm:p-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-[clamp(1rem,calc((100cqi_-_7.5rem)/14),1.75rem)] leading-tight font-bold whitespace-nowrap text-white drop-shadow-[0_2px_12px_rgb(0_0_0/0.35)]">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-[1.8] text-cream-100/75">{service.description}</p>
                    </div>

                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:bg-cream-100 group-hover:text-forest-950"
                      aria-hidden="true"
                    >
                      {dir === 'rtl' ? (
                        <ArrowUpLeft
                          className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-45"
                          strokeWidth={1.75}
                        />
                      ) : (
                        <ArrowUpRight
                          className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45"
                          strokeWidth={1.75}
                        />
                      )}
                    </span>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
