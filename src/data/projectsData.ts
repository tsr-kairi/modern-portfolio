export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  role: string;
  impact: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'Developed a full-stack e-commerce solution with personalized AI recommendations, real-time chat support, and seamless checkout process. Integrated with payment gateways and inventory management.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/ai-ecommerce',
    role: 'Lead Full-Stack Developer',
    impact: [
      'Increased conversion rates by 35% through AI-powered recommendations',
      'Reduced server response time by 40% with optimized database queries',
      'Improved user engagement by 60% with real-time chat support'
    ],
    featured: true
  },
  {
    title: 'Enterprise Analytics Dashboard',
    description: 'Built a comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features. Integrated with multiple data sources for unified business intelligence.',
    tech: ['React', 'D3.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/analytics-dashboard',
    role: 'Frontend Lead',
    impact: [
      'Delivered 50+ interactive data visualizations',
      'Improved dashboard load time by 65% with code splitting',
      'Enabled data-driven decisions with custom reporting tools'
    ],
    featured: true
  },
  {
    title: 'Social Media Management Suite',
    description: 'Created a multi-platform social media management tool with AI-powered content generation, scheduling, and performance analytics.',
    tech: ['Next.js', 'TypeScript', 'NestJS', 'MongoDB', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/social-suite',
    role: 'Full Stack Developer',
    impact: [
      'Reduced content creation time by 70% with AI assistance',
      'Grew to 5,000+ active users in first 3 months',
      'Achieved 99.9% uptime with scalable architecture'
    ],
    featured: true
  },
  {
    title: 'Real Estate Marketplace',
    description: 'Developed a property listing platform with virtual tours, AI-powered property matching, and secure document handling for real estate transactions.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/real-estate-platform',
    role: 'Full Stack Developer',
    impact: [
      'Increased agent productivity by 40% with automated workflows',
      'Reduced property search time by 60% with AI matching',
      'Processed $5M+ in transactions in first year'
    ]
  },
  {
    title: 'E-Learning Platform',
    description: 'Built a scalable learning management system with course creation tools, progress tracking, and AI-powered recommendations.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/elearning-platform',
    role: 'Backend Developer',
    impact: [
      'Supported 10,000+ concurrent users with optimized queries',
      'Improved course completion rates by 45% with personalized learning paths',
      'Reduced server costs by 30% with efficient caching'
    ]
  },
  {
    title: 'Healthcare Management System',
    description: 'Developed a patient management system with appointment scheduling, medical records, and AI-powered symptom checking.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    github: 'https://github.com/yourusername/healthcare-system',
    role: 'Full Stack Developer',
    impact: [
      'Reduced patient wait times by 50% with online scheduling',
      'Improved diagnosis accuracy with AI-assisted symptom checking',
      'Achieved HIPAA compliance for all data handling'
    ]
  }
];