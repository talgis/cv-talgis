'use client'

import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    category: 'Backend',
    skills: ['Node.js (TypeScript)', 'NestJS', 'GraphQL', 'REST API', 'Socket.io', '.NET C#', 'Java', 'Python']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Couchbase', 'Cassandra', 'Neo4j']
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Elasticsearch', 'Kibana']
  },
  {
    category: 'Messaging & Queues',
    skills: ['RabbitMQ', 'Kafka', 'Redis Queues']
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Mocha', 'Unit Tests', 'Integration Tests', 'E2E Tests']
  },
  {
    category: 'Specializations',
    skills: ['SaaS Development', 'Fintech', 'High-load Optimization', 'Data Pipelines', 'System Architecture']
  }
]

export default function Skills() {
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
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12 opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="border border-border/50 rounded-lg p-6 hover:border-accent/50 hover:bg-background/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold mb-4 text-accent group-hover:text-cyan-300 transition-colors">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-background border border-border/50 rounded-md text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
