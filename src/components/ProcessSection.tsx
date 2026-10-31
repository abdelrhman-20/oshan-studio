import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { DraftingCompass, HardHat, KeyRound, PenTool, Search, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const EASE = [0.16, 1, 0.3, 1] as const

/** Maps 1:1 (by index) to translations.process.stages. */
const stageIcons: LucideIcon[] = [Search, PenTool, DraftingCompass, HardHat, KeyRound]

interface StageNodeProps {
  icon: LucideIcon
  active: boolean
  current: boolean
}

/** Timeline node: lights up with a bronze fill once the progress line reaches it, and pulses while current. */
function StageNode({ icon: Icon, active, current }: StageNodeProps) {
  return (
    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
      {current && (
        <span
          className="absolute inset-0 animate-ping rounded-full bg-bronze-400/30 [animation-duration:2.2s]"
          aria-hidden="true"
        />
      )}
      <span
        className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active
            ? 'scale-100 border-transparent bg-gradient-to-br from-[#f0c99a] via-bronze-400 to-bronze-600 text-forest-950 shadow-[0_0_0_6px_rgb(205_155_99/0.15),0_14px_34px_-10px_rgb(205_155_99/0.7)]'
            : 'scale-90 border-forest-950/10 bg-white text-forest-700/35 shadow-[0_8px_20px_-12px_rgb(10_18_14/0.25)]'
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </span>
  )
}

/** Tracks a media query; used to pin the timeline on desktop only. */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export function ProcessSection() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  const stages = t.process.stages
  const lastIndex = stages.length - 1

  const [headingLead, ...headingRestWords] = t.process.heading.split(' ')
  const headingRest = headingRestWords.join(' ')

  // Desktop pins the section and scrubs the timeline with the scroll; mobile scrolls the vertical timeline normally.
  const isDesktop = useMediaQuery('(min-width: 1024px) and (min-height: 720px)')
  const pinned = isDesktop && !reducedMotion

  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: pinScroll } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const { scrollYProgress: flowScroll } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 55%'] })
  // Finish the line before the pin releases so the completed timeline holds for a beat.
  const pinProgress = useTransform(pinScroll, [0.04, 0.82], [0, 1], { clamp: true })
  const pinSpring = useSpring(pinProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const flowSpring = useSpring(flowScroll, { stiffness: 90, damping: 24, mass: 0.4 })
  const progress = pinned ? pinSpring : flowSpring
  const [reached, setReached] = useState(reducedMotion ? lastIndex : -1)

  useMotionValueEvent(progress, 'change', (v) => {
    if (reducedMotion) return
    // Small lead so a node lights as the line arrives, not after it passes.
    const next = v <= 0.01 ? -1 : Math.min(lastIndex, Math.floor(v * lastIndex + 0.08))
    setReached(next)
  })

  const lineScale = reducedMotion ? 1 : progress

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      ref={sectionRef}
      id="process"
      data-nav-theme="light"
      // overflow-clip (not hidden) so the sticky stage below still pins against the viewport.
      className={`relative isolate overflow-clip bg-cream-100 text-forest-950 ${pinned ? 'h-[280vh]' : ''}`}
    >
      <div
        className={
          pinned
            ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16'
            : 'relative overflow-hidden py-20 sm:py-24 lg:py-32'
        }
      >
        {/* Light backdrop: warm glow, a fine dot texture fading toward the edges, and a top hairline */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-bronze-300/25 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(rgb(10 18 14 / 0.12) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Centered header: overline, title, subtitle */}
          <div dir={dir} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.p
              {...reveal()}
              className={`inline-flex items-center gap-2.5 rounded-full border border-bronze-500/30 bg-bronze-400/10 px-4 py-1.5 font-semibold text-bronze-600 ${
                dir === 'rtl' ? 'font-arabic text-base' : 'font-latin text-xs tracking-[0.3em]'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" aria-hidden="true" />
              {t.process.eyebrow}
            </motion.p>
            <motion.h2
              {...reveal(0.08)}
              className="mt-6 font-display text-3xl leading-[1.4] font-semibold text-forest-950 sm:text-4xl lg:text-5xl"
            >
              <span className="text-bronze-600">{headingLead}</span>
              {headingRest && ' ' + headingRest}
            </motion.h2>
            <motion.p {...reveal(0.16)} className="mt-5 max-w-xl text-base leading-[1.9] text-forest-700/70 sm:text-lg">
              {t.process.supporting}
            </motion.p>
          </div>

          <div ref={timelineRef} dir={dir} className="relative mt-16 sm:mt-20 lg:mt-24">
            {/* Desktop: horizontal timeline. The track runs between the first and last node centers. */}
            <div className="relative hidden lg:block">
              <div
                className="absolute top-8 h-0.5 -translate-y-1/2 rounded-full bg-forest-950/10"
                style={{ insetInline: `${50 / stages.length}%` }}
                aria-hidden="true"
              >
                <motion.div
                  className="h-full w-full origin-left bg-gradient-to-r from-bronze-300 via-bronze-400 to-bronze-500 shadow-[0_0_12px_rgb(205_155_99/0.5)] rtl:origin-right rtl:bg-gradient-to-l"
                  style={{ scaleX: lineScale }}
                />
              </div>

              <ol className="grid list-none grid-cols-5 gap-6">
                {stages.map((stage, i) => (
                  <li key={stage.title} className="flex flex-col items-center text-center">
                    <StageNode icon={stageIcons[i]} active={i <= reached} current={i === reached && i < lastIndex} />
                    <StageCard
                      label={t.process.stepLabel}
                      index={i}
                      active={i <= reached}
                      title={stage.title}
                      description={stage.description}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile/tablet: vertical timeline */}
            <div className="relative lg:hidden">
              <div
                className="absolute start-8 top-8 bottom-8 w-0.5 -translate-x-1/2 rounded-full bg-forest-950/10 rtl:translate-x-1/2"
                aria-hidden="true"
              >
                <motion.div
                  className="h-full w-full origin-top bg-gradient-to-b from-bronze-300 to-bronze-500 shadow-[0_0_12px_rgb(205_155_99/0.5)]"
                  style={{ scaleY: lineScale }}
                />
              </div>

              <ol className="flex list-none flex-col gap-6">
                {stages.map((stage, i) => (
                  <li key={stage.title} className="flex items-start gap-5">
                    <StageNode icon={stageIcons[i]} active={i <= reached} current={i === reached && i < lastIndex} />
                    <div className="min-w-0 flex-1 text-start">
                      <StageCard
                        label={t.process.stepLabel}
                        index={i}
                        active={i <= reached}
                        title={stage.title}
                        description={stage.description}
                        compact
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface StageCardProps {
  label: string
  index: number
  active: boolean
  title: string
  description: string
  compact?: boolean
}

/** Frosted step card that brightens and lifts once its stage is reached. */
function StageCard({ label, index, active, title, description, compact = false }: StageCardProps) {
  const { dir } = useLanguage()
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        compact ? '' : 'mt-8 xl:p-6'
      } ${
        active
          ? 'translate-y-0 border-bronze-400/40 bg-white/90 opacity-100 shadow-[0_1px_2px_rgb(10_18_14/0.04),0_24px_50px_-28px_rgb(156_111_65/0.45)]'
          : 'translate-y-3 border-forest-950/[0.06] bg-white/40 opacity-50'
      }`}
    >
      {/* Top highlight that draws in when active */}
      <span
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/80 to-transparent transition-transform duration-700 ${
          active ? 'scale-x-100' : 'scale-x-0'
        }`}
        aria-hidden="true"
      />
      <span
        className={`block text-xs font-semibold transition-colors duration-700 ${
          active ? 'text-bronze-600' : 'text-forest-700/40'
        } ${dir === 'rtl' ? 'font-arabic' : 'font-latin tracking-[0.3em]'}`}
      >
        {label} <span className="font-latin">{String(index + 1).padStart(2, '0')}</span>
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-forest-950 xl:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-[1.8] text-forest-700/70">{description}</p>
    </div>
  )
}
