'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'Backend Developer (Fintech)',
    company: 'PartnersPay',
    period: 'December 2024 — July 2025',
    location: 'Almaty, Kazakhstan',
    highlights: [
      'Developed and deployed microservice for generating reports on account inflows and driver payouts',
      'Implemented push notification system for mobile app using Redis queues',
      'Designed new server infrastructure in Kubernetes for PCI DSS 4.0 audit compliance',
      'Created complex queries with Common Table Expressions for multi-dataset integration'
    ],
    tech: ['NestJS', 'TypeScript', 'Redis', 'PostgreSQL', 'Kubernetes']
  },
  {
    title: 'Backend Developer & Tech Lead (Logistics)',
    company: 'BINY',
    period: 'May 2024 — August 2024',
    location: 'Astana, Kazakhstan',
    highlights: [
      'Built GraphQL server for international freight delivery mobile application',
      'Integrated bank payment services for driver compensation',
      'Refactored legacy .NET C# API with improved status management'
    ],
    tech: ['GraphQL', 'Python', '.NET C#', 'React', 'PostgreSQL']
  },
  {
    title: 'Fullstack Developer & Tech Lead',
    company: 'Expertonica',
    period: 'September 2023 — June 2024',
    location: 'Almaty, Kazakhstan',
    highlights: [
      'Developed graph database service in Neo4j for improved recommendations',
      'Built BPMN 2.0 engine from scratch for ETL process management',
      'Created Vue3 admin interface for BPMN workflow management'
    ],
    tech: ['Python', 'Vue3', 'Neo4j', 'Couchbase', 'BPMN']
  },
  {
    title: 'CTO & Fullstack Developer',
    company: 'Relog',
    period: 'August 2021 — August 2022',
    location: 'Almaty, Kazakhstan',
    highlights: [
      'Built microservice for freight transportation integration with Yandex API',
      'Developed delivery delay tracking system for 600+ locations and 2000+ couriers',
      'Led scrum team, managed code reviews, and optimized high-load services',
      'Migrated SaaS infrastructure to Hetzner data center without downtime',
      'Transitioned from Meteor.js monolith to NestJS microservices architecture'
    ],
    tech: ['Node.js', 'NestJS', 'React', 'MongoDB', 'Redis', 'Socket.io', 'Kubernetes']
  },
  {
    title: 'Fullstack Developer & Tech Lead (Fintech)',
    company: 'Indigo24',
    period: 'March 2019 — June 2021',
    location: 'Almaty, Kazakhstan',
    highlights: [
      'Built payment terminal network from scratch for accepting payments',
      'Developed device drivers for coin and banknote acceptors in Python',
      'Created Node.js/Express API server for transaction processing',
      'Built React admin dashboard for terminal management and monitoring',
      'Developed C drivers for transport validators with RFID card reading'
    ],
    tech: ['Node.js', 'Express', 'Python', 'React', 'C', 'Redis', 'OpenVPN']
  },
  {
    title: 'Fullstack Developer (Laboratory)',
    company: 'T-Helper',
    period: 'March 2013 — June 2019',
    location: 'Almaty, Kazakhstan',
    highlights: [
      'Built laboratory information system (LIS) from scratch with MongoDB and PHP',
      'Developed data format for biochemical and immunoassay analyzer results',
      'Created API server for result interpretation and PDF report distribution',
      'Implemented online patient direction registration system',
      'Developed cashier interface with WebKassa online receipt integration',
      'Built lab technician interface for equipment data input with quality tracking',
      'Created statistical reporting system with quality control metrics'
    ],
    tech: ['PHP', 'MariaDB', 'MongoDB', 'JavaScript', 'HTML/CSS']
  }
]

export default function Experience() {
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
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12 opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border border-border/50 rounded-lg p-6 sm:p-8 hover:border-accent/50 hover:bg-card/50 transition-all duration-300">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-accent font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-accent mt-1.5 flex-shrink-0">▪</span>
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
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
