import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { serviceIcons } from '../data/services'

const EASE = [0.16, 1, 0.3, 1] as const

export function ServicesSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="services" className="relative overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-latin text-xs font-medium tracking-[0.3em] text-bronze-500">{t.services.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5">
            <h2 className="text-balance font-arabic text-3xl font-semibold text-forest-950 sm:text-4xl">
              {t.services.heading}
            </h2>
            <p className="text-balance text-base text-forest-900/60 sm:text-lg">{t.services.supporting}</p>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-forest-950/10 bg-forest-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <motion.div
                key={service.title}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
                className="group flex flex-col gap-4 bg-cream-100 px-7 py-9 transition-colors hover:bg-cream-200/50"
              >
                <Icon className="h-8 w-8 text-bronze-500" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-forest-950">{service.title}</h3>
                <p className="text-sm leading-relaxed text-forest-900/65">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
