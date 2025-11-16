'use client'

import { useEffect, useRef } from 'react'

const education = [
  {
    school: 'Satpayev Kazakh National University (KazNTU)',
    degree: 'Software Engineering',
    year: '1994–1999',
  },
  {
    school: 'Deiteriy Compliance',
    degree: 'PCI DSS Payments Security',
    year: '2020',
  },
  {
    school: 'Neo4j Academy',
    degree: 'Graph Design/Modeling/LLM',
    year: '2024',
  },
]

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12 opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Education & Certifications</h2>
          </div>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="border border-border/50 rounded-lg p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <p className="text-accent font-semibold mb-2">{item.school}</p>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
