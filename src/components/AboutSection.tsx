import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Flag, MapPinned, PencilRuler } from 'lucide-react'
import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { stockImages } from '../data/stockImages'
import logoImage from '../assets/images/oshan-logo.png'

const EASE = [0.16, 1, 0.3, 1] as const

const BADGE_TEXT = 'OSHAN STUDIO · DESIGN & FIT-OUT · RIYADH · '

/** Slowly rotating circular wordmark with the OSHAN logo at its center. */
function RotatingBadge({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-forest-950 shadow-[0_20px_40px_-16px_rgb(10_18_14/0.6)] lg:h-36 lg:w-36">
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 h-full w-full ${reducedMotion ? '' : 'animate-spin-slow'}`}
        aria-hidden="true"
      >
        <defs>
          <path id="about-badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-bronze-300 font-latin text-[7px] font-medium">
          <textPath href="#about-badge-circle" textLength={232} lengthAdjust="spacing">
            {BADGE_TEXT}
          </textPath>
        </text>
      </svg>
      {/* Screen blend drops the logo's black backdrop against the dark badge, as in the navbar */}
      <img src={logoImage} alt="" className="relative w-[64%] mix-blend-screen" aria-hidden="true" />
    </div>
  )
}

export function AboutSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const infoItems = [
    { icon: Flag, ...t.about.info.year },
    { icon: PencilRuler, ...t.about.info.scope },
    { icon: MapPinned, ...t.about.info.location },
  ]

  // Opposing drift between the two photos for a sense of depth while scrolling.
  const compositionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: compositionRef, offset: ['start end', 'end start'] })
  const mainY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-28, 28])
  const detailY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [48, -48])

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      id="about"
      data-nav-theme="light"
      dir={dir}
      className="relative isolate overflow-hidden bg-cream-100 py-20 text-forest-950 sm:py-24 lg:py-32"
    >
      {/* Soft warm light behind the image side */}
      <div
        className="pointer-events-none absolute top-1/2 -end-40 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-bronze-300/25 blur-[140px]"
        aria-hidden="true"
      />
      {/* Outlined wordmark watermark */}
      <span
        dir="ltr"
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -z-10 -translate-x-1/2 font-latin text-[22vw] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-transparent select-none"
        style={{ WebkitTextStroke: '1px rgb(185 134 80 / 0.22)' }}
        aria-hidden="true"
      >
        OSHAN
      </span>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:gap-20">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          {/* Letter-spacing breaks Arabic joining, so tracking applies to the Latin overline only */}
          <motion.p
            {...reveal()}
            className={`inline-flex items-center gap-2.5 rounded-full border border-bronze-500/30 bg-bronze-400/10 px-4 py-1.5 font-semibold text-bronze-600 ${
              dir === 'rtl' ? 'font-arabic text-base' : 'font-latin text-xs tracking-[0.3em]'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" aria-hidden="true" />
            {t.about.eyebrow}
          </motion.p>

          <motion.h2
            {...reveal(0.08)}
            className="mt-6 font-display text-[clamp(1.6rem,6.5vw,3rem)] leading-[1.35] font-semibold sm:whitespace-nowrap lg:text-[clamp(2rem,3.2vw,3rem)]"
          >
            <span className="block">{t.about.headingLine1}</span>
            <span className="block bg-gradient-to-b from-bronze-400 to-bronze-600 bg-clip-text text-transparent">
              {t.about.headingLine2}
            </span>
          </motion.h2>

          <motion.p {...reveal(0.16)} className="mt-7 max-w-3xl text-lg leading-[1.95] text-forest-700/75">
            {t.about.body}
          </motion.p>

          {/* Company facts */}
          <motion.dl {...reveal(0.24)} className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {infoItems.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group relative flex items-center gap-3.5 overflow-hidden rounded-xl sm:flex-col sm:items-start sm:gap-3 xl:flex-row xl:items-center xl:gap-3.5 border border-forest-950/[0.07] bg-white/60 p-3.5 shadow-[0_1px_2px_rgb(10_18_14/0.04),0_16px_40px_-24px_rgb(10_18_14/0.2)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-bronze-400/40 hover:shadow-[0_1px_2px_rgb(10_18_14/0.04),0_24px_50px_-24px_rgb(156_111_65/0.4)]"
              >
                {/* Bronze accent line that sweeps across on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left rtl:origin-right scale-x-[0.18] bg-gradient-to-r from-bronze-400 to-bronze-600 transition-transform duration-700 ease-out group-hover:scale-x-100 rtl:bg-gradient-to-l"
                  aria-hidden="true"
                />
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bronze-300/30 to-bronze-500/10 text-bronze-600 ring-1 ring-bronze-500/25 transition-colors duration-500 group-hover:from-bronze-400 group-hover:to-bronze-600 group-hover:text-cream-100">
                  <Icon className="h-7 w-7" strokeWidth={2.25} aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-col-reverse gap-0.5">
                  <dt className="text-xs text-forest-700/60">{label}</dt>
                  <dd className="font-display text-base font-semibold lg:text-lg">{value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>

          <motion.div {...reveal(0.32)} className="mt-12">
            <a href="#about" className="group btn btn-primary h-14 gap-3 px-9 text-base">
              {t.about.cta}
              <ArrowIcon
                className={`h-[18px] w-[18px] transition-transform duration-500 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        {/* Image composition: arched main photo, overlapping detail, badge and signature card */}
        <div ref={compositionRef} className="relative order-1 mx-auto w-full max-w-xl pb-16 lg:order-2 lg:pb-20">
          <div className="relative ms-auto aspect-[4/5] w-[85%]">
            {/* Hairline arch outline, offset behind the photo */}
            <div
              className="pointer-events-none absolute -top-5 -end-5 start-5 bottom-5 rounded-t-full border border-bronze-500/40"
              aria-hidden="true"
            />

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE }}
              className="relative h-full w-full overflow-hidden rounded-t-full shadow-[0_40px_80px_-40px_rgb(10_18_14/0.45)]"
            >
              <motion.img
                src={stockImages.projectBrwaz.src}
                alt={
                  dir === 'rtl'
                    ? 'مشروع برواز العقارية — صالة معيشة بثريا دائرية ومقاعد زيتونية وطاولة خشبية'
                    : 'Brwaz Real Estate project — living room with a ring pendant, olive armchairs and an oak coffee table'
                }
                loading="lazy"
                decoding="async"
                className="h-[112%] w-full -translate-y-[6%] object-cover"
                style={{ objectPosition: 'center 30%', y: mainY }}
              />
            </motion.div>

            {/* Rotating badge in the arch's shoulder */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
              className="absolute -top-4 -end-4 sm:-end-8"
            >
              <RotatingBadge reducedMotion={reducedMotion} />
            </motion.div>

            {/* Frosted signature card straddling the photo's edge */}
            <motion.figure
              initial={reducedMotion ? false : { opacity: 0, x: dir === 'rtl' ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="absolute top-[30%] -start-[18%] w-56 rounded-xl border border-white/70 bg-cream-100/80 p-5 shadow-[0_24px_50px_-24px_rgb(10_18_14/0.45)] backdrop-blur-md sm:w-64"
            >
              <blockquote className="font-display text-[0.95rem] leading-[1.7] font-medium">
                {t.about.signature}
              </blockquote>
              <figcaption dir="ltr" className="mt-3 font-latin text-[10px] tracking-[0.3em] text-bronze-600">
                — OSHAN STUDIO
              </figcaption>
            </motion.figure>
          </div>

          {/* Outer layer drifts on scroll; inner layer handles the reveal */}
          <motion.div style={{ y: detailY }} className="absolute bottom-0 start-0 aspect-square w-[42%]">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="h-full w-full overflow-hidden rounded-2xl border-[10px] border-cream-100 shadow-[0_30px_60px_-30px_rgb(10_18_14/0.5)]"
            >
              <img
                src={stockImages.projectQirat.src}
                alt={
                  dir === 'rtl'
                    ? 'مشروع قيراط — واجهة متجر العطور ليلاً'
                    : 'Qirat project — the perfume boutique storefront at night'
                }
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 38%' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
