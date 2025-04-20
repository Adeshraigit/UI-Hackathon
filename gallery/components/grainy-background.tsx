"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GrainyBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function GrainyBackground({ children, className }: GrainyBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Gradient background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, #d13b7b, #8e1952)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="fixed inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white">{children}</div>
    </div>
  )
}
