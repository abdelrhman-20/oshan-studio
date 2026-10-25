import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { HeroInfoBar } from './HeroInfoBar'
import heroImage from '../assets/images/hero-cafe.jpg'

// Temporary hero photograph — replace with OSHAN STUDIO's own project photography.
const HERO_IMAGE_SRC = heroImage

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="home" className="relative flex min-h-[102svh] flex-col overflow-hidden bg-forest-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={reducedMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 16, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_IMAGE_SRC})`,
            backgroundPosition: 'center 38%',
          }}
          aria-hidden="true"
        />
        {/*
          Cinematic left-to-right readability gradient. The text column
          (below) sits on the right physically in BOTH languages — Arabic and
          English share the same layout, nothing mirrors — so the dark side
          always stays right/light side always stays left, regardless of
          `dir`. Left edge is essentially untouched so the café's natural
          color and detail read clearly; it ramps smoothly through a
          forest-green mid-tone and only reaches near-opaque behind the
          headline/button column on the right.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,18,14,0) 0%, rgba(10,18,14,0.04) 20%, rgba(10,18,14,0.14) 36%, rgba(10,18,14,0.36) 50%, rgba(10,18,14,0.62) 64%, rgba(10,18,14,0.84) 78%, rgba(10,18,14,0.94) 100%)',
          }}
        />
        {/* Bottom blend into the info bar lives in HeroInfoBar so it can end exactly at the bar's colour. */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-36">
        <div className="ml-auto w-full max-w-2xl text-right lg:max-w-3xl">
          <motion.div
            dir="ltr"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-5 flex items-center justify-end gap-3 font-latin text-sm font-medium tracking-[0.3em] text-cream-100/90"
          >
            <span>{t.hero.eyebrow}</span>
            <span className="h-px w-10 bg-bronze-400/70" aria-hidden="true" />
            <span className="hidden text-cream-200/60 sm:inline">{t.hero.slideCounter}</span>
          </motion.div>

          <h1 className="text-balance font-arabic text-[2.75rem] leading-[1.2] font-semibold text-cream-100 sm:text-6xl sm:leading-[1.15] lg:text-7xl lg:leading-[1.12] xl:text-8xl">
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="block"
            >
              {t.hero.headlineLine1}
            </motion.span>
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="block text-bronze-400 w-[786px]"
            >
              {t.hero.headlineLine2}
            </motion.span>
          </h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-7 text-balance text-lg text-cream-200/85 sm:text-xl lg:text-[1.375rem]"
          >
            {t.hero.supporting}
          </motion.p>

          <motion.div
            dir="ltr"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="mt-11 flex flex-wrap items-center justify-end gap-6"
          >
            <button
              type="button"
              className="group inline-flex items-center gap-4 text-base text-cream-100 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream-100/30 transition-colors group-hover:border-bronze-400 group-hover:bg-bronze-400/10">
                <Play className="h-5 w-5 fill-current ml-0.5" strokeWidth={0} aria-hidden="true" />
              </span>
              {t.cta.viewWork}
            </button>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-bronze-400 to-bronze-600 px-9 py-4 text-base font-medium text-forest-950 shadow-lg shadow-bronze-900/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
            >
              <ArrowIcon
                className={`h-5 w-5 transition-transform ${dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
                strokeWidth={2}
              />
              {t.cta.startProject}
            </a>
          </motion.div>
        </div>

        {/* Project preview card */}
        <motion.a
          href="#work"
          dir="ltr"
          initial={reducedMotion ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          className="group absolute bottom-6 right-5 hidden items-center gap-3 rounded-xl border border-cream-100/15 bg-forest-950/60 p-2.5 backdrop-blur-sm transition-colors hover:border-bronze-400/60 sm:flex sm:right-8 lg:right-12"
        >
          <div className="text-right">
            <p className="text-sm font-medium text-cream-100">{t.hero.preview.name}</p>
            <p className="flex items-center justify-end gap-1 text-xs text-cream-200/65">
              {t.hero.preview.caption}
              <ArrowRight className="h-3 w-3 text-bronze-400 transition-transform group-hover:translate-x-0.5" />
            </p>
          </div>
          <div
            className="h-16 w-24 shrink-0 rounded-lg bg-cover bg-center sm:h-[76px] sm:w-32"
            style={{ backgroundImage: `url(${HERO_IMAGE_SRC})`, backgroundPosition: 'center 42%' }}
          />
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-6 left-5 hidden items-center gap-3 text-sm font-medium tracking-wide text-cream-100/90 sm:flex sm:left-8 lg:left-12"
        >
          <span className="flex h-[10em] w-11 items-start justify-center rounded-full border border-cream-100/25 py-2">
            <motion.span
              animate={reducedMotion ? {} : { y: [0, 'calc(10em - 3rem)', 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-4 w-px bg-bronze-400"
              aria-hidden="true"
            />
          </span>
          {t.cta.exploreMore}
        </motion.div>
      </div>

      <HeroInfoBar />
    </section>
  )
}
