import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language, type TranslationShape } from './translations'

interface LanguageContextValue {
  lang: Language
  dir: 'rtl' | 'ltr'
  t: TranslationShape
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ar')
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const value: LanguageContextValue = {
    lang,
    dir,
    t: translations[lang],
    toggleLanguage: () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar')),
    setLanguage: setLang,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
