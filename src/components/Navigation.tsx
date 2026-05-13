import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'POSITIONING', href: '#positioning' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'OPPORTUNITIES', href: '#opportunities' },
  { label: 'WORKFLOW', href: '#workflow' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
        scrolled 
          ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          className="group flex items-center gap-2"
        >
          <span className="text-[18px] tracking-[0.25em] uppercase text-champagne font-outfit font-semibold transition-all duration-300 group-hover:tracking-[0.3em]">
            GRAVITAS
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-warm-gold animate-pulse" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[12px] tracking-[0.15em] uppercase text-pale-gold/70 hover:text-platinum font-outfit font-medium transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-warm-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile menu icon (placeholder for now) */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className="w-6 h-[1px] bg-champagne" />
          <div className="w-4 h-[1px] bg-champagne self-end" />
        </div>
      </div>
    </header>
  )
}

