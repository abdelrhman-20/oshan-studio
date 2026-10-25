import { ArrowUp, Mail, MapPin } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const navKeys = ['home', 'about', 'services', 'work', 'contact'] as const
const currentYear = new Date().getFullYear()
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const LINK =
  'text-sm text-cream-200/70 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400'
const COLUMN_HEADING = 'flex items-center gap-4 text-lg font-medium text-cream-100'

/**
 * No verified phone number, email, or social account exists anywhere in
 * this repository or its supplied materials, so none are rendered — only
 * the Riyadh location already used in the hero info bar. Add verified
 * contact details and social links once supplied by OSHAN STUDIO.
 *
 * No newsletter backend exists either: the form validates input but does
 * not store or send anything, and says so after a valid submit.
 * No legal pages exist yet, so those labels are plain text, not links.
 */
export function Footer() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'invalid' | 'unavailable'>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus(EMAIL_PATTERN.test(email.trim()) ? 'unavailable' : 'invalid')
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })

  const columnBorder = 'lg:border-s lg:border-bronze-400/20 lg:ps-10'

  return (
    <footer className="relative">
      <div className="relative mx-auto max-w-[1680px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div dir={dir} className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.4fr] lg:gap-10">
          {/* Brand and contact */}
          <div>
            <a
              href="#home"
              dir="ltr"
              className="inline-block font-serif leading-none text-cream-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
            >
              <span className="block text-4xl tracking-[0.16em] sm:text-5xl">OSHAN</span>
              <span className="mt-2 block text-center text-xs font-light tracking-[0.55em] text-bronze-400 sm:text-sm">
                STUDIO
              </span>
            </a>
            <span className="mt-5 block h-px w-14 bg-bronze-400/60" aria-hidden="true" />
            <p className="mt-5 max-w-xs text-balance text-base leading-relaxed text-cream-200/80">
              {t.footer.description}
            </p>
            <p className="mt-7 flex items-center gap-3 text-sm text-cream-200/70">
              <MapPin className="h-4 w-4 shrink-0 text-bronze-400" strokeWidth={1.5} aria-hidden="true" />
              <span>{t.hero.infoBar.location.title}</span>
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.quickLinks} className={columnBorder}>
            <p className={COLUMN_HEADING}>
              {t.footer.quickLinks}
              <span className="h-px w-10 bg-bronze-400/60" aria-hidden="true" />
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {navKeys.map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className={LINK}>
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className={columnBorder}>
            <p className={COLUMN_HEADING}>
              {t.footer.servicesTitle}
              <span className="h-px w-10 bg-bronze-400/60" aria-hidden="true" />
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={LINK}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={`${columnBorder} sm:col-span-2 lg:col-span-1`}>
            <div dir="ltr" className="flex items-center gap-3 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400">
              <span>{t.footer.newsletterEyebrow}</span>
              <span className="h-px w-16 bg-bronze-400/50" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-arabic text-2xl font-medium text-cream-100 sm:text-3xl">
              {t.footer.newsletterHeading}
            </h2>
            <p className="mt-3 max-w-sm text-balance text-sm leading-relaxed text-cream-200/70">
              {t.footer.newsletterText}
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">{t.footer.emailLabel}</span>
                <Mail
                  className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bronze-400"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status !== 'idle') setStatus('idle')
                  }}
                  placeholder={t.footer.emailPlaceholder}
                  autoComplete="email"
                  aria-invalid={status === 'invalid'}
                  aria-describedby="newsletter-status"
                  className="h-12 w-full rounded-full border border-bronze-400/40 bg-forest-950/50 ps-11 pe-4 text-sm text-cream-100 placeholder:text-cream-200/50 focus:border-bronze-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
                />
              </label>
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-gradient-to-b from-bronze-400 to-bronze-600 px-8 text-sm font-medium text-forest-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
              >
                {t.footer.subscribe}
              </button>
            </form>
            <p
              id="newsletter-status"
              role="status"
              className={`mt-3 min-h-5 text-xs ${status === 'invalid' ? 'text-bronze-300' : 'text-cream-200/70'}`}
            >
              {status === 'invalid' ? t.footer.emailInvalid : status === 'unavailable' ? t.footer.newsletterUnavailable : ''}
            </p>
          </div>
        </div>

        <div
          dir={dir}
          className="mt-14 flex flex-col-reverse items-center gap-5 border-t border-bronze-400/25 pt-7 text-sm text-cream-200/70 sm:flex-row sm:justify-between lg:mt-16"
        >
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze-400/60 text-bronze-400 transition-colors hover:border-bronze-300 hover:bg-bronze-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
            <p>
              © {currentYear} OSHAN STUDIO — {t.footer.rights}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span>{t.footer.terms}</span>
            <span className="h-4 w-px bg-cream-100/25" aria-hidden="true" />
            <span>{t.footer.privacy}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
