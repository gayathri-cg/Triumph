"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Member } from "@/lib/members"

interface MemberCardProps {
  member: Member
  index: number
  onClick: () => void
}

export function MemberCard({ member, index, onClick }: MemberCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, index * 80)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <button
      onClick={onClick}
      className={cn(
        // mobile: centered  | desktop: left-aligned
        "group relative bg-card rounded-2xl p-6 transition-all duration-500 ease-out",
        "text-center md:text-left",
        "hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1",
        "border border-border/50 hover:border-border",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-muted/0 via-muted/0 to-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Image centered on mobile */}
        <div className="relative w-24 h-28 mb-5 overflow-hidden rounded-xl mx-auto md:mx-0">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <h3 className="font-medium text-lg text-card-foreground mb-1 transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-muted-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
    </button>
  )
}
