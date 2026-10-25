import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { stockImages } from '../data/stockImages'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProcessSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  const [headingLead, ...headingRestWords] = t.process.heading.split(' ')
  const headingRest = headingRestWords.join(' ')

  return (
    <section className="relative overflow-hidden bg-forest-950 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
      {/* Decorative architectural background, contained to this section */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${stockImages.processBg.src})`, backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-forest-950/45" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 55% 55%, rgba(7,17,13,0.55) 0%, rgba(7,17,13,0.25) 55%, rgba(7,17,13,0.55) 100%)',
          }}
        />
        {/* Top fade from the Services section's forest green so the image eases in */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest-950 to-transparent sm:h-44" />
        {/* Bottom fade into the CTA's deep green so the two sections meet without a seam */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#07110D] sm:h-56 lg:h-72" />
      </div>

      {/* dir="ltr" keeps the header composition fixed (heading right, link left) in both languages. */}
      <div dir="ltr" className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row-reverse sm:items-start sm:justify-between">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="ml-auto"
          >
            <div className="flex items-center justify-end gap-4 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400">
              <span className="h-px w-20 bg-bronze-400/50 sm:w-32" aria-hidden="true" />
              <span>{t.process.eyebrow}</span>
            </div>
            <h2
              dir={dir}
              className="mt-5 text-balance text-right font-arabic text-4xl font-medium leading-[1.25] text-cream-100 sm:text-5xl lg:text-6xl"
            >
              <span className="text-bronze-400">{headingLead}</span>
              {headingRest && ' ' + headingRest}
            </h2>
          </motion.div>

          <motion.a
            href="#services"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="group hidden shrink-0 items-center gap-4 self-start text-sm text-cream-200/85 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400 sm:inline-flex lg:mt-12"
          >
            <ArrowLeft
              className="h-4 w-4 text-bronze-400 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="h-px w-12 bg-bronze-400/60 transition-all group-hover:w-16" aria-hidden="true" />
            <span dir={dir}>{t.process.cta}</span>
          </motion.a>
        </div>

        {/* Desktop: horizontal timeline. Order follows the language direction (01 at the start edge). */}
        <div dir={dir} className="relative mt-20 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="absolute inset-x-0 top-8 h-px bg-bronze-400/60" aria-hidden="true" />
          {t.process.stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-bronze-400/70 bg-forest-950 font-latin text-base text-bronze-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mt-4 h-5 w-px bg-bronze-400/50" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium text-cream-100 xl:text-xl">{stage.title}</h3>
              <p className="mt-3 max-w-[15em] text-balance text-sm leading-relaxed text-cream-200/65">
                {stage.description}
              </p>
              <span className="mt-6 h-px w-10 bg-bronze-400/70" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div dir={dir} className="relative mt-14 flex flex-col gap-10 lg:hidden">
          <div className="absolute bottom-0 top-2 start-8 w-px bg-bronze-400/50" aria-hidden="true" />
          {t.process.stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              className="relative flex items-start gap-5"
            >
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-bronze-400/70 bg-forest-950 font-latin text-base text-bronze-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-3">
                <h3 className="text-lg font-medium text-cream-100">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/65">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
