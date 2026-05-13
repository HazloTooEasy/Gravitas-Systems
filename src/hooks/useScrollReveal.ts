import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
    threshold?: number
  } = {}
) {
  const ref = useRef<T>(null)
  const {
    y = 40,
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    threshold = 0.2,
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.querySelectorAll('[data-reveal]')
    const targets = children.length > 0 ? children : [el]

    gsap.set(targets, { opacity: 0, y })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: `top ${100 - threshold * 100}%`,
        once: true,
      },
      delay,
    })

    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
    })

    return () => {
      tl.kill()
    }
  }, [y, duration, delay, stagger, threshold])

  return ref
}
