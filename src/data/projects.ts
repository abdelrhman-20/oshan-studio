import { stockImages } from './stockImages'
import eraCoffeeReel from '../assets/videos/era-coffee.mp4'

/**
 * Project media status: all three cards use real, user-supplied project
 * media — an ERA Coffee reel, a Qirat storefront photo and a Brwaz render.
 *
 * TODO(routes): set `href` per project once a project details page exists;
 * the cards render as plain (non-link) items until then.
 */
export interface ProjectEntry {
  slug: string
  image: string
  /** CSS object-position for the card photo. */
  focal: string
  /** Optional looping story-style reel; `image` doubles as its poster. */
  video?: string
  /** Reel playback speed (1 = normal, below 1 = slower). */
  playbackRate?: number
  href?: string
  placeholder: boolean
}

export const projects: ProjectEntry[] = [
  {
    slug: 'era-coffee',
    image: stockImages.projectEraCoffee.src,
    focal: '50% 62%',
    video: eraCoffeeReel,
    playbackRate: 0.9,
    placeholder: false,
  },
  {
    slug: 'qirat',
    image: stockImages.projectQirat.src,
    focal: '50% 40%',
    placeholder: false,
  },
  {
    slug: 'brwaz-real-estate',
    image: stockImages.projectBrwaz.src,
    focal: '50% 45%',
    placeholder: false,
  },
]
