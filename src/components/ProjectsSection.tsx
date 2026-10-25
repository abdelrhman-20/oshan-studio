import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { projects } from '../data/projects'

const EASE = [0.16, 1, 0.3, 1] as const

const FOCUS =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400'

export function ProjectsSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="work" className="relative overflow-hidden bg-forest-950 py-20 sm:py-24 lg:py-28">
      {/* dir="ltr" keeps the reference composition fixed in both languages; text stays language-aware. */}
      <div dir="ltr" className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-start lg:justify-between">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="ml-auto max-w-2xl"
          >
            <div className="flex items-center justify-end gap-4 font-latin text-xs font-medium tracking-[0.3em] text-bronze-400">
              <span className="h-px w-20 bg-bronze-400/50 sm:w-40 lg:w-64" aria-hidden="true" />
              <span>{t.projects.eyebrow}</span>
            </div>
            <h2
              dir={dir}
              style={{ fontSize: '4em' }}
              className="mt-5 text-balance text-right font-arabic font-semibold leading-[1.25] text-cream-100"
            >
              <span className="text-bronze-400">{t.projects.headingAccent}</span> {t.projects.headingRest}
            </h2>
            <p
              dir={dir}
              style={{ width: '30em' }}
              className="mt-5 ml-auto max-w-full text-right text-sm leading-loose text-cream-200/65 sm:text-base"
            >
              {t.projects.supporting}
            </p>
          </motion.div>

          {/*
            No projects listing route exists yet, so this is intentionally
            non-navigating. Swap the <button> for an <a href> once one does.
          */}
          <motion.button
            type="button"
            aria-disabled="true"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className={`group hidden shrink-0 cursor-pointer flex-row-reverse items-center gap-4 self-start text-sm text-cream-200/80 transition-colors hover:text-bronze-300 sm:inline-flex lg:mt-10 ${FOCUS}`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze-400/60 transition-colors group-hover:border-bronze-300">
              <ArrowRight
                className="h-5 w-5 text-bronze-400 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
            <span dir={dir}>{t.projects.viewAll}</span>
            <span className="h-px w-14 bg-bronze-400/50 transition-all group-hover:w-20" aria-hidden="true" />
          </motion.button>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => {
            const meta = t.projects.items[i]
            const number = String(i + 1).padStart(2, '0')
            const Wrapper = project.href ? motion.a : motion.div
            const linkProps = project.href
              ? { href: project.href, 'aria-label': `${t.projects.viewProject}: ${meta.name}` }
              : { tabIndex: 0, role: 'group', 'aria-label': meta.name }

            return (
              <li key={project.slug}>
                <Wrapper
                  {...linkProps}
                  style={{ height: '45em' }}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
                  className={`group relative block cursor-pointer overflow-hidden rounded-xl border border-bronze-400/30 bg-[#07110D] transition-colors duration-500 hover:border-bronze-400/70 focus-visible:border-bronze-400 ${FOCUS}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${meta.name} — ${meta.category}${project.placeholder ? (dir === 'rtl' ? ' (صورة توضيحية)' : ' (illustrative photo)') : ''}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      style={{ objectPosition: project.focal }}
                    />
                    {/* Blends the photo into the info area; separate overlay per card. */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent 42%, rgba(7,17,13,0.15) 54%, rgba(7,17,13,0.6) 66%, rgba(7,17,13,0.9) 78%, #07110D 92%)',
                      }}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-5 sm:px-7">
                    <div className="flex items-center gap-3 font-latin text-xs text-bronze-400/80">
                      <span>{number}</span>
                      <span className="h-px w-10 bg-bronze-400/50" aria-hidden="true" />
                      <span dir={dir} className="ml-auto font-arabic text-cream-200/60">
                        {meta.category}
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif text-3xl leading-tight text-cream-100 sm:text-4xl">{meta.name}</h3>
                        <p dir="ltr" className="mt-3 flex items-center gap-2 text-sm text-cream-200/65">
                          <MapPin className="h-4 w-4 shrink-0 text-bronze-400" strokeWidth={1.75} aria-hidden="true" />
                          <span dir={dir}>{meta.location}</span>
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze-400/60 transition-colors group-hover:border-bronze-300 group-hover:bg-bronze-400/10"
                      >
                        <ArrowRight
                          className="h-5 w-5 text-bronze-400 transition-transform group-hover:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
