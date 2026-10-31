import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const options = [
  { value: 'ar', label: 'ع' },
  { value: 'en', label: 'EN' },
] as const

export function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <div
      dir="ltr"
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-lg border border-cream-100/12 bg-cream-100/[0.04] p-1 font-latin text-xs font-medium"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLanguage(value)}
          aria-pressed={lang === value}
          className={`relative h-8 min-w-9 rounded-md px-2.5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400 ${
            lang === value ? 'text-forest-950' : 'text-cream-200/60 hover:text-cream-100'
          }`}
        >
          {lang === value && (
            <motion.span
              layoutId="lang-pill"
              transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
              className="absolute inset-0 rounded-md bg-bronze-400"
              aria-hidden="true"
            />
          )}
          <span className={`relative ${value === 'ar' ? 'font-display text-sm' : 'tracking-wider'}`}>{label}</span>
        </button>
      ))}
    </div>
  )
}
