"use client"

import { useState } from "react"
import { MemberCard } from "@/components/member-card"
import { MemberModal } from "@/components/member-modal"
import type { Member } from "@/lib/members"
import { members } from "@/lib/members"

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <section id="members" className="py-24 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            The Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Our Community</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A collective of ambitious computer science students pushing boundaries and building the future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} onClick={() => setSelectedMember(member)} />
          ))}
        </div>
      </div>

      <MemberModal member={selectedMember} isOpen={!!selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  )
}
