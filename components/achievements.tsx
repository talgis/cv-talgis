'use client'

import { useEffect, useRef } from 'react'

const achievements = [
  {
    title: 'PartnersPay Payment Platform',
    description: 'Developed and deployed a report generation and PUSH notification microservice serving 40,000+ clients on the PartnersPay mobile application platform.',
    icon: '💰',
  },
  {
    title: 'Rebox Logistics Network',
    description: 'Built a microservice for freight transportation hiring, enabling seamless cargo delivery integration with Kaspi and Sulpak e-commerce platforms.',
    icon: '📦',
  },
  {
    title: 'Vkusvill Delivery Optimization',
    description: 'Created a delivery delay tracking system for 600+ food distribution points and 2,000 couriers, reducing late deliveries through data-driven insights.',
    icon: '🚚',
  },
  {
    title: 'Indigo24 Payment Terminals',
    description: 'Built a complete payment terminal network from scratch with coin/banknote acceptance, offline mode, and automatic transaction routing to payment processors.',
    icon: '🏧',
  },
  {
    title: 'Infrastructure Leadership',
    description: 'Successfully led development teams of 5-10 engineers, performed high-load optimization on Kubernetes services, and migrated SaaS infrastructure without downtime.',
    icon: '⚙️',
  },
  {
    title: 'System Architecture & Refactoring',
    description: 'Executed critical refactoring of legacy codebases, transitioned monolithic architectures to microservices, and implemented SaaS product optimizations handling 300+ enterprise clients.',
    icon: '🏗️',
  },
]

export default function Achievements() {
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
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12 opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Key Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="border border-border/50 rounded-lg p-6 hover:border-accent/50 hover:bg-background/50 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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
