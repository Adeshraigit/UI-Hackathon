import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/button"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectCard } from "@/components/project-card"
import { GrainyBackground } from "@/components/grainy-background"

export default function Home() {
  return (
    <GrainyBackground>
      <div className="min-h-screen flex flex-col">
        <header className="container mx-auto py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              Adesh.
            </Link>
            <div className="flex items-center gap-6">
              <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Creative Developer & Designer</h1>
              <p className="text-xl text-white/80 mb-8">
                I build exceptional digital experiences that combine aesthetics with functionality. Specializing in
                interactive websites and creative applications.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-white text-[#8e1952] hover:bg-white/90">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="container mx-auto py-20">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <BentoGrid>
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern e-commerce platform with a focus on user experience and performance."
                image="/placeholder.svg?height=600&width=800"
                category="Web Development"
                link="#"
                className="md:col-span-2"
              />
              <ProjectCard
                title="Mobile Banking App"
                description="Secure and intuitive mobile banking application."
                image="/placeholder.svg?height=400&width=600"
                category="UI/UX Design"
                link="#"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Personal portfolio website for a photographer."
                image="/placeholder.svg?height=400&width=600"
                category="Web Design"
                link="#"
              />
              <ProjectCard
                title="AI Dashboard"
                description="Analytics dashboard for monitoring AI performance metrics."
                image="/placeholder.svg?height=400&width=600"
                category="Data Visualization"
                link="#"
                className="md:col-span-2"
              />
              <ProjectCard
                title="Travel Blog"
                description="Custom blog platform for travel enthusiasts."
                image="/placeholder.svg?height=400&width=600"
                category="Web Development"
                link="#"
                className="md:col-span-2"
              />
              <ProjectCard
                title="Fitness Tracker"
                description="Mobile app for tracking workouts and nutrition."
                image="/placeholder.svg?height=400&width=600"
                category="Mobile Development"
                link="#"
              />
            </BentoGrid>
          </section>

          {/* About Section */}
          <section id="about" className="container mx-auto py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-4">
                  I'm a passionate developer and designer with over 5 years of experience creating digital products that
                  solve real problems. My approach combines technical expertise with creative thinking to deliver
                  exceptional results.
                </p>
                <p className="text-lg mb-6">
                  I specialize in front-end development, UI/UX design, and interactive experiences. When I'm not coding,
                  you can find me exploring new design trends, contributing to open-source projects, or hiking in the
                  mountains.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href="mailto:hello@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/20">
                <Image src="/placeholder.svg?height=800&width=600" alt="Portrait" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container mx-auto py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
              <p className="text-lg text-white/80 mb-8 text-center">
                Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
              </p>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-white/80">hello@example.com</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 ml-auto text-white/70" />
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-white" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-white/80">linkedin.com/in/username</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 ml-auto text-white/70" />
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <Github className="h-6 w-6 text-white" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-white/80">github.com/username</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 ml-auto text-white/70" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="container mx-auto py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#projects" className="text-sm text-white/60 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </GrainyBackground>
  )
}
