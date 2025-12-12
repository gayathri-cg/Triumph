"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden scroll-mt-20">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          <span className="inline-block px-4 py-1.5 bg-foreground/5 text-foreground text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Who We Are
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight">
            Building Tomorrow, Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Triumph is a vibrant community of computer science students united by curiosity, ambition, and the drive to
            make an impact. We believe that the best ideas emerge when brilliant minds collaborate.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Founded on the principle that failure is just a stepping stone to success, we support each other through
            challenges, celebrate breakthroughs, and constantly push the boundaries of what is possible in tech.
          </p>
        </div>
      </div>
    </section>
  )
}
