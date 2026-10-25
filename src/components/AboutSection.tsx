import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarRange, Layers, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { stockImages } from '../data/stockImages'

const EASE = [0.16, 1, 0.3, 1] as const

export function AboutSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const align = dir === 'rtl' ? 'text-right' : 'text-left'

  const infoItems = [
    { icon: CalendarRange, value: t.about.info.year.value, label: t.about.info.year.label },
    { icon: Layers, value: t.about.info.scope.value, label: t.about.info.scope.label },
    { icon: MapPin, value: t.about.info.location.value, label: t.about.info.location.label },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-forest-950 py-16 sm:py-20 lg:py-24">
      {/*
        dir="ltr" keeps the composition fixed — text column physically left,
        image composition physically right — in both languages, matching
        the brand reference and the rest of the homepage's fixed layout
        convention (navbar, hero). Text alignment/content below stays
        language-aware via `dir`.
      */}
      <div
        dir="ltr"
        className="mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-12 xl:gap-24"
      >
        {/* Text column */}
        <div className={`order-2 lg:order-1 ${align}`} dir={dir}>
          <motion.div
            dir="ltr"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-4 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400"
          >
            <span>ABOUT OSHAN STUDIO</span>
            {dir === 'rtl' && (
              <>
                <span
                  className="bg-bronze-400/50"
                  style={{ width: '18em', height: '0.10em' }}
                  aria-hidden="true"
                />
                <span className="font-arabic text-sm tracking-normal">{t.about.eyebrow}</span>
              </>
            )}
          </motion.div>

          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-6 text-balance font-arabic text-5xl font-semibold leading-[1.2] text-cream-100 sm:text-6xl lg:text-7xl lg:leading-[1.15]"
          >
            <span className="block">{t.about.headingLine1}</span>
            <span className="block text-bronze-400">{t.about.headingLine2}</span>
          </motion.h2>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-cream-200/70 sm:text-xl"
          >
            {t.about.body}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className={`mt-10 flex ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}
          >
            <a
              href="#about"
              dir="ltr"
              className="group inline-flex items-center gap-3 rounded-md border border-bronze-400/40 px-8 py-4 text-base font-medium tracking-wide text-cream-100 transition-colors hover:border-bronze-400 hover:bg-bronze-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
            >
              <ArrowIcon
                className="h-4 w-4 text-bronze-400 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={1.75}
              />
              <span dir={dir}>{t.about.cta}</span>
            </a>
          </motion.div>

          {/* Company information row */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-14 border-t border-bronze-400/20 pt-6"
          >
            <div dir="ltr" className="flex items-stretch">
              {infoItems.map(({ icon: Icon, value, label }, i) => (
                <div key={label} className="flex flex-1 items-stretch">
                  {i > 0 && <span className="w-px self-stretch bg-bronze-400/25" aria-hidden="true" />}
                  <div className="flex-1 px-4 text-center first:ps-0 last:pe-0 sm:px-6" dir={dir}>
                    <Icon className="mx-auto h-6 w-6 text-bronze-400" strokeWidth={1.5} aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-cream-100 sm:text-xl">{value}</p>
                    <p className="mt-1 text-xs text-cream-200/55 sm:text-sm">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image composition */}
        <div className="relative order-1 pb-10 pe-8 lg:order-2 lg:pb-14 lg:pe-12">
          {/* Decorative bronze frame, offset behind the main image */}
          <div
            className="pointer-events-none absolute -left-4 -top-4 bottom-2 right-4 hidden border border-bronze-400/25 sm:block lg:bottom-6 lg:right-6"
            aria-hidden="true"
          />

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative overflow-hidden border border-cream-100/10 shadow-2xl shadow-black/40"
          >
            <img
              src={stockImages.aboutMain.src}
              alt={
                dir === 'rtl'
                  ? 'مطعم فاخر بسقف خشبي مُحزز وثريات معلقة ومقاعد مخملية — صورة توضيحية'
                  : 'A grand restaurant interior with a wood-slat ceiling, chandeliers, and velvet seating — illustrative demo photo'
              }
              loading="lazy"
              width={2000}
              height={1333}
              className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[38rem] xl:h-[42rem]"
              style={{ objectPosition: 'center 40%' }}
            />
          </motion.div>

          {/* Secondary detail image — a distinct photograph from the main image, see stockImages.ts */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="absolute bottom-0 right-0 h-32 w-44 overflow-hidden border border-bronze-400/50 shadow-xl shadow-black/40 sm:h-40 sm:w-60 lg:h-48 lg:w-72"
          >
            <img
              src={stockImages.aboutDetail.src}
              alt={
                dir === 'rtl'
                  ? 'تفصيل جداري دافئ بإضاءة معلقة وأرفف خشبية ونباتات — صورة توضيحية'
                  : 'A warm styled wall detail with pendant lighting, wood crate shelving, and plants — illustrative demo photo'
              }
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
            <p className="absolute inset-x-3 bottom-2.5 text-[11px] font-medium leading-tight tracking-wide text-cream-100/90 sm:text-xs">
              {t.about.detailCaption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
