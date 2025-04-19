'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Adesh Rai',
    role: 'Mumbai, India',
    image: '/adesh.jpeg', // Add this to your `public/images` folder
    quote:
      "A Full Stack Developer, deeply passionate about GenAI.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const testimonial = testimonials[index];

  return (
    <div className="bg-[#121212] text-white p-6 md:p-12 flex flex-col md:flex-row gap-6 items-center max-w-4xl mx-auto">
      {/* Left: Image */}
      <div className="relative">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-52 h-64 object-cover rounded-2xl"
        />
        <div className="absolute -left-3 top-3 w-52 h-64 bg-gray-700 rounded-2xl z-[-1] rotate-[-4deg]"></div>
      </div>

      {/* Right: Text Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
        <p className="text-base leading-relaxed text-gray-200">
          {testimonial.quote}
        </p>
      </div>
      
    </div>
  );
}
