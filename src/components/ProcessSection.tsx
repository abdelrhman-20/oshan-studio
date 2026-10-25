import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { stockImages } from '../data/stockImages'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProcessSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${stockImages.processBg.src})`, backgroundPosition: 'center 50%' }}
        />
        <div className="absolute inset-0 bg-forest-950/85" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-latin text-xs font-medium tracking-[0.3em] text-bronze-400">{t.process.eyebrow}</p>
            <h2 className="mt-4 text-balance font-arabic text-3xl font-semibold text-cream-100 sm:text-4xl">
              {t.process.heading}
            </h2>
          </motion.div>

          <motion.a
            href="#services"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="group hidden shrink-0 items-center gap-2 text-sm text-cream-200/70 transition-colors hover:text-bronze-300 sm:flex"
          >
            {t.process.cta}
            <ArrowIcon
              className={`h-4 w-4 text-bronze-400 transition-transform ${
                dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
              }`}
              strokeWidth={1.75}
            />
          </motion.a>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="absolute inset-x-0 top-6 h-px bg-cream-100/15" aria-hidden="true" />
          {t.process.stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
              className="relative flex flex-col items-start gap-5"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-bronze-400/50 bg-forest-950 font-latin text-sm text-bronze-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-cream-100">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/60">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="relative mt-14 flex flex-col gap-10 lg:hidden">
          <div className="absolute bottom-0 top-2 start-6 w-px bg-cream-100/15" aria-hidden="true" />
          {t.process.stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              className="relative flex items-start gap-5 ps-0"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze-400/50 bg-forest-950 font-latin text-sm text-bronze-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-2.5">
                <h3 className="text-lg font-semibold text-cream-100">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/60">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
