import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  link: string
  className?: string
}

export function ProjectCard({ title, description, image, category, link, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20",
        className,
      )}
    >
      <Link href={link} className="absolute inset-0 z-10">
        <span className="sr-only">View project</span>
      </Link>
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8e1952]/90 via-[#8e1952]/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">{category}</span>
          <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
