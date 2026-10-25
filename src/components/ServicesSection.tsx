import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { serviceIcons, serviceImages } from '../data/services'
import { stockImages } from '../data/stockImages'

const EASE = [0.16, 1, 0.3, 1] as const

/** Staggered layout: cards 2–3 rise one paragraph line higher than card 1; the bottom row is shorter. */
const cardSlots = [
  'h-[19rem] lg:col-start-1 lg:row-start-1 lg:h-[18em]',
  'h-[19rem] lg:col-start-2 lg:row-start-1 lg:-mt-[2.9em] lg:h-auto',
  'h-[19rem] lg:col-start-3 lg:row-start-1 lg:-mt-[2.9em] lg:h-auto',
  'h-[19rem] lg:col-start-1 lg:row-start-2 lg:h-[16em]',
  'h-[19rem] lg:col-start-2 lg:row-start-2 lg:h-[16em]',
  'h-[19rem] lg:col-start-3 lg:row-start-2 lg:h-[16em]',
]

export function ServicesSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="services" className="relative overflow-hidden bg-forest-950">
      {/* dir="ltr" keeps the reference composition fixed (image panel left, content right) in both languages. */}
      <div dir="ltr" className="mx-auto grid max-w-[1680px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.2fr)]">
        {/* Image panel (decorative) */}
        <div
          className="relative hidden overflow-hidden border-r border-bronze-400/20 lg:block"
          style={{ height: '55.5em', borderRadius: '16px 55px 55px 0px' }}
        >
          <img
            src={stockImages.servicesPanel.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: '40% 50%' }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(7,17,13,0.1) 30%, rgba(7,17,13,0.55) 65%, rgba(7,17,13,0.95) 100%)',
            }}
          />
          <div className="absolute bottom-12 left-12 border-l border-bronze-400/50 py-4 pl-6 font-latin text-[11px] font-medium leading-[2.2] tracking-[0.35em] text-bronze-400">
            {t.services.panelTagline.split(' ').map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-12 pt-20 sm:px-8 sm:pb-14 sm:pt-24 lg:px-12 lg:pb-16 lg:pt-28">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center justify-end gap-4 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400">
              <span className="h-px w-20 bg-bronze-400/50 sm:w-40 lg:w-64" aria-hidden="true" />
              <span>{t.services.eyebrow}</span>
            </div>
            <h2
              dir={dir}
              className="mt-5 text-balance text-right font-arabic text-4xl font-medium leading-[1.25] text-cream-100 sm:text-5xl"
            >
              <span className="text-bronze-400">{t.services.heading}</span> {t.services.supporting}
            </h2>
            <p
              dir={dir}
              style={{ width: '32em' }}
              className="ml-auto mt-5 max-w-full text-right text-sm leading-loose text-cream-200/65 sm:text-base"
            >
              {t.services.description}
            </p>
          </motion.div>

          <div dir="rtl" className="mt-6 grid lg:mt-5 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <ul className="contents">
            {t.services.items.map((service, i) => {
              const Icon = serviceIcons[i]
              const image = serviceImages[i]
              return (
                <li key={service.title} className={cardSlots[i]}>
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.06 * i, ease: EASE }}
                    className="group relative h-full overflow-hidden rounded-xl border border-bronze-400/30 bg-[#07110D] transition-colors duration-500 hover:border-bronze-400/70"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        style={{ objectPosition: image.focal }}
                      />
                      {/* Per-card overlay: blends the photo into the content area. */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to bottom, rgba(7,17,13,0) 28%, rgba(7,17,13,0.2) 42%, rgba(7,17,13,0.78) 58%, #07110D 76%)',
                        }}
                      />
                    </div>

                    <div dir="ltr" className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 font-latin text-xs text-bronze-400">
                          <span>{String(i + 1).padStart(2, '0')}</span>
                          <span className="h-px w-10 bg-bronze-400/50" aria-hidden="true" />
                        </div>
                        <Icon className="h-6 w-6 text-bronze-400" strokeWidth={1.25} aria-hidden="true" />
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div dir={dir} className="min-w-0 text-left">
                          <h3 className="text-lg font-medium text-cream-100">{service.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-cream-200/60">{service.description}</p>
                        </div>
                        <span
                          aria-hidden="true"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze-400/60 transition-colors group-hover:border-bronze-300 group-hover:bg-bronze-400/10"
                        >
                          <ArrowRight
                            className="h-4 w-4 text-bronze-400 transition-transform group-hover:translate-x-1"
                            strokeWidth={1.5}
                          />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
