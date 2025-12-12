"use client"

import { useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Member } from "@/lib/members"

interface MemberModalProps {
  member: Member | null
  isOpen: boolean
  onClose: () => void
}

export function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      closeButtonRef.current?.focus()
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleKeyDown])

  if (!member) return null

  const socialIcons = {
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    linkedin: Linkedin,
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6",
        "transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        ref={modalRef}
        className={cn(
          "relative bg-card rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
          "transform transition-all duration-300 ease-out",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          {/* Profile image (updated to portrait frame + top-focused crop) */}
          <div className="relative w-36 h-44 md:w-44 md:h-56 mx-auto mb-6 overflow-hidden rounded-2xl bg-muted/10">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name and role */}
          <div className="text-center mb-6">
            <h2 id="modal-title" className="font-serif text-2xl md:text-3xl font-medium text-card-foreground mb-2">
              {member.name}
            </h2>
            <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
              {member.role}
            </span>
          </div>

          {/* Bio */}
          <p className="text-center text-muted-foreground leading-relaxed mb-8">{member.bio}</p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {Object.entries(member.socials).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons]
              if (!Icon || !url) return null
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label={`${member.name}'s ${platform}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
