import { CalendarRange, Layers, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function HeroInfoBar() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  // Order: first item sits at the start edge (right in Arabic, left in English).
  const items = [
    { icon: CalendarRange, title: t.hero.infoBar.since.title, subtitle: t.hero.infoBar.since.subtitle },
    { icon: Layers, title: t.hero.infoBar.process.title, subtitle: t.hero.infoBar.process.subtitle },
    { icon: MapPin, title: t.hero.infoBar.location.title, subtitle: t.hero.infoBar.location.subtitle },
  ]

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 overflow-hidden bg-forest-950 py-9 sm:py-10 lg:py-12"
    >
      {/* Multi-stop fade from the hero photo into the bar's exact colour (forest-950, #0a120e) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-full h-52 sm:h-72 lg:h-96"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,18,14,0) 0%, rgba(10,18,14,0.08) 18%, rgba(10,18,14,0.22) 36%, rgba(10,18,14,0.45) 54%, rgba(10,18,14,0.72) 72%, rgba(10,18,14,0.92) 88%, #0a120e 100%)',
        }}
      />

      <div
        dir={dir}
        className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-5 sm:px-8 md:grid-cols-3 md:gap-0 lg:px-24"
      >
        {items.map(({ icon: Icon, title, subtitle }, i) => (
          <div
            key={title}
            className={`flex flex-col items-center px-4 text-center md:px-8 ${
              i > 0 ? 'md:border-s md:border-bronze-400/30' : ''
            }`}
          >
            <Icon className="h-6 w-6 text-bronze-400" strokeWidth={1.25} aria-hidden="true" />
            <p className="mt-2 text-balance text-sm font-semibold text-cream-100 sm:text-base">{title}</p>
            <p className="mt-0.5 text-balance text-xs text-bronze-300/85 sm:text-sm">{subtitle}</p>
          </div>
        ))}
      </div>

    </motion.div>
  )
}
