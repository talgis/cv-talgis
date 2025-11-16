'use client'

import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-8 opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>

          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Backend Developer with 10+ years of experience creating high-load web services. I design reliable architectures, lead development teams, and optimize performance for SaaS products. My expertise spans building fault-tolerant systems capable of handling large data volumes across fintech, logistics, and payment processing domains.
            </p>

            <p>
              Throughout my career, I've worked in agile sprint teams, developing and supporting SaaS products while debugging complex issues and optimizing service performance. I've successfully led teams of 5-10 developers, conducted critical code reviews, and performed extensive optimization of high-load services in Kubernetes environments. I'm passionate about clean architecture, scalability, and delivering solutions that power real-world applications serving thousands of users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="border-l-2 border-accent/50 pl-4">
                <h3 className="font-semibold text-accent mb-2">Location</h3>
                <p className="text-foreground">Almaty, Kazakhstan • Hybrid/Remote</p>
              </div>
              <div className="border-l-2 border-accent/50 pl-4">
                <h3 className="font-semibold text-accent mb-2">Languages</h3>
                <p className="text-foreground">Kazakh, Russian • English (Technical Documentation)</p>
              </div>
              <div className="border-l-2 border-accent/50 pl-4">
                <h3 className="font-semibold text-accent mb-2">Focus Areas</h3>
                <p className="text-foreground">Backend Architecture • SaaS Products • Performance Optimization</p>
              </div>
              <div className="border-l-2 border-accent/50 pl-4">
                <h3 className="font-semibold text-accent mb-2">Experience</h3>
                <p className="text-foreground">10+ Years Building Scalable Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
