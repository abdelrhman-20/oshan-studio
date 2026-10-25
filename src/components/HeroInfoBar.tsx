import { CalendarRange, Layers, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function HeroInfoBar() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const items = [
    { icon: MapPin, title: t.hero.infoBar.location.title, subtitle: t.hero.infoBar.location.subtitle },
    { icon: Layers, title: t.hero.infoBar.process.title, subtitle: t.hero.infoBar.process.subtitle },
    { icon: CalendarRange, title: t.hero.infoBar.since.title, subtitle: t.hero.infoBar.since.subtitle },
  ]

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 border-t border-cream-100/10 bg-forest-950 py-4 sm:py-5 lg:py-6"
    >
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-3 px-5 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="group flex items-center gap-3 rounded-xl border border-bronze-400/25 bg-forest-900/70 px-4 py-4 transition-colors hover:border-bronze-400/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze-400/40 bg-bronze-400/5 transition-colors group-hover:bg-bronze-400/10">
              <Icon className="h-5 w-5 text-bronze-400" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div className="min-w-0 leading-snug">
              <p className="truncate text-sm font-semibold text-cream-100 sm:text-base">{title}</p>
              <p className="truncate text-xs text-bronze-300/80 sm:text-sm">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
