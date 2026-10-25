import { stockImages } from './stockImages'

/**
 * Project media status: each card below uses a distinct, licensed Unsplash
 * demo photo (see stockImages.ts) — illustrative only, NOT a real OSHAN
 * STUDIO project photograph. No video asset is available for any project,
 * so no play indicator is shown.
 *
 * TODO(assets): replace `image` below with real OSHAN STUDIO project media
 * per slug once supplied, and add `video` where a real clip exists.
 */
export type ProjectCategoryKey = 'cafes' | 'retail' | 'residential'

export interface ProjectEntry {
  slug: string
  categoryKey: ProjectCategoryKey
  image: string
  video?: string
  placeholder: boolean
}

export const projects: ProjectEntry[] = [
  {
    slug: 'era-coffee',
    categoryKey: 'cafes',
    image: stockImages.projectEraCoffee.src,
    placeholder: true,
  },
  {
    slug: 'qirat',
    categoryKey: 'retail',
    image: stockImages.projectQirat.src,
    placeholder: true,
  },
  {
    slug: 'brooz-real-estate',
    categoryKey: 'residential',
    image: stockImages.projectBrooz.src,
    placeholder: true,
  },
]
