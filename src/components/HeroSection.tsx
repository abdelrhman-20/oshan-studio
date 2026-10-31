import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import heroImage from '../assets/images/hero-cafe.jpg'

// Temporary hero photograph — replace with OSHAN STUDIO's own project photography.
const HERO_IMAGE_SRC = heroImage

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  // Subtle parallax: the photo drifts slower than the page as the hero scrolls away.
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reducedMotion ? '0%' : '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reducedMotion ? '0%' : '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reducedMotion ? 1 : 0])

  // Each headline line rises into place. No clipping mask: it would crop Arabic diacritics.
  const lineReveal = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 28, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1.1, delay, ease: EASE },
  })

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 18, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-[max(86svh,620px)] flex-col overflow-hidden bg-forest-950">
      {/* Background image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <motion.div
          initial={reducedMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 16, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_IMAGE_SRC})`,
            backgroundPosition: 'center 38%',
            filter: 'brightness(1.12) saturate(1.06)',
          }}
          aria-hidden="true"
        />
        {/*
          Cinematic left-to-right readability gradient. The text column
          (below) sits on the right physically in BOTH languages — Arabic and
          English share the same layout, nothing mirrors — so the dark side
          always stays right/light side always stays left, regardless of
          `dir`.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,18,14,0) 0%, rgba(10,18,14,0) 35%, rgba(10,18,14,0.14) 50%, rgba(10,18,14,0.34) 66%, rgba(10,18,14,0.5) 82%, rgba(10,18,14,0.58) 100%)',
          }}
        />
        {/* Soft pool of shade only where the copy sits, instead of darkening the whole side */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 48% 42% at 76% 52%, rgba(10,18,14,0.38) 0%, rgba(10,18,14,0) 100%)',
          }}
        />
        {/* Light top shade so the floating navbar always reads */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-forest-950/45 to-transparent" />
        {/* Warm bronze glow behind the headline */}
        <div
          className="absolute top-1/4 right-[8%] h-[38rem] w-[38rem] rounded-full bg-bronze-400/10 blur-[140px]"
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        {/* Gentle bottom shade that settles the photo into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-950/70 to-transparent" />
      </motion.div>

      {/* Vertical side rail */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-1/2 left-5 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 sm:left-8 lg:left-12 lg:flex"
        dir="ltr"
        aria-hidden="true"
      >
        <span className="h-20 w-px bg-gradient-to-b from-transparent to-cream-100/40" />
        <span className="font-latin text-[0.65rem] font-medium tracking-[0.45em] text-cream-100/70 [writing-mode:vertical-rl] rotate-180">
          EST. 2019 — RIYADH
        </span>
        <span className="h-20 w-px bg-gradient-to-t from-transparent to-cream-100/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-40"
      >
        <div className="ml-auto w-full max-w-2xl text-right lg:max-w-[52rem]">
          <motion.div dir="ltr" {...fadeUp(0.2)} className="mb-8 flex justify-end">
            <span className="inline-flex items-center gap-3 text-sm font-medium text-bronze-300 sm:text-base">
              <span dir={dir} className="text-balance">
                {t.hero.eyebrow}
              </span>
            </span>
          </motion.div>

          <h1 className="font-display text-[2.1rem] leading-[1.5] font-semibold text-cream-100 sm:text-5xl sm:leading-[1.45] lg:text-[3.5rem] xl:text-[4rem]">
            <motion.span {...lineReveal(0.35)} className="block [text-shadow:0_2px_30px_rgb(10_18_14/0.45)]">
              {t.hero.headlineLine1}
            </motion.span>
            {/* Vertical padding keeps diacritics inside the box the gradient is clipped to */}
            <motion.span {...lineReveal(0.5)} className="text-sheen -my-[0.1em] block py-[0.1em]">
              {t.hero.headlineLine2}
            </motion.span>
          </h1>

          <motion.p
            {...fadeUp(0.8)}
            className="mt-7 ml-auto max-w-[40rem] text-right text-balance text-base leading-[1.9] font-light text-cream-100/90 [text-shadow:0_1px_18px_rgb(10_18_14/0.55)] sm:text-lg lg:text-xl lg:leading-[1.85]"
          >
            {t.hero.supporting}
          </motion.p>

          <motion.div
            dir="ltr"
            {...fadeUp(0.95)}
            className="mt-11 flex flex-wrap items-center justify-end gap-3 sm:gap-4"
          >
            <a href="#work" className="btn btn-ghost h-14 px-8 text-base">
              <span dir={dir}>{t.hero.secondaryCta}</span>
            </a>
            <a href="#contact" className="btn btn-primary h-14 px-9 text-base">
              <span dir={dir}>{t.hero.primaryCta}</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
