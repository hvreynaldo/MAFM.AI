import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We reduced operational costs by 30% within three months with MAFM.AI!",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    quote: "The AI-driven ticketing system increased our response time by 5x.",
    author: "Michael Chen",
    position: "Facility Manager",
    company: "InnoSpace",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  },
  {
    quote: "MAFM.AI transformed how we manage our workspace efficiency.",
    author: "Emily Rodriguez",
    position: "CEO",
    company: "Future Works",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
  }
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-16">
          _TRUSTED BY INDUSTRY LEADERS
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </button>
          
          <div className="text-center px-16">
            <div className="mb-8">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <blockquote className="text-xl text-gray-300 mb-4">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-purple-400 font-mono">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
              </div>
            </div>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </button>
        </div>
      </div>
    </section>
  );
}