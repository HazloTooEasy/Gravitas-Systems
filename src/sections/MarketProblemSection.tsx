import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const businessProblems = [
  'Disorganized operational structures',
  'Weak lead conversion systems',
  'Poor follow-up and client retention',
  'Lack of automation and reporting',
  'Inefficient commercial execution',
  'Underutilized business opportunities',
  'Lack of scalable infrastructure',
]

const investorProblems = [
  'Capital with limited strategic deployment',
  'No access to private operations',
  'Lack of operational management capacity',
  'Difficulty identifying reliable execution partners',
  'Limited access to structured off-market opportunities',
]

export default function MarketProblemSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.8, stagger: 0.08 })

  return (
    <section
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10 bg-warm-black"
    >
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal>
          <SectionLabel>THE MARKET PROBLEM</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          TWO WORLDS. ONE MISSING BRIDGE.
        </h2>

        <p data-reveal className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em] max-w-[800px]">
          Many companies possess strong products, services, or assets but lack the internal systems required to scale efficiently. At the same time, many investors face the opposite challenge.
        </p>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Card */}
          <div
            data-reveal
            className="p-8 md:p-10 border border-charcoal"
            style={{ backgroundColor: '#0A0908' }}
          >
            <h3
              className="text-champagne font-medium uppercase leading-[1.3]"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                letterSpacing: '0.06em',
              }}
            >
              BUSINESSES
            </h3>
            <ul className="mt-8 space-y-4">
              {businessProblems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-platinum leading-[1.65]">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-warm-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Investor Card */}
          <div
            data-reveal
            className="p-8 md:p-10 border border-charcoal"
            style={{ backgroundColor: '#0A0908' }}
          >
            <h3
              className="text-champagne font-medium uppercase leading-[1.3]"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                letterSpacing: '0.06em',
              }}
            >
              INVESTORS
            </h3>
            <ul className="mt-8 space-y-4">
              {investorProblems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-platinum leading-[1.65]">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-warm-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bridge statement */}
        <p
          data-reveal
          className="mt-16 text-center text-champagne italic text-[16px] leading-[1.65] max-w-[800px] mx-auto"
        >
          GRAVITAS SYSTEMS bridges both worlds by combining operational execution with strategically structured opportunities.
        </p>
      </div>
    </section>
  )
}
