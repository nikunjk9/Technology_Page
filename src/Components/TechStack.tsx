import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database} from 'lucide-react';
import Image from 'next/image';

const TechStackSection = () => {
  const techStacks = {
    frontend: [
      { name: 'React', icon: '/images/icon1.png', level: 90 },
      { name: 'Next.js', icon: '/images/icon2.png', level: 85 },
      { name: 'TypeScript', icon: '/images/icon3.png', level: 88 },
      { name: 'Tailwind CSS', icon: '/images/icon5.png', level: 92 },
      { name: 'Flutter', icon: '/images/icon7.png', level: 98 }
    ],
    backend: [
      { name: 'Node.js', icon: '/images/icon8.png', level: 87 },
      { name: 'Express.js', icon: '/images/icon9.png', level: 85 },
      { name: 'Java', icon: '/images/icon10.png', level: 82 },
      { name: 'Python', icon: '/images/icon11.png', level: 78 },
      { name: 'C#', icon: '/images/icon12.png', level: 65 }
    ],
    database: [
      { name: 'PostgreSQL', icon: '/images/icon13.png', level: 80 },
      { name: 'MongoDB', icon: '/images/icon14.png', level: 95 },
      { name: 'Firebase', icon: '/images/icon15.png', level: 89 },
      { name: 'MySQL', icon: '/images/icon16.png', level: 79 },
      { name: 'SQL', icon: '/images/icon17.png', level: 74 }
    ]
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
            <span className="text-sm text-purple-300 font-medium">
              Our Technology Stack
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Cutting-edge TechStack
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">for Modern Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and high-performance applications
            that meet your business needs.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Stack */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <div className="space-y-6">
              {techStacks.frontend.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={1000}
                        height={1000}
                        className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                    <span className="text-sm text-blue-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-blue-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Stack */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <div className="space-y-6">
              {techStacks.backend.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={1000}
                        height={1000}
                        className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                    <span className="text-sm text-purple-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-purple-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Stack */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Database</h3>
            </div>
            <div className="space-y-6">
              {techStacks.database.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={1000}
                        height={1000}
                        className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                    <span className="text-sm text-emerald-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400"
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default TechStackSection;