import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const EASE = [0.16, 1, 0.3, 1] as const

export function CTASection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="contact" className="relative py-28 sm:py-32 lg:py-40">
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-balance font-arabic text-3xl font-semibold text-cream-100 sm:text-5xl"
        >
          {t.ctaBanner.heading}
        </motion.h2>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-cream-200/75 sm:text-lg"
        >
          {t.ctaBanner.supporting}
        </motion.p>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-bronze-400 to-bronze-600 px-8 py-3.5 text-sm font-medium text-forest-950 shadow-lg shadow-bronze-900/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
          >
            {t.ctaBanner.primary}
            <ArrowIcon
              className={`h-4 w-4 transition-transform ${dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
              strokeWidth={2}
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-8 py-3.5 text-sm text-cream-100 transition-colors hover:border-bronze-400 hover:bg-bronze-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
          >
            {t.ctaBanner.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
