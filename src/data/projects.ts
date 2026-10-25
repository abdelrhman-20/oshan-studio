import { stockImages } from './stockImages'

/**
 * Project media status: each card below uses a distinct, licensed stock
 * demo photo (see stockImages.ts) — illustrative only, NOT a real OSHAN
 * STUDIO project photograph.
 *
 * TODO(assets): replace `image` below with real OSHAN STUDIO project media
 * per slug once supplied.
 * TODO(routes): set `href` per project once a project details page exists;
 * the cards render as plain (non-link) items until then.
 */
export interface ProjectEntry {
  slug: string
  image: string
  /** CSS object-position for the card photo. */
  focal: string
  href?: string
  placeholder: boolean
}

export const projects: ProjectEntry[] = [
  {
    slug: 'era-coffee',
    image: stockImages.projectEraCoffee.src,
    focal: '50% 62%',
    placeholder: true,
  },
  {
    slug: 'qirat',
    image: stockImages.projectQirat.src,
    focal: '64% 50%',
    placeholder: true,
  },
  {
    slug: 'brooz-real-estate',
    image: stockImages.projectBrooz.src,
    focal: '38% 50%',
    placeholder: true,
  },
]
