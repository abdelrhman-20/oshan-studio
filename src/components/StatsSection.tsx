import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { statIcons } from '../data/stats'
import { stockImages } from '../data/stockImages'
import { CountUpValue } from './CountUpValue'

const EASE = [0.16, 1, 0.3, 1] as const

export function StatsSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const [headingLead, ...headingRestWords] = t.stats.heading.split(' ')
  const headingRest = headingRestWords.join(' ')

  return (
    <section className="relative overflow-hidden bg-forest-950">
      {/*
        dir="ltr" keeps the composition fixed — architectural image
        physically left, content panel physically right — in both
        languages, matching this section's mirrored layout. Content
        alignment/text below stays language-aware via `dir`.
      */}
      <div dir="ltr" className="mx-auto grid max-w-[1680px] grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* Content panel */}
        <div dir={dir} className="relative z-10 order-2 flex flex-col justify-center bg-forest-950 px-5 py-16 sm:px-8 sm:py-20 lg:order-2 lg:px-12 lg:py-24">
          <motion.div
            dir="ltr"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center justify-end gap-3 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400"
          >
            <span>{t.stats.eyebrow}</span>
            <span className="h-px w-10 bg-bronze-400/60" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-5 text-balance text-right font-arabic text-4xl font-semibold leading-[1.25] text-cream-100 sm:text-5xl lg:text-6xl"
          >
            <span className="text-bronze-400">{headingLead}</span>
            {headingRest && ' ' + headingRest}
          </motion.h2>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-5 ml-auto max-w-sm text-balance text-right text-sm leading-relaxed text-cream-200/65 sm:text-base"
          >
            {t.stats.supporting}
          </motion.p>

          <div
            dir="ltr"
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:mt-12 sm:flex sm:flex-wrap sm:items-stretch"
            style={{ width: '36.5em' }}
          >
            {t.stats.items.map((item, i) => {
              const Icon = statIcons[i]
              return (
                <div key={item.label} className="flex items-stretch">
                  {i > 0 && (
                    <span className="hidden self-stretch sm:mx-8 sm:block sm:w-px sm:bg-bronze-400/25" aria-hidden="true" />
                  )}
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
                    className="flex flex-col items-center gap-3 text-center"
                    dir={dir}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-t-full border-x border-t border-bronze-400/40">
                      <Icon className="h-5 w-5 text-bronze-400" strokeWidth={1.25} aria-hidden="true" />
                    </span>
                    <CountUpValue
                      value={item.value}
                      className="font-arabic text-3xl font-semibold text-cream-100 sm:text-4xl"
                      prefixClassName="text-bronze-400"
                    />
                    <p className="text-xs text-cream-200/55 sm:text-sm">{item.label}</p>
                    <span className="bg-bronze-400/50" style={{ width: '3em', height: '0.10em' }} aria-hidden="true" />
                  </motion.div>
                </div>
              )
            })}
          </div>

          <motion.a
            href="#work"
            dir="ltr"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="group ml-auto mt-12 inline-flex items-center gap-3 text-sm text-cream-200/75 transition-colors hover:text-bronze-300"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream-100/25 transition-colors group-hover:border-bronze-400">
              <ArrowIcon
                className={`h-4 w-4 text-bronze-400 transition-transform ${
                  dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
                }`}
                strokeWidth={1.75}
              />
            </span>
            <span className="h-px w-8 bg-bronze-400/50 transition-all group-hover:w-12" aria-hidden="true" />
            <span dir={dir}>{t.stats.cta}</span>
          </motion.a>
        </div>

        {/* Architectural image panel */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: EASE }}
          className="relative order-1 h-64 overflow-hidden sm:h-80 lg:order-1 lg:h-auto lg:min-h-[32rem]"
        >
          <img
            src={stockImages.statsBg.src}
            alt={
              dir === 'rtl'
                ? 'تكوين معماري فاخر بإضاءة دافئة وتفاصيل برونزية — صورة توضيحية'
                : 'A premium architectural interior with warm layered lighting and bronze details — illustrative demo photo'
            }
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 38%' }}
          />
          {/* Blend the image into the dark panel on its inner edge (always right, since the panel sits right) */}
          <div
            className="absolute inset-y-0 right-0 w-2/3"
            style={{
              background:
                'linear-gradient(270deg, rgba(10,18,14,1) 0%, rgba(10,18,14,0.75) 20%, rgba(10,18,14,0.4) 40%, rgba(10,18,14,0.12) 62%, rgba(10,18,14,0) 85%)',
            }}
          />
          <div className="absolute inset-0 bg-forest-950/10" />
        </motion.div>
      </div>
    </section>
  )
}
