import closingBg from '../assets/images/closing-bg.jpg'
import serviceInterior from '../assets/images/service-interior.jpg'
import service3d from '../assets/images/service-3d.jpg'
import serviceDrawings from '../assets/images/service-drawings.jpg'
import serviceFitout from '../assets/images/service-fitout.jpg'
import serviceFurniture from '../assets/images/service-furniture.jpg'
import serviceManagement from '../assets/images/service-management.jpg'
import servicesPanel from '../assets/images/services-panel.jpg'
import aboutMain from '../assets/images/about-main.jpg'
import aboutDetail from '../assets/images/about-detail.jpg'
import projectEraCoffee from '../assets/images/project-era-coffee.jpg'
import projectQirat from '../assets/images/project-qirat.jpg'
import projectBrooz from '../assets/images/project-brooz.jpg'
import processBg from '../assets/images/process-architectural-bg.jpg'
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
    sourceId: 'pexels:35134952',
    usage: 'Projects section — ERA Coffee card (café counter with terracotta slat bar, warm under-lighting, concrete wall)',
  },
  projectQirat: {
    src: projectQirat,
    sourceId: 'pexels:39472550',
    usage: 'Projects section — Qirat card (upscale restaurant dining room, brass chandeliers, coffered ceiling)',
  },
  projectBrooz: {
    src: projectBrooz,
    sourceId: 'pexels:34823913',
    usage: 'Projects section — Brooz Real Estate card (modern office reception, oak panelling, glass-partitioned meeting room)',
  },
  processBg: {
    src: processBg,
    sourceId: 'user-supplied',
    usage: 'Process section — background (dark blueprint with material samples; user-supplied reference asset)',
  },
  statsBg: {
    src: statsBg,
    sourceId: 'unsplash:1517248135467-4c7edcad34c4',
    usage: 'Numbers/Stats section — architectural image panel (moody gold-slat lounge, dramatic layered lighting)',
  },
  serviceInterior: {
    src: serviceInterior,
    sourceId: 'pexels:19689230',
    usage: 'Services card 01 — Interior Design (luxury lounge, warm wood joinery, brass lighting)',
  },
  service3d: {
    src: service3d,
    sourceId: 'pexels:28729467',
    usage: 'Services card 02 — 3D Visualization (rendered double-height living room)',
  },
  serviceDrawings: {
    src: serviceDrawings,
    sourceId: 'pexels:8837511',
    usage: 'Services card 03 — Execution Drawings (technical plans with pencil)',
  },
  serviceFitout: {
    src: serviceFitout,
    sourceId: 'pexels:11127339',
    usage: 'Services card 04 — Fit-out & Finishing (craftsman planing timber)',
  },
  serviceFurniture: {
    src: serviceFurniture,
    sourceId: 'pexels:30059653',
    usage: 'Services card 05 — Custom Furniture (oak and cane chair in warm light)',
  },
  serviceManagement: {
    src: serviceManagement,
    sourceId: 'pexels:8482865',
    usage: 'Services card 06 — Project Management (site team reviewing plans)',
  },
  servicesPanel: {
    src: servicesPanel,
    sourceId: 'pexels:20337840',
    usage: 'Services section — left image panel (warm loft living space)',
  },
  closingBg: {
    src: closingBg,
    sourceId: 'user-supplied',
    usage: 'Final CTA + Footer — one shared background (dark green with bronze architectural arcs; user-supplied asset)',
  },
} as const
