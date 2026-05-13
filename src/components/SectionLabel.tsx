interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-gold">
      {children}
    </span>
  )
}
