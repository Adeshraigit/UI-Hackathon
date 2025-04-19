import { Dock } from "@/components/dock";
import { Gallery } from "@/components/gallery";
import Hero from "@/components/hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="bg-[#121212] text-white px-6 py-10 md:p-12 flex flex-col md:flex-row gap-6 items-center max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">
          Full-Stack Developer passionate about building scalable web applications and AI-powered
          solutions. Skilled in Next.js, TypeScript,Experienced in optimizing performance, integrating
          backend services, and enhancing user interfaces.
        </p>
      </div>
    </div>
    </>
  );
}
