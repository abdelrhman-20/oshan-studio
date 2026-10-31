import { ArrowLeft, ArrowRight, ArrowUp, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import logoImage from '../assets/images/oshan-logo.png'
import { ForestBackdrop, FOREST_SECTION_BG } from './ForestBackdrop'

const navKeys = ['home', 'about', 'services', 'work', 'contact'] as const
const currentYear = new Date().getFullYear()

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400'
const COLUMN_HEADING = 'font-display text-base font-semibold text-cream-100'
// A bronze dot grows in front of the label on hover.
const LINK = `group inline-flex items-center gap-0 text-sm text-cream-200/70 transition-[color,gap] duration-300 hover:gap-2.5 hover:text-cream-100 ${FOCUS}`
const LINK_DOT =
  'h-1.5 w-0 rounded-full bg-bronze-400 opacity-0 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100'

/**
 * No verified phone number, email, or social account exists anywhere in
 * this repository or its supplied materials, so none are rendered — only
 * the Riyadh location already used in the hero info bar. Add verified
 * contact details and social links once supplied by OSHAN STUDIO.
 * No legal pages exist yet, so those labels are plain text, not links.
 */
export function Footer() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })

  return (
    <footer className={`relative isolate overflow-hidden ${FOREST_SECTION_BG}`}>
      <ForestBackdrop />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div dir={dir} className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:gap-14">
          {/* Brand */}
          <div>
            <a href="#home" className={`inline-block rounded-sm ${FOCUS}`}>
              {/* Logo artwork sits on black; screen blending drops the black so only the lettering shows. */}
              <img src={logoImage} alt="OSHAN STUDIO" className="h-14 w-auto mix-blend-screen sm:h-16" />
            </a>
            <p className="mt-6 max-w-sm text-base leading-[1.9] text-cream-200/75">{t.footer.description}</p>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.quickLinks}>
            <p className={COLUMN_HEADING}>{t.footer.quickLinks}</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {navKeys.map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className={LINK}>
                    <span className={LINK_DOT} aria-hidden="true" />
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className={COLUMN_HEADING}>{t.footer.servicesTitle}</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={LINK}>
                    <span className={LINK_DOT} aria-hidden="true" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={COLUMN_HEADING}>{t.footer.contactTitle}</p>
            <p className="mt-6 flex items-center gap-3 text-sm text-cream-200/75">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze-400/15 text-bronze-300">
                <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              {t.hero.infoBar.location.title}
            </p>
            <a href="#contact" className="group btn btn-primary mt-7 h-12 gap-3 px-7 text-sm">
              {t.cta.startProject}
              <ArrowIcon
                className={`h-4 w-4 transition-transform duration-500 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          dir={dir}
          className="mt-16 flex flex-col-reverse items-center gap-5 text-sm text-cream-200/60 sm:flex-row sm:justify-between lg:mt-20"
        >
          <p>
            © {currentYear} OSHAN STUDIO — {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span>{t.footer.terms}</span>
            <span>{t.footer.privacy}</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className={`group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 backdrop-blur-md transition-colors duration-300 hover:bg-bronze-400 hover:text-forest-950 ${FOCUS}`}
            >
              <ArrowUp
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Oversized outlined wordmark as a closing signature */}
      <p
        dir="ltr"
        className="pointer-events-none mt-6 text-center font-latin text-[12vw] leading-[0.8] font-semibold tracking-[-0.03em] whitespace-nowrap text-transparent select-none"
        style={{ WebkitTextStroke: '1px rgb(227 177 127 / 0.22)' }}
        aria-hidden="true"
      >
        OSHAN STUDIO
      </p>
    </footer>
  )
}
