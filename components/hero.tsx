'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div
        ref={ref}
        className="max-w-4xl mx-auto text-center space-y-8 opacity-0"
      >
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Talgat Zakiryanov
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-semibold">
            Backend Developer
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          10+ years building high-load web services, designing resilient architectures, and leading development teams. Specialized in SaaS products, performance optimization, and scalable systems.
        </p>

        <div className="pt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            View Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
