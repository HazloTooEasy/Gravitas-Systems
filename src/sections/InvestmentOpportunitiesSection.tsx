import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function InvestmentOpportunitiesSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 1, stagger: 0.08 })

  return (
    <section
      id="opportunities"
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10 bg-obsidian"
    >
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal>
          <SectionLabel>INVESTMENT FRAMEWORK</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          SELECTIVE OPPORTUNITIES. STRUCTURED PARTICIPATION.
        </h2>

        <p data-reveal className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em] max-w-[800px]">
          GRAVITAS SYSTEMS may selectively structure private opportunities where external capital participation is possible. These operations are designed around strategic execution, operational improvement, and scalable monetization models.
        </p>

        {/* Featured Opportunity Card */}
        <div
          data-reveal
          className="mt-16 p-8 md:p-12 border"
          style={{
            backgroundColor: 'rgba(196, 168, 130, 0.04)',
            borderColor: 'rgba(196, 168, 130, 0.12)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <SectionLabel>EXAMPLE OPPORTUNITY</SectionLabel>

              <h3
                className="mt-4 text-champagne font-medium uppercase leading-[1.3]"
                style={{
                  fontSize: 'clamp(18px, 1.8vw, 24px)',
                  letterSpacing: '0.06em',
                }}
              >
                Private Clinic Expansion & Automation
              </h3>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div data-reveal>
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block">
                    SECTOR
                  </span>
                  <span className="mt-2 text-[16px] text-platinum block">
                    Private Healthcare
                  </span>
                </div>
                <div data-reveal>
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block">
                    CAPITAL OBJECTIVE
                  </span>
                  <span className="mt-2 text-[16px] text-platinum block">
                    &euro;80,000
                  </span>
                </div>
                <div data-reveal>
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block">
                    INVESTMENT HORIZON
                  </span>
                  <span className="mt-2 text-[16px] text-platinum block">
                    18&ndash;24 Months
                  </span>
                </div>
                <div data-reveal>
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block">
                    TARGET ROI
                  </span>
                  <span className="mt-2 text-[16px] text-platinum block">
                    1.8x &ndash; 2.4x
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="shrink-0">
              <span
                className="inline-block px-6 py-3 text-[11px] font-medium tracking-[0.1em] uppercase text-warm-gold border border-warm-gold"
              >
                OPEN FOR REVIEW
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <p data-reveal className="mt-12 text-center text-[14px] text-muted-bronze leading-[1.65]">
          Interested investors may request detailed operational analysis.{` `}
          <a href="#contact" className="text-warm-gold hover:text-pale-gold transition-colors duration-300 underline underline-offset-4">
            Contact us
          </a>
        </p>
      </div>
    </section>
  )
}
