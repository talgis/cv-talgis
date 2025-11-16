'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Portfolio from '@/components/portfolio'
import Achievements from '@/components/achievements'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Footer from '@/components/footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Achievements />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
