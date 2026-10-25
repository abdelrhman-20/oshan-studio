import aboutMain from '../assets/images/about-main.jpg'
import aboutDetail from '../assets/images/about-detail.jpg'
import projectEraCoffee from '../assets/images/project-era-coffee.jpg'
import projectQirat from '../assets/images/project-qirat.jpg'
import projectBrooz from '../assets/images/project-brooz.jpg'
import processBg from '../assets/images/process-bg.jpg'
import ctaBg from '../assets/images/cta-bg.jpg'
import statsBg from '../assets/images/stats-bg.jpg'

/**
 * Centralized demo media map. Every entry below is a licensed, free-to-use
 * stock photo (Unsplash or Pexels, no attribution required) sourced for
 * this visual demo — NONE of it depicts an actual OSHAN STUDIO project.
 * Treat it as illustrative placeholder photography until the studio
 * supplies real project assets, at which point only this file needs to
 * change; no component should need editing.
 *
 * Each entry is used in exactly one place on the homepage — see the
 * `usage` note — so no image repeats across sections or project cards.
 */
export const stockImages = {
  aboutMain: {
    src: aboutMain,
    sourceId: 'pexels:262047',
    usage: 'About section — main image (grand restaurant interior, navy velvet seating, wood-slat ceiling, chandeliers)',
  },
  aboutDetail: {
    src: aboutDetail,
    sourceId: 'pexels:1090638',
    usage: 'About section — overlapping detail image (styled wall vignette: pendant bulbs, wood crate shelving, plants)',
  },
  projectEraCoffee: {
    src: projectEraCoffee,
    sourceId: 'pexels:1484516',
    usage: 'Projects section — ERA Coffee card (intimate fine-dining room, dark green panelling, candlelight)',
  },
  projectQirat: {
    src: projectQirat,
    sourceId: 'unsplash:1600494603989-9650cf6ddd3d',
    usage: 'Projects section — Qirat card (minimalist boutique showroom vignette)',
  },
  projectBrooz: {
    src: projectBrooz,
    sourceId: 'pexels:2079246',
    usage: 'Projects section — Brooz Real Estate card (modern residence, gold spiral staircase, open living space)',
  },
  processBg: {
    src: processBg,
    sourceId: 'unsplash:1600132806370-bf17e65e942f',
    usage: 'Process section — background (architectural wireframe/blueprint sketch)',
  },
  ctaBg: {
    src: ctaBg,
    sourceId: 'pexels:2290753',
    usage: 'Final CTA banner — background (cinematic rooftop restaurant terrace at dusk, open space for text)',
  },
  statsBg: {
    src: statsBg,
    sourceId: 'unsplash:1517248135467-4c7edcad34c4',
    usage: 'Numbers/Stats section — architectural image panel (moody gold-slat lounge, dramatic layered lighting)',
  },
} as const
