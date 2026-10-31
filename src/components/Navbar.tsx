import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { LanguageSwitcher } from './LanguageSwitcher'
import logoImage from '../assets/images/oshan-logo.png'

const navKeys = ['home', 'about', 'services', 'work', 'contact'] as const
type NavKey = (typeof navKeys)[number]

const EASE = [0.16, 1, 0.3, 1] as const

// Tracks which section is currently in view so the matching link can be highlighted.
function useActiveSection() {
  const [active, setActive] = useState<NavKey>('home')

  useEffect(() => {
    const sections = navKeys
      .map((key) => document.getElementById(key))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id as NavKey)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

// True while the floating bar overlaps a section marked data-nav-theme="light".
function useOverLightSection(probeY = 48) {
  const [overLight, setOverLight] = useState(false)

  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      const lightSections = document.querySelectorAll<HTMLElement>('[data-nav-theme="light"]')
      setOverLight(
        Array.from(lightSections).some((el) => {
          const { top, bottom } = el.getBoundingClientRect()
          return top <= probeY && bottom >= probeY
        }),
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [probeY])

  return overLight
}

export function Navbar() {
  const { t, dir } = useLanguage()
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const active = useActiveSection()
  const scrolled = useScrolled()
  const overLight = useOverLightSection()

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={reducedMotion ? false : { opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8"
    >
      {/*
        dir="ltr" is forced here so the layout order (logo / links / actions)
        stays physically left-to-right in both languages, matching the brand
        reference. Arabic glyph shaping is unaffected — only block ordering is.
      */}
      <nav
        dir="ltr"
        aria-label={dir === 'rtl' ? 'التنقل الرئيسي' : 'Main navigation'}
        className={`relative mx-auto flex max-w-[1560px] items-center justify-between rounded-xl border transition-[padding,border-color,backdrop-filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          overLight
            ? 'border-bronze-400/20 py-2 ps-5 pe-2 backdrop-blur-[18px] backdrop-saturate-[1.4] sm:ps-6'
            : scrolled
              ? 'border-cream-100/12 py-2 ps-5 pe-2 backdrop-blur-[18px] backdrop-saturate-[1.4] sm:ps-6'
              : 'border-transparent py-3 ps-3 pe-1 sm:ps-4'
        }`}
      >
        {/* Tint layers crossfade so the bar eases between surfaces; the blur itself lives on <nav> */}
        <span
          className={`glass pointer-events-none absolute inset-0 -z-10 rounded-[inherit] backdrop-blur-none transition-opacity duration-700 ease-out ${
            scrolled && !overLight ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        {/* Forest surface over light sections, textured like the projects section */}
        <span
          className={`glass-forest pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] backdrop-blur-none transition-opacity duration-700 ease-out ${
            overLight ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <span className="absolute -top-10 left-1/2 h-24 w-2/3 -translate-x-1/2 rounded-full bg-bronze-400/15 blur-2xl" />
          <span className="grain absolute inset-0 opacity-[0.35]" />
          <span className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-bronze-300/50 to-transparent" />
        </span>
        {/* Wordmark — always left */}
        <a
          href="#home"
          className="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
        >
          {/* Logo artwork sits on black; screen blending drops the black so only the lettering shows. */}
          <img
            src={logoImage}
            alt="OSHAN STUDIO"
            className={`w-auto mix-blend-screen transition-[height] duration-500 ease-out ${
              scrolled ? 'h-9 sm:h-10 lg:h-11' : 'h-12 sm:h-14 lg:h-16'
            }`}
          />
        </a>

        {/* Desktop nav — always centered */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navKeys.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                dir={dir}
                aria-current={active === key ? 'page' : undefined}
                className={`relative block py-2 text-[0.95rem] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:bg-bronze-400 after:transition-transform after:duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400 ${
                  active === key
                    ? 'text-cream-100 after:scale-x-100'
                    : 'text-cream-200/70 after:scale-x-0 hover:text-cream-100 hover:after:scale-x-100'
                }`}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster — always right */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a href="#contact" dir={dir} className="btn btn-ghost h-11 px-6 text-[0.95rem]">
            {t.cta.startProject}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={dir === 'rtl' ? 'فتح القائمة' : 'Open menu'}
          className="glass relative z-[60] flex h-11 w-11 items-center justify-center rounded-lg border border-cream-100/15 text-cream-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <span className="flex w-5 flex-col items-end gap-1.5" aria-hidden="true">
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-3 bg-current" />
            </span>
          )}
        </button>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[55] flex flex-col bg-forest-950/95 px-6 pt-28 pb-10 backdrop-blur-2xl lg:hidden"
          >
            <div
              className="pointer-events-none absolute -top-32 right-[-20%] h-96 w-96 rounded-full bg-bronze-500/20 blur-[120px]"
              aria-hidden="true"
            />
            <ul className="relative flex flex-1 flex-col gap-2">
              {navKeys.map((key, i) => (
                <motion.li
                  key={key}
                  initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: EASE }}
                >
                  <a
                    href={`#${key}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-cream-100/10 py-4 font-display text-3xl font-medium text-cream-100 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
                  >
                    {t.nav[key]}
                    <span className="font-latin text-xs tracking-[0.3em] text-bronze-400/70">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              dir="ltr"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              className="relative flex items-center justify-between gap-4"
            >
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                dir={dir}
                className="btn btn-primary h-11 px-6 text-sm"
              >
                {t.cta.startProject}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
