import ParticleVortex from '@/components/ParticleVortex'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <ParticleVortex />

      {/* Radial gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(5,4,2,0.3) 0%, rgba(5,4,2,0.7) 50%, rgba(5,4,2,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6">
        <span className="text-[14px] md:text-[16px] font-outfit font-semibold tracking-[0.4em] uppercase text-warm-gold mb-10 opacity-90">
          GRAVITAS SYSTEMS
        </span>

        <h1
          className="text-champagne font-outfit font-light uppercase leading-[1.05]"
          style={{
            fontSize: 'clamp(54px, 8vw, 110px)',
            letterSpacing: '-0.03em',
            textShadow: '0 4px 40px rgba(5,4,2,0.6)',
          }}
        >
          STRUCTURED GROWTH.
        </h1>

        <p
          className="mt-8 text-platinum font-cormorant italic tracking-[0.05em] max-w-2xl opacity-80"
          style={{ 
            fontSize: 'clamp(20px, 2vw, 26px)', 
            textShadow: '0 2px 20px rgba(5,4,2,0.5)',
            lineHeight: '1.4'
          }}
        >
          Strategic Execution. Private Opportunities.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <div
          className="w-[1px] h-10 bg-charcoal animate-pulse-scroll"
        />
      </div>
    </section>
  )
}
