import React, { useState } from 'react';
import { Code, Cpu, Palette, Sparkles, Zap, LayoutGrid, BarChart3, Users, Lightbulb, GitBranch, Smartphone, Server } from 'lucide-react';
import SkillBar from './SkillBar';

type SkillCategory = 'frontend' | 'backend' | 'ai' | 'tools';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const technicalSkills = {
    frontend: [
      { name: 'React.js', level: 95, color: 'from-blue-400 to-cyan-400' },
      { name: 'Next.js', level: 92, color: 'from-gray-200 to-gray-400' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', level: 94, color: 'from-cyan-400 to-blue-500' },
      { name: 'Redux', level: 88, color: 'from-purple-500 to-pink-500' },
    ],
    backend: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-400' },
      { name: 'Express', level: 88, color: 'from-gray-300 to-gray-500' },
      { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-400' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-400 to-blue-600' },
      { name: 'RESTful APIs', level: 91, color: 'from-indigo-400 to-purple-500' },
    ],
    ai: [
      { name: 'AI Integration', level: 89, color: 'from-purple-400 to-pink-500' },
      { name: 'OpenAI API', level: 87, color: 'from-purple-300 to-pink-400' },
      { name: 'LangChain', level: 83, color: 'from-yellow-400 to-orange-500' },
      { name: 'Vector DBs', level: 81, color: 'from-emerald-400 to-cyan-500' },
      { name: 'ML Concepts', level: 78, color: 'from-pink-400 to-rose-500' },
    ],
    tools: [
      { name: 'Git', level: 93, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 85, color: 'from-blue-400 to-cyan-500' },
      { name: 'AWS', level: 80, color: 'from-yellow-400 to-orange-500' },
      { name: 'CI/CD', level: 87, color: 'from-green-500 to-emerald-500' },
      { name: 'Jest', level: 89, color: 'from-red-400 to-pink-500' },
    ]
  };

  const softSkills = [
    { name: 'Team Leadership', icon: Users, color: 'text-purple-400' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'text-yellow-400' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-pink-400' },
    { name: 'Agile Development', icon: GitBranch, color: 'text-blue-400' },
    { name: 'Mentoring', icon: Sparkles, color: 'text-cyan-400' },
    { name: 'Project Planning', icon: LayoutGrid, color: 'text-green-400' },
  ];

  const categories: { id: SkillCategory; icon: React.ElementType; label: string }[] = [
    { id: 'frontend', icon: Smartphone, label: 'Frontend' },
    { id: 'backend', icon: Server, label: 'Backend' },
    { id: 'ai', icon: Cpu, label: 'AI/ML' },
    { id: 'tools', icon: Code, label: 'Tools' },
  ];

  return (
    <section id="skills" className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4">
            TECHNICAL MASTERY
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"/>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            A blend of technical prowess and creative problem-solving to deliver exceptional digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                    activeCategory === id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-6">
              {technicalSkills[activeCategory].map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full">
            <div className="flex items-center space-x-3 mb-8">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map(({ name, icon: Icon, color }, index) => (
                <div 
                  key={name}
                  className="group relative p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all duration-300 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm">{name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {['English (Native)', 'Hindi (Fluent)', 'Bengali (Fluent)'].map((lang) => (
                  <span key={lang} className="px-3 py-1.5 text-sm bg-gray-700/50 text-gray-200 rounded-full border border-gray-600/50">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;