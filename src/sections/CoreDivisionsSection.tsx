import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function CoreDivisionsSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 40, duration: 0.9, stagger: 0.15 })

  return (
    <section
      id="divisions"
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10"
      style={{ background: 'linear-gradient(to bottom, #0A0908, #050402)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal>
          <SectionLabel>CORE DIVISIONS</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          DUAL OPERATIONS. SINGLE PURPOSE.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Division A */}
          <div
            data-reveal
            className="p-8 md:p-10 border border-charcoal"
            style={{
              background: 'linear-gradient(135deg, #0A0908 0%, #12110E 100%)',
            }}
          >
            <div className="w-[60px] h-[2px] bg-warm-gold" />
            <h3
              className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                letterSpacing: '0.06em',
              }}
            >
              GROWTH & SYSTEMS DIVISION
            </h3>
            <p className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em]">
              Business optimization, AI automation, growth systems, operational restructuring, and strategic scaling. This division transforms underperforming operations into efficient, scalable enterprises through systematic intervention.
            </p>
            <p className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze">
              AUTOMATION &middot; RESTRUCTURING &middot; SCALING
            </p>
          </div>

          {/* Division B */}
          <div
            data-reveal
            className="p-8 md:p-10 border border-charcoal"
            style={{
              background: 'linear-gradient(135deg, #0A0908 0%, #12110E 100%)',
            }}
          >
            <div className="w-[60px] h-[2px] bg-pale-gold" />
            <h3
              className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                letterSpacing: '0.06em',
              }}
            >
              PRIVATE OPPORTUNITIES DIVISION
            </h3>
            <p className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em]">
              Structured private opportunities where GRAVITAS participates in execution, optimization, and operational development. These are select engagements with operational backing and defined exit parameters.
            </p>
            <p className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze">
              HEALTHCARE &middot; REAL ESTATE &middot; VENTURES
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
