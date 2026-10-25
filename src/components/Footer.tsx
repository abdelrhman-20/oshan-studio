import { useLanguage } from '../i18n/LanguageContext'

const navKeys = ['home', 'about', 'services', 'work', 'contact'] as const
const currentYear = new Date().getFullYear()

/**
 * No verified phone number, email, or social account exists anywhere in
 * this repository or its supplied materials, so none are rendered here —
 * only the Riyadh location already used in the hero info bar. Add verified
 * contact details and social links once supplied by OSHAN STUDIO.
 */
export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-cream-100/10 bg-forest-950">
      <div className="mx-auto max-w-[1680px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <a href="#home" className="font-serif leading-none text-cream-100">
              <span className="block text-2xl tracking-[0.16em]">OSHAN</span>
              <span className="mt-1 block text-[10px] font-light tracking-[0.5em] text-bronze-400">STUDIO</span>
            </a>
            <p className="mt-5 max-w-xs text-balance text-sm leading-relaxed text-cream-200/60">
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-cream-100">{t.footer.quickLinks}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-sm text-cream-200/60 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-cream-100">{t.footer.servicesTitle}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-cream-200/60 transition-colors hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-cream-100">{t.footer.contactTitle}</p>
            <p className="mt-5 text-sm leading-relaxed text-cream-200/60">{t.hero.infoBar.location.title}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-200/45 sm:flex-row sm:justify-between">
          <p>
            © {currentYear} OSHAN STUDIO — {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-cream-100">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-cream-100">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
