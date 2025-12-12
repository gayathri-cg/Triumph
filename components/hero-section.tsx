"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { members } from "@/lib/members"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Get first 3 members for the peek preview
  const previewMembers = members.slice(0, 3)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-bl from-muted/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-muted/30 via-transparent to-transparent" />

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-medium tracking-tight mb-8">
            TRIUMPH
          </h1>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-out delay-200",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <blockquote className="max-w-xl mx-auto">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-muted-foreground tracking-wide leading-relaxed">
              "Failure is not falling down but <span className="text-foreground">staying down</span>."
            </p>
          </blockquote>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-out delay-500",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <div className="flex items-center justify-center gap-4 mt-12">
            <a
              href="#about"
              className="px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm hover:bg-foreground/90 transition-all"
            >
              Who We Are
            </a>
            <a
              href="#members"
              className="px-6 py-3 border border-border rounded-full font-medium text-sm hover:bg-muted transition-all"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out delay-700",
          mounted ? "opacity-100" : "opacity-0",
        )}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
