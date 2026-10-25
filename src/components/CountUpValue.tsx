import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface CountUpValueProps {
  value: string
  className?: string
  prefixClassName?: string
}

/** Animates the numeric portion of a value like "+250" while keeping its prefix/suffix. */
export function CountUpValue({ value, className, prefixClassName }: CountUpValueProps) {
  const match = value.match(/(\d+)/)
  const target = match ? Number(match[1]) : 0
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice((match.index ?? 0) + match[1].length) : value

  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(reducedMotion ? target : 0)

  useEffect(() => {
    if (!inView || reducedMotion) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reducedMotion, target])

  return (
    <span ref={ref} className={className}>
      {prefix && <span className={prefixClassName}>{prefix}</span>}
      {display}
      {suffix && <span className={prefixClassName}>{suffix}</span>}
    </span>
  )
}
