import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { LanguageSwitcher } from './LanguageSwitcher'

const navKeys = ['home', 'about', 'services', 'work', 'contact'] as const

export function Navbar() {
  const { t, dir } = useLanguage()
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <motion.header
      initial={reducedMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-50 border-b border-cream-100/10 bg-forest-950/30 backdrop-blur-sm"
    >
      {/*
        dir="ltr" is forced here so the layout order (logo / links / actions)
        stays physically left-to-right in both languages, matching the brand
        reference. Arabic glyph shaping is unaffected — only block ordering is.
      */}
      <nav
        dir="ltr"
        aria-label={dir === 'rtl' ? 'التنقل الرئيسي' : 'Main navigation'}
        className="mx-auto flex max-w-[1680px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
      >
        {/* Wordmark — always left */}
        <a
          href="#home"
          className="font-serif leading-none text-cream-100 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
        >
          <span className="block text-3xl tracking-[0.16em] sm:text-4xl lg:text-[2.75rem]">OSHAN</span>
          <span className="mt-1 block text-center text-xs font-light tracking-[0.55em] text-bronze-400 sm:text-sm">
            STUDIO
          </span>
        </a>

        {/* Desktop nav — always centered */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navKeys.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                dir={dir}
                className={`relative py-1 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400 ${
                  key === 'home'
                    ? 'text-cream-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-bronze-400'
                    : 'text-cream-200/80 hover:text-cream-100'
                }`}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster — always right */}
        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            dir={dir}
            className="group inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-base text-cream-100 transition-colors hover:border-bronze-400 hover:bg-bronze-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
          >
            <ArrowIcon
              className="h-4 w-4 text-bronze-400 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
            {t.cta.startProject}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={dir === 'rtl' ? 'فتح القائمة' : 'Open menu'}
          className="rounded-sm p-2 text-cream-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400 lg:hidden"
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-cream-100/10 bg-forest-950/98 backdrop-blur lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6 sm:px-8">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm py-3 text-base text-cream-200/90 transition-colors hover:text-bronze-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
            <div dir="ltr" className="flex items-center justify-between border-t border-cream-100/10 px-5 py-5 sm:px-8">
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                dir={dir}
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-5 py-2.5 text-sm text-cream-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
              >
                <ArrowIcon className="h-4 w-4 text-bronze-400" strokeWidth={1.75} />
                {t.cta.startProject}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
