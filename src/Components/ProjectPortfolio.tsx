import React, { useState, useCallback, useMemo } from 'react';
import { Code, X, ArrowRight, Globe } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  category: string;
  imgUrl: string;
  description: string;
  technologies: string[];
  details: string[];
}

const projectsData: Project[] = [
    {
      id: 1,
      name: "ABResh Events Website",
      category: "Web Development",
      imgUrl: "/images/ser4.jpg",
      description: "Scalable online marketplace with advanced product management and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      details: [
        "Implemented microservices architecture",
        "Developed robust payment integration system",
        "Created scalable product management solution",
        "Optimized for high-performance user experience"
      ]
    },
    {
      id: 2,
      name: "Indian sports Foundation",
      category: "Web Development",
      imgUrl: "/images/ser2.jpg",
      description: "Comprehensive property listing platform with advanced search and filtering capabilities",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL"],
      details: [
        "Implemented advanced geolocation-based search",
        "Created interactive property comparison tools",
        "Developed responsive and mobile-friendly design",
        "Integrated machine learning for personalized recommendations"
      ]
    },
    {
      id: 3,
      name: "Used Garments Clothing",
      category: "Mobile Development",
      imgUrl: "/images/ser1.jpg",
      description: "Comprehensive mobile app for patient records, scheduling, and telemedicine",
      technologies: ["Flutter", "Firebase", "GraphQL"],
      details: [
        "Built cross-platform mobile application",
        "Implemented secure patient data management",
        "Integrated real-time communication features",
        "Developed intuitive user interface"
      ]
    },
    {
      id: 4,
      name: "Finance Investment",
      category: "Enterprise Software",
      imgUrl: "/images/ser3.jpg",
      description: "Advanced fitness and nutrition tracking app with AI-powered personalized recommendations",
      technologies: ["React Native", "TensorFlow", "Firebase"],
      details: [
        "Implemented machine learning workout recommendations",
        "Created personalized nutrition tracking",
        "Developed real-time progress monitoring",
        "Integrated wearable device synchronization"
      ]
    },
];

const ProjectCard = React.memo<{ project: Project; onClick: (project: Project) => void }>(({ project, onClick }) => {
  const handleClick = useCallback(() => onClick(project), [project, onClick]);

  return (
    <div 
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-slate-900/40 to-slate-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <div className="h-96">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={project.imgUrl}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 brightness-55 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 " />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="relative z-10 backdrop-blur-md bg-black/40 p-4 rounded-xl transform transition-all duration-300 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-0 transform transition-all duration-300 group-hover:-translate-y-2">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 text-purple-400 h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
              <Globe className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectDetail = React.memo<{ project: Project; onClose: () => void }>(({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 " 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-gradient-to-br from-blue-900/20 to-black rounded-2xl overflow-hidden shadow-2xl border border-blue-900/30" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group"
          type="button"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          <div className="relative h-[600px] overflow-hidden">
            <Image
              src={project.imgUrl}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          <div className="p-8 pt-16 bg-gradient-to-br from-blue-900/10 to-black/50 backdrop-blur-xl">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full mb-4">
                  {project.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">{project.name}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Key Highlights
                </h3>
                <ul className="space-y-2 pl-5">
                  {project.details.map((detail, index) => (
                    <li 
                      key={index} 
                      className="text-gray-300 relative before:absolute before:left-[-20px] before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectDetail.displayName = 'ProjectDetail';

const ProjectPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => [...new Set(projectsData.map(project => project.category))], []);

  const filteredProjects = useMemo(() => 
    selectedCategory 
      ? projectsData.filter(project => project.category === selectedCategory)
      : projectsData,
    [selectedCategory]
  );

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCategorySelect = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900/10 py-8 px-4 mb-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 ">
          <div className="inline-block">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <span className="text-sm text-purple-300 font-medium">
                Our Development
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-2 md:px-0">
            Explore innovative solutions that push the boundaries of technology, 
            delivering transformative digital experiences across web, mobile, and enterprise platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12 ">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${selectedCategory === null 
                ? 'bg-purple-950 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'}
            `}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`
                px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedCategory === category 
                  ? 'bg-purple-950 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 px-6 md:px-0 ">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => 
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default ProjectPortfolio;