import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const opportunities = [
  {
    id: "01",
    title: "REAL ESTATE DEVELOPMENT PROJECT",
    description: "Urban development opportunity consisting of 15 residential units and 15 parking spaces. The project already includes approved building permits, architectural plans, quality specifications and construction budget.",
    roi: "18% – 35%",
    investment: "Structured"
  },
  {
    id: "02",
    title: "LAND ACQUISITION + PREFABRICATED HOME",
    description: "Complete turnkey solution including land sourcing and prefabricated home construction.",
    roi: "8% – 15%",
    investment: "From €170,000"
  },
  {
    id: "03",
    title: "GOLD BUYING JEWELRY BUSINESS IN MADRID",
    description: "Operational jewelry and precious metals purchasing business with licenses and established activity.",
    roi: "15% – 40%",
    investment: "Structured"
  },
  {
    id: "04",
    title: "CUSTOM TRADING BOT DEVELOPMENT",
    description: "Design and implementation of customized automated trading systems for financial markets. Suitable for Forex, commodities, indices and digital assets.",
    roi: "Variable",
    investment: "Custom"
  },
  {
    id: "05",
    title: "TURNKEY WATER TREATMENT PLANTS",
    description: "Engineering, design, construction and commissioning of water treatment plants worldwide. Solutions available for industrial, municipal and agricultural sectors.",
    roi: "Project Based",
    investment: "Structured"
  },
  {
    id: "06",
    title: "TURNKEY SOLAR ENERGY PROJECTS",
    description: "Engineering, procurement, construction and commissioning of solar photovoltaic projects worldwide.",
    roi: "8% – 18%",
    investment: "Structured"
  },
  {
    id: "07",
    title: "ENERGY AND FUELS SUPPLY",
    description: "Large-volume international supply of Crude Oil, Virgin Fuel Oil D6, Automotive Gas Oil, LNG, Light Cycle Oil, Aviation Kerosene, Jet Fuel Grade 54, Jet A-1 and Diesel EN590 10PPM.",
    roi: "Market Rates",
    investment: "Large-Scale"
  },
  {
    id: "08",
    title: "INDUSTRIAL AND PRECIOUS METALS",
    description: "International supply of Gold, Silver, Copper and Aluminum in industrial quantities. Suitable for refineries, industrial buyers and international traders.",
    roi: "Market Rates",
    investment: "Large-Scale"
  },
  {
    id: "09",
    title: "CHINA SOURCING & IMPORT SERVICES",
    description: "Direct sourcing from Chinese manufacturers with price negotiation, quality control and logistics management. Best-price guarantee policy.",
    roi: "Cost Reduction",
    investment: "10% Service Fee"
  }
];

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
          <SectionLabel>CURRENT PORTFOLIO</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          INVESTMENT OPPORTUNITIES
        </h2>

        <p data-reveal className="mt-6 text-platinum text-[14px] leading-[1.65] tracking-[0.01em] max-w-[800px]">
          All ROI figures are indicative estimates based on historical experience and market references. Each investment opportunity is unique and may be affected by market conditions. A dedicated advisor will contact interested parties to provide detailed information and NDAs.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              data-reveal
              className="p-8 border flex flex-col justify-between group hover:border-warm-gold/50 transition-colors duration-500"
              style={{
                backgroundColor: 'rgba(196, 168, 130, 0.02)',
                borderColor: 'rgba(196, 168, 130, 0.12)',
              }}
            >
              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-warm-gold opacity-70">
                  {opp.id}
                </span>
                <h3 className="mt-4 text-[16px] text-champagne font-medium uppercase leading-[1.4] tracking-[0.04em]">
                  {opp.title}
                </h3>
                <p className="mt-4 text-[13px] text-muted-bronze leading-[1.6] opacity-80">
                  {opp.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-charcoal grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-bronze block">
                    CAPITAL
                  </span>
                  <span className="mt-1 text-[13px] text-platinum block">
                    {opp.investment}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-bronze block">
                    TARGET ROI
                  </span>
                  <span className="mt-1 text-[13px] text-platinum block">
                    {opp.roi}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p data-reveal className="mt-16 text-center text-[14px] text-muted-bronze leading-[1.65]">
          Interested investors may request detailed operational analysis.{` `}
          <a href="#contact" className="text-warm-gold hover:text-pale-gold transition-colors duration-300 underline underline-offset-4">
            Complete the contact form below
          </a>
        </p>
      </div>
    </section>
  )
}
