import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function InvestorContactSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.8, stagger: 0.1 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-[120px] md:py-[120px] px-6 md:px-10"
      style={{ backgroundColor: '#0A0908' }}
    >
      <div className="max-w-[600px] mx-auto">
        <div data-reveal className="text-center">
          <SectionLabel>INVESTOR CONTACT</SectionLabel>
        </div>

        <h2
          data-reveal
          className="mt-6 text-center text-champagne font-medium uppercase leading-[1.3]"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            letterSpacing: '0.04em',
          }}
        >
          INITIATE CONVERSATION
        </h2>

        <p data-reveal className="mt-6 text-center text-[14px] text-muted-bronze leading-[1.65]">
          For qualified investors seeking exposure to structured private opportunities. All inquiries are reviewed confidentially.
        </p>

        <div
          data-reveal
          className="mt-12 p-8 md:p-12 border border-charcoal"
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-champagne text-[16px]">Thank you for your inquiry.</p>
              <p className="mt-2 text-muted-bronze text-[14px]">Our team will review your submission and respond accordingly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div data-reveal>
                <label className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block mb-3">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-0 border-b border-charcoal text-platinum text-[14px] pb-3 focus:outline-none focus:border-warm-gold transition-colors duration-300"
                />
              </div>

              <div data-reveal>
                <label className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-charcoal text-platinum text-[14px] pb-3 focus:outline-none focus:border-warm-gold transition-colors duration-300"
                />
              </div>

              <div data-reveal>
                <label className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block mb-3">
                  INVESTMENT INTEREST
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-0 border-b border-charcoal text-platinum text-[14px] pb-3 focus:outline-none focus:border-warm-gold transition-colors duration-300 resize-none"
                />
              </div>

              <div data-reveal>
                <label className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-bronze block mb-3">
                  ACCREDITED INVESTOR STATUS
                </label>
                <select
                  required
                  className="w-full bg-transparent border-0 border-b border-charcoal text-platinum text-[14px] pb-3 focus:outline-none focus:border-warm-gold transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundColor: '#0A0908' }}
                >
                  <option value="" className="bg-ink-black">Select status</option>
                  <option value="yes" className="bg-ink-black">Yes</option>
                  <option value="no" className="bg-ink-black">No</option>
                  <option value="review" className="bg-ink-black">Under Review</option>
                </select>
              </div>

              <div data-reveal className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-warm-gold text-obsidian text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-pale-gold transition-colors duration-300"
                >
                  SUBMIT INQUIRY
                </button>
              </div>
            </form>
          )}
        </div>

        <p data-reveal className="mt-8 text-center text-[12px] text-muted-bronze leading-[1.65] opacity-60">
          This form does not constitute an offer to sell or a solicitation of an offer to buy any securities.
        </p>
      </div>
    </section>
  )
}
