import type React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6", className)}>{children}</div>
}
