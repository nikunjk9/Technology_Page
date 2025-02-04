import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

// Define interfaces for our data structures
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  tech: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    image: "/images/artist8.jpg",
    content: "They have expertise in modern tech stack implementation. The team's profound knowledge of React and Node.js helped us launch our platform 40% faster than planned.",
    rating: 5,
    tech: "React, Node.js, MongoDB"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer, InnovateTech",
    image: "/images/artist1.jpg",
    content: "The depth of technical knowledge and attention to performance optimization was impressive. Our application's load time improved by 60% after implementing their suggested architecture.",
    rating: 5,
    tech: "Next.js, TypeScript, PostgreSQL"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow Systems",
    image: "/images/artist2.jpg",
    content: "Their full-stack expertise made our complex data visualization project seamless. The team's mastery of modern technologies exceeded our expectations.",
    rating: 5,
    tech: "Flutter, Firebase, GraphQL"
  }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
  >
    <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20" />
    
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed">
        {testimonial.content}
      </p>

      <div className="pt-4 border-t border-white/10">
        <p className="text-sm text-purple-400">
          Technologies: {testimonial.tech}
        </p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-black py-8 px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <span className="text-base text-purple-300 font-medium">
                Client Success Stories
              </span>
            </span>

          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;