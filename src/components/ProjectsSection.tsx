import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, MapPin } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { projects } from '../data/projects'
import { ForestBackdrop, FOREST_SECTION_BG } from './ForestBackdrop'

const EASE = [0.16, 1, 0.3, 1] as const

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-400'

interface ProjectReelProps {
  src: string
  label: string
  focal: string
  playbackRate?: number
}

/** Story-style looping reel: plays only while on screen, with a progress bar along the top. */
function ProjectReel({ src, label, focal, playbackRate = 1 }: ProjectReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // defaultPlaybackRate survives the src reloading; playbackRate applies right away.
    video.defaultPlaybackRate = playbackRate
    video.playbackRate = playbackRate
    if (reducedMotion) return

    let frame = 0
    const tick = () => {
      if (barRef.current && video.duration) {
        barRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`
      }
      frame = requestAnimationFrame(tick)
    }
    const onPlay = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(tick)
    }
    const onPause = () => cancelAnimationFrame(frame)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(video)

    return () => {
      observer.disconnect()
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      cancelAnimationFrame(frame)
    }
  }, [reducedMotion, playbackRate])

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ objectPosition: focal }}
      />
      {!reducedMotion && (
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-cream-100/20" aria-hidden="true">
          <span
            ref={barRef}
            className="block h-full origin-left bg-gradient-to-r from-bronze-300 to-cream-100"
            style={{ transform: 'scaleX(0)' }}
          />
        </span>
      )}
    </>
  )
}

export function ProjectsSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="work" className={`relative isolate overflow-hidden py-20 sm:py-24 lg:py-28 ${FOREST_SECTION_BG}`}>
      <ForestBackdrop />

      {/* dir="ltr" keeps the reference composition fixed in both languages; text stays language-aware. */}
      <div dir="ltr" className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        {/* Centered header: overline, title, subtitle — matches the numbers section */}
        <div dir={dir} className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-bronze-400" aria-hidden="true" />
            <span dir="ltr" className="font-latin text-xs font-medium tracking-[0.35em] text-bronze-400">
              {t.projects.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-bronze-400" aria-hidden="true" />
          </motion.div>
          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
            className="mt-6 text-balance font-display text-3xl leading-[1.4] font-semibold text-cream-100 sm:text-4xl lg:text-5xl"
          >
            <span className="text-bronze-400">{t.projects.headingAccent}</span> {t.projects.headingRest}
          </motion.h2>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.16, ease: EASE }}
            className="mt-5 max-w-xl text-balance text-base leading-[1.9] text-cream-200/65 sm:text-lg"
          >
            {t.projects.supporting}
          </motion.p>
        </div>

        <ul className="mt-14 grid list-none grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => {
            const meta = t.projects.items[i]
            const Wrapper = project.href ? motion.a : motion.div
            const linkProps = project.href
              ? {
                  href: project.href,
                  'aria-label': `${t.projects.viewProject}: ${meta.name}`,
                }
              : { tabIndex: 0, role: 'group', 'aria-label': meta.name }

            return (
              <li key={project.slug}>
                <Wrapper
                  {...linkProps}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
                  className={`group relative block aspect-[2/3] cursor-pointer overflow-hidden rounded-xl border border-bronze-400/30 bg-[#07110D] transition-colors duration-500 hover:border-bronze-400/70 focus-visible:border-bronze-400 ${FOCUS}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    {project.video ? (
                      <ProjectReel
                        src={project.video}
                        label={`${meta.name} — ${meta.category}`}
                        focal={project.focal}
                        playbackRate={project.playbackRate}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={`${meta.name} — ${meta.category}${project.placeholder ? (dir === 'rtl' ? ' (صورة توضيحية)' : ' (illustrative photo)') : ''}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        style={{ objectPosition: project.focal }}
                      />
                    )}
                    {/* Soft top shade keeps the reel bar legible; deeper bottom fade carries the info. */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, rgba(7,17,13,0.35) 0%, transparent 18%, transparent 50%, rgba(7,17,13,0.55) 70%, rgba(7,17,13,0.92) 100%)',
                      }}
                    />
                  </div>

                  <div
                    dir={dir}
                    className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 lg:p-7"
                  >
                    <div className="min-w-0">
                      <h3 className="font-serif text-3xl leading-[1.05] text-cream-100 sm:text-4xl">{meta.name}</h3>
                      <p className="mt-2.5 flex items-center gap-1.5 text-sm text-cream-200/75">
                        <MapPin
                          className="h-3.5 w-3.5 shrink-0 text-bronze-300"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        {meta.location}
                      </p>
                      <span className="mt-4 inline-flex items-center rounded-full border border-cream-100/15 bg-cream-100/[0.06] px-3 py-1 text-xs text-cream-200/80 backdrop-blur-md">
                        {meta.category}
                      </span>
                    </div>

                    {/* Card-level CTA: frosted pill that floods with bronze on hover */}
                    <span
                      aria-hidden="true"
                      className="relative isolate inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full border border-cream-100/25 bg-cream-100/[0.08] py-1.5 ps-5 pe-1.5 text-sm font-medium text-cream-100 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)] backdrop-blur-md transition-[color,border-color,box-shadow] duration-500 group-hover:border-bronze-300/0 group-hover:text-forest-950 group-hover:shadow-[0_14px_40px_-10px_rgb(205_155_99/0.7)]"
                    >
                      <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-gradient-to-br from-[#f0c99a] via-bronze-400 to-bronze-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                      <span className="whitespace-nowrap">{t.projects.cardCta}</span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f0c99a] via-bronze-400 to-bronze-600 text-forest-950 transition-[rotate,background-color] duration-500 ${dir === 'rtl' ? 'group-hover:-rotate-45' : 'group-hover:rotate-45'} group-hover:from-forest-950 group-hover:via-forest-950 group-hover:to-forest-950 group-hover:text-bronze-300`}
                      >
                        {dir === 'rtl' ? (
                          <ArrowUpLeft className="h-4 w-4" strokeWidth={1.75} />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                        )}
                      </span>
                    </span>
                  </div>
                </Wrapper>
              </li>
            )
          })}
        </ul>

        {/*
          No projects listing route exists yet, so this is intentionally
          non-navigating. Swap the <button> for an <a href> once one does.
        */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <motion.button
            type="button"
            aria-disabled="true"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            dir={dir}
            className="group btn btn-ghost h-14 cursor-pointer gap-3 px-8 text-base"
          >
            {t.projects.viewAll}
            {dir === 'rtl' ? (
              <ArrowLeft
                className="h-[18px] w-[18px] transition-transform duration-500 group-hover:-translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            ) : (
              <ArrowRight
                className="h-[18px] w-[18px] transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            )}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
