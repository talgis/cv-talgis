'use client'

import { useEffect, useRef } from 'react'

export default function Portfolio() {
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
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-8 opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <a
              href="https://github.com/talgis/ai-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    AI Chatbot with Claude
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-4">
                    An intelligent chatbot application powered by Claude AI. Demonstrates modern AI integration patterns and conversational interface design.
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Frontend Stack</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Next.js 13
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Shadcn/UI
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Socket.IO Client
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Zustand
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Backend Stack</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          NestJS
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Passport.js + JWT
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Socket.IO
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Anthropic SDK
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Database</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/20">
                          Supabase
                        </span>
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/20">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0">
                  →
                </div>
              </div>
            </a>

            <a
              href="https://github.com/talgis/cv-talgis"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    cv-talgis
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-4">
                    Modern personal portfolio website with smooth scroll animations, responsive design, and professional showcase of work experience, skills, and projects.
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Frontend Stack</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Next.js 16
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Tailwind CSS v4
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Shadcn/UI
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          React 19
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/20">
                          Lucide Icons
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Features & Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Intersection Observer
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Responsive Design
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Scroll Animations
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Dark Theme
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Semantic HTML
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                          Accessibility
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Development & Deployment</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/20">
                          App Router
                        </span>
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/20">
                          Server Components
                        </span>
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/20">
                          Vercel Deployment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0">
                  →
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
