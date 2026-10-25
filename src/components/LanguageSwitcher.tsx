import { Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 font-latin text-xs tracking-wide text-cream-200/80" dir="ltr">
      <Globe className="h-4 w-4 text-bronze-400" strokeWidth={1.5} aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        aria-pressed={lang === 'ar'}
        className={`rounded-sm px-1 py-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400 ${
          lang === 'ar' ? 'text-cream-100' : 'text-cream-200/50 hover:text-cream-100'
        }`}
      >
        AR
      </button>
      <span className="text-cream-200/30">/</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-sm px-1 py-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400 ${
          lang === 'en' ? 'text-cream-100' : 'text-cream-200/50 hover:text-cream-100'
        }`}
      >
        EN
      </button>
    </div>
  )
}
