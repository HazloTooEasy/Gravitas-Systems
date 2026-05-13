import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function LegalDisclaimerSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 20, duration: 0.6, stagger: 0.1 })

  return (
    <section
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10 bg-warm-black"
    >
      <div className="max-w-[800px] mx-auto">
        <div data-reveal>
          <SectionLabel>LEGAL & COMPLIANCE</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          REGULATORY POSITIONING
        </h2>

        <div className="mt-10 space-y-6">
          <p data-reveal className="text-[13px] text-muted-bronze leading-[1.8]">
            GRAVITAS SYSTEMS positions itself as a strategic operator and opportunity structuring firm rather than as a regulated investment fund or public capital raising platform.
          </p>

          <p data-reveal className="text-[13px] text-muted-bronze leading-[1.8]">
            All investment-related communications emphasize private opportunities, strategic participation, operational involvement, estimated scenarios rather than guaranteed returns, selective investor onboarding, and a non-public investment framework.
          </p>

          <p data-reveal className="text-[13px] text-muted-bronze leading-[1.8]">
            Passive investors may access selected operations through structured participation models subject to review, availability, and operational assessment.
          </p>
        </div>

        <div data-reveal className="mt-16 pt-8 border-t border-charcoal text-center">
          <p className="text-[12px] text-muted-bronze opacity-60">
            &copy; 2025 GRAVITAS SYSTEMS. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
