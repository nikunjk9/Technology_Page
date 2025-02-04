import React, { useMemo } from 'react';
import { Code2, ArrowRight, Laptop2, Share2 } from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' }
];

// Categories
const categories = ['Web Development', 'App Development ', 'Software Development', 'UI/UX Design', 'Digital Marketing Solutions'];

const CategoryItem = React.memo(({ name }: { name: string }) => (
  <div className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-300 group">
    <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
    <span className="text-sm font-medium">{name}</span>
  </div>
));
CategoryItem.displayName = 'CategoryItem';

const StatItem = React.memo(({ value, label }: { value: string; label: string }) => (
  <div className="text-center lg:text-left">
    <p className="text-2xl lg:text-4xl font-bold text-white mb-1">{value}</p>
    <p className="text-indigo-200 text-sm">{label}</p>
  </div>
));
StatItem.displayName = 'StatItem';

const ServiceCard = React.memo(({ 
  item,
  size = 'small'
}: { 
  item: ServiceItem;
  size?: 'small' | 'large';
}) => {
  const sizeClasses = useMemo(() => 
    size === 'large' ? 'p-6 lg:p-8 text-xl lg:text-2xl' : 'p-4 lg:p-6 text-lg lg:text-xl',
    [size]
  );
  
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer">
      <Image
        src={item.image}
        alt={item.name}
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
      
      <div className={`
        absolute inset-x-0 bottom-0 ${sizeClasses}
        flex flex-col transform translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-out
      `}>
        <span className="inline-block text-indigo-300 text-sm font-medium mb-2 
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500
          opacity-0 group-hover:opacity-100">
          {item.category}
        </span>
        
        <h3 className="text-white font-bold mb-2
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75
          opacity-0 group-hover:opacity-100 line-clamp-2">
          {item.name}
        </h3>

        <p className="text-white/70 text-sm mb-1
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75
          opacity-0 group-hover:opacity-100">
          {item.title}
        </p>
        
        <p className={`text-white/90 ${size === 'large' ? 'text-base lg:text-lg' : 'text-sm'} mb-4
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100
          opacity-0 group-hover:opacity-100 line-clamp-2`}>
          {item.description}
        </p>

        <button 
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
            transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150
            opacity-0 group-hover:opacity-100 w-full
            bg-purple-500/20 hover:bg-purple-700/20 text-white`}
        >
          <span className="whitespace-nowrap">Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      </div>
  );
});
ServiceCard.displayName = 'ServiceCard';

const ActionButton = React.memo(({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <button className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 
    text-white rounded-lg transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98]">
    <Icon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
    <span className="font-medium">{children}</span>
  </button>
));
ActionButton.displayName = 'ActionButton';

const services: ServiceItem[] = [
  {
    id: 1,
    name: "UI/UX & Product Design",
    title: "Website & app design | Branding & digital experiences",
    image: "/images/ser10.jpg",
    description: "User-centered design that creates lasting impressions",
    category: "Design"
  },
  {
    id: 2,
    name: "App Development",
    title: "E-commerce | Enterprise | Hybrid Application",
    image: "/images/ser2.jpg",
    description: "Native and cross-platform mobile applications",
    category: "Mobile"
  },
  {
    id: 3,
    name: "Website Development",
    title: "E-commerce | Business & Corporate Websites",
    image: "/images/ser1.jpg",
    description: "Custom web solutions that drive engagement and conversions",
    category: "Web"
  },
  {
    id: 4,
    name: "Software Development",
    title: "Enterprise software solutions | API development & integration",
    image: "/images/ser7.jpg",
    description: "Scalable software solutions for modern businesses",
    category: "Enterprise"
  },
  {
    id: 5,
    name: "Digital Marketing Solutions",
    title: "SEO & digital marketing strategy | CRM & marketing automation",
    image: "/images/ser6.jpg",
    description: "Data-driven marketing strategies that deliver results",
    category: "Marketing"
  }
];

const TechnologyServices = () => {
  return (
    <section className="relative bg-purple-950 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <span className="inline-block text-base font-semibold text-purple-300 mb-2 lg:mb-4 tracking-wider 
                transform hover:translate-x-2 transition-transform cursor-default">
                OUR SERVICES
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-[98px] font-bold text-white leading-tight">
                Digital
                <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                We deliver cutting-edge technology solutions that transform businesses 
                and create exceptional digital experiences. Our expertise spans across 
                web, mobile, and enterprise applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <CategoryItem key={category} name={category} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <ActionButton icon={Laptop2}>View Our Portfolio</ActionButton>
              <ActionButton icon={Share2}>Start Your Project</ActionButton>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4">
            <ServiceCard item={services[0]} />
            <ServiceCard item={services[1]} />
          </div>
          <div className="md:col-span-6">
            <ServiceCard item={services[2]} size="large" />
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4">
            <ServiceCard item={services[3]} />
            <ServiceCard item={services[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;