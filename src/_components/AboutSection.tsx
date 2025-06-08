import React from 'react';
import { Code, Trophy, Zap, Briefcase, Code2, Cpu, LayoutDashboard, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, value: '100K+', label: 'Lines of Code Written' },
    { icon: Trophy, value: '50+', label: 'Projects Completed' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Briefcase, value: '4.5+', label: 'Years Experience' }
  ];

  const techStack = [
    { icon: Code2, name: 'React/Next.js' },
    { icon: Cpu, name: 'AI/ML Integration' },
    { icon: LayoutDashboard, name: 'UI/UX Design' },
    { icon: Sparkles, name: 'Modern Web' }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4">
            PROFESSIONAL OVERVIEW
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Crafting Digital <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"/>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-white font-semibold">Senior Frontend Developer</span> with a passion for building 
                intuitive, high-performance web applications. With expertise in modern JavaScript frameworks and AI integration, 
                I transform complex requirements into elegant, user-centric solutions.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Currently leading frontend development at <span className="text-white font-medium">NexG Tech</span>, I specialize in 
                architecting scalable applications that deliver exceptional user experiences while maintaining clean, 
                maintainable code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
                  Technical Expertise
                </h3>
                
                <div className="space-y-5">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-800/80 transition-colors duration-300">
                      <div className="p-2 bg-gray-700 rounded-lg mr-4">
                        <tech.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{tech.name}</span>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Available for new opportunities</span>
                    <div className="flex items-center">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      <span className="text-green-400 font-medium">Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:duration-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;