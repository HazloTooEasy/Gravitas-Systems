import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function ExecutivePositioningSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.8, stagger: 0.15 })

  return (
    <section
      id="positioning"
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10"
      style={{ background: 'linear-gradient(to bottom, #050402, #0A0908)' }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-0 items-start">
        {/* Left column */}
        <div className="pr-0 md:pr-16">
          <div data-reveal>
            <SectionLabel>EXECUTIVE POSITIONING</SectionLabel>
          </div>

          <h2
            data-reveal
            className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '0.04em',
            }}
          >
            CAPITAL ALONE DOES NOT CREATE VALUE. STRUCTURED EXECUTION DOES.
          </h2>

          <p data-reveal className="mt-8 text-platinum text-[14px] leading-[1.65] tracking-[0.01em]">
            GRAVITAS SYSTEMS operates at the intersection of business growth, operational execution, and private investment opportunities. Unlike traditional consulting firms, GRAVITAS actively participates in the structuring, optimization, and scaling of selected operations.
          </p>

          <p data-reveal className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em]">
            The firm works both with businesses seeking growth and with passive investors looking for exposure to private opportunities with operational backing.
          </p>
        </div>

        {/* Right column — watermark */}
        <div className="relative hidden md:flex items-center justify-center min-h-[400px]">
          <div
            data-reveal
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="font-normal uppercase leading-[1.1] select-none whitespace-nowrap"
              style={{
                fontSize: 'clamp(48px, 5vw, 72px)',
                letterSpacing: '-0.02em',
                color: 'rgba(196, 168, 130, 0.08)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
              }}
            >
              STRUCTURED GROWTH
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
