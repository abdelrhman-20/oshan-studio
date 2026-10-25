import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { projects, type ProjectCategoryKey } from '../data/projects'

const EASE = [0.16, 1, 0.3, 1] as const

type FilterKey = ProjectCategoryKey | 'all'

export function ProjectsSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const [filter, setFilter] = useState<FilterKey>('all')

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'cafes', label: t.projects.filters.cafes },
    { key: 'retail', label: t.projects.filters.retail },
    { key: 'residential', label: t.projects.filters.residential },
  ]

  const visibleProjects = projects.filter((p) => filter === 'all' || p.categoryKey === filter)

  return (
    <section id="work" className="relative overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-latin text-xs font-medium tracking-[0.3em] text-bronze-500">{t.projects.eyebrow}</p>
            <h2 className="mt-4 text-balance font-arabic text-3xl font-semibold text-forest-950 sm:text-4xl">
              {t.projects.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t.projects.eyebrow}>
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  aria-pressed={filter === key}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-500 ${
                    filter === key
                      ? 'border-forest-950 bg-forest-950 text-cream-100'
                      : 'border-forest-950/15 text-forest-950/70 hover:border-forest-950/40'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <a
              href="#"
              className="group hidden shrink-0 items-center gap-2 text-sm text-forest-950/70 transition-colors hover:text-bronze-600 sm:flex"
            >
              {t.projects.viewAll}
              <ArrowIcon
                className={`h-4 w-4 text-bronze-500 transition-transform ${
                  dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
                }`}
                strokeWidth={1.75}
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 lg:gap-6">
          {visibleProjects.map((project, i) => {
            const meta = t.projects.items[projects.indexOf(project)]
            return (
              <motion.a
                key={project.slug}
                /*
                  No router is installed yet (per project constraints). This
                  href reserves the intended project-detail route so it can
                  be wired up with minimal change once one is added.
                */
                href={`/projects/${project.slug}`}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
                className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-xl border border-forest-950/10 bg-forest-950 sm:w-auto sm:shrink"
              >
                <img
                  src={project.image}
                  alt={meta.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />

                <div
                  className={`absolute bottom-0 flex w-full items-end justify-between gap-3 p-5 ${
                    dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div>
                    <p className="text-lg font-medium text-cream-100">{meta.name}</p>
                    <p className="mt-1 text-sm text-cream-200/70">{meta.category}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-100/30 text-cream-100 transition-colors group-hover:border-bronze-400 group-hover:bg-bronze-400/10">
                    <ArrowIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
