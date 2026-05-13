import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const steps = [
  { num: '01', title: 'IDENTIFICATION', desc: 'Strategic opportunity sourced and preliminary vetted' },
  { num: '02', title: 'ANALYSIS', desc: 'Operational and financial deep-dive assessment' },
  { num: '03', title: 'STRUCTURING', desc: 'Participation model defined and terms structured' },
  { num: '04', title: 'REVIEW', desc: 'Private investor review and due diligence process' },
  { num: '05', title: 'EXECUTION', desc: 'Operational scaling and implementation begins' },
  { num: '06', title: 'MONITORING', desc: 'Continuous reporting, optimization, and value creation' },
]

export default function InvestorWorkflowSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.7, stagger: 0.1 })

  return (
    <section
      id="workflow"
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10 bg-obsidian"
    >
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal>
          <SectionLabel>INVESTOR ACQUISITION WORKFLOW</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          FROM IDENTIFICATION TO OPTIMIZATION
        </h2>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div
            className="absolute left-[15px] md:left-[27px] top-0 bottom-0 w-[1px] bg-charcoal"
          />

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.num}
                data-reveal
                className="relative flex items-start gap-6 md:gap-10"
              >
                {/* Number */}
                <div className="relative z-10 shrink-0">
                  <span
                    className="text-warm-gold font-light leading-[1.1] block text-center"
                    style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      letterSpacing: '-0.02em',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3
                    className="text-champagne font-medium uppercase leading-[1.3]"
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 24px)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-muted-bronze leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
