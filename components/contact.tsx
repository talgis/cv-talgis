'use client'

import { useEffect, useRef } from 'react'
import { Github, Send, Mail } from 'lucide-react'
import Portfolio from './portfolio'

export default function Contact() {
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
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12 opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
              </p>

              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <a
                    href="mailto:talgisszz@gmail.com"
                    className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <span className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      ✉
                    </span>
                    <span>talgisszz@gmail.com</span>
                  </a>
                </div>

                <div className="group cursor-pointer">
                  <a
                    href="tel:+77054850647"
                    className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <span className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      📱
                    </span>
                    <span>+7 705 485 06 47</span>
                  </a>
                </div>

                <div className="group cursor-pointer">
                  <a
                    href="https://t.me/talgis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                    aria-label="Telegram"
                    title="Telegram"
                  >
                    <span className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      ✉
                    </span>
                    <span>@talgis (Telegram)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Connect & Follow</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:talgisszz@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                  title="Email: talgisszz@gmail.com"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://t.me/talgis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <Send size={20} />
                </a>
                <a
                  href="https://github.com/talgis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
