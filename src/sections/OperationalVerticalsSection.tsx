import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const verticals = [
  'BUSINESS GROWTH',
  'OPERATIONAL RESTRUCTURING',
  'PRIVATE HEALTHCARE',
  'REAL ESTATE REPOSITIONING',
  'AUTOMOTIVE',
  'COMMERCIAL VENTURES',
  'STRATEGIC PARTNERSHIPS',
  'MARKET EXPANSION',
]

export default function OperationalVerticalsSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 15, duration: 0.5, stagger: 0.04 })

  return (
    <section
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10"
      style={{ backgroundColor: '#0A0908' }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <div data-reveal>
          <SectionLabel>OPERATIONAL VERTICALS</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          SECTORS OF ENGAGEMENT
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {verticals.map((tag) => (
            <span
              key={tag}
              data-reveal
              className="px-6 py-3 border border-charcoal text-[11px] font-medium tracking-[0.1em] uppercase text-muted-bronze hover:border-warm-gold hover:text-champagne transition-colors duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <p data-reveal className="mt-12 text-[14px] text-muted-bronze leading-[1.65] max-w-[600px] mx-auto">
          Each vertical represents a domain where GRAVITAS SYSTEMS applies structured execution methodology.
        </p>
      </div>
    </section>
  )
}
