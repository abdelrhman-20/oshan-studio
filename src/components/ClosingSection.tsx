import { CTASection } from './CTASection'
import { Footer } from './Footer'
import { stockImages } from '../data/stockImages'

/**
 * Wraps the final CTA and the footer so they share ONE background image,
 * rendered exactly once across their combined height. Neither child draws
 * its own background.
 */
export function ClosingSection() {
  return (
    <div className="relative overflow-hidden bg-forest-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Narrow screens crop (cover); wide screens fit the full composition across the combined height. */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]"
          style={{ backgroundImage: `url(${stockImages.closingBg.src})` }}
        />
        {/* Subtle readability veil + soft fade into the section above */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #07110D 0%, rgba(7,17,13,0) 7%, rgba(7,17,13,0.12) 50%, rgba(7,17,13,0.3) 100%)',
          }}
        />
      </div>
      <div className="relative">
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
