export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Landing' | 'App' | 'UI/UX';
  thumbnail: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  year: number;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  videoUrl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'eventkamek',
    title: 'EventKamek',
    tagline: 'Event discovery & vendor management platform',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'A full web-based platform enabling event discovery and vendor booth management with interactive map features.',
    problem: 'Communities and campuses needed a centralized platform for event discovery and vendor coordination.',
    solution: 'Built a scalable system with event creation, vendor slot reservation, organizer dashboards, Google Maps-powered interactive map discovery, and calendar integration.',
    result: 'A comprehensive platform supporting community and campus events with seamless vendor management.',
    technologies: ['React.js', 'Node.js', 'Google Maps API'],
    year: 2024,
    videoUrl: 'https://youtu.be/mx_O5OJqgH8',
    githubUrl: 'https://github.com/shahril2206/EventKamek',
  },
  {
    id: 'saravol',
    title: 'SaraVol',
    tagline: 'Digital Kampung community platform',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    description: 'A community-focused website for the Digital Kampung program promoting local cultural activities and digital empowerment.',
    problem: 'Saperdu needed a platform to promote local cultural activities and community involvement for their Digital Kampung program.',
    solution: 'Designed and developed a platform promoting local cultural activities, community involvement, and digital empowerment with clear innovation and real-world applicability.',
    result: 'Won 1st place in the Digital Kampung Website for Community competition for clarity, innovation, and community-driven solution.',
    technologies: ['React', 'Lovable', 'Tailwind CSS'],
    year: 2024,
    liveUrl: 'https://www.saravol.lovable.app',
    githubUrl: 'https://github.com/shahril0622/saravol',
    videoUrl: 'https://youtu.be/etJlSv8rPpA',
  },
  {
    id: 'sarapulse',
    title: 'SaraPulse',
    tagline: 'Coming soon',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Project details to be announced.',
    problem: 'To be stated.',
    solution: 'To be stated.',
    result: 'To be stated.',
    technologies: ['React', 'TypeScript'],
    year: 2024,
  },
  {
    id: 'carlo-rino-uiux',
    title: 'Carlo Rino UI/UX',
    tagline: 'Innovate Carlo Rino UPM design challenge',
    category: 'UI/UX',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: 'An innovative UI/UX solution for Carlo Rino featuring AI Chatbot, FYP Discovery page, and Store Stock Finder.',
    problem: 'Carlo Rino needed an innovative digital experience to enhance customer engagement and shopping experience.',
    solution: 'Created a complete Figma prototype focusing on user flow clarity, aesthetics, and brand consistency with innovative features like AI Chatbot, FYP Discovery page, and Store Stock Finder.',
    result: 'Won 3rd place in Design Maverick Innovate Carlo Rino UPM for creativity, usability, and design execution.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    year: 2024,
    videoUrl: 'https://youtu.be/xMMR9Ys5Jps?si=XQl5uGnIu-uoYVOf',
  },
  {
    id: 'finpocket',
    title: 'Finpocket',
    tagline: 'Financial literacy for children',
    category: 'App',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    description: 'A financial literacy tool designed for children, helping them learn basic money management through interactive features.',
    problem: 'Children needed an accessible and fun way to learn basic money management and financial literacy.',
    solution: 'Created Finpocket with simple, interactive features focused on making financial education fun, accessible, and age-appropriate.',
    result: 'Team Mr. Biceps won the Best Teamwork Award at National Fintech Codeathon 2022 for strong collaboration and effective problem-solving.',
    technologies: ['React', 'Node.js', 'Firebase'],
    year: 2022,
    videoUrl: 'https://youtu.be/CvZNXFlvzko',
    githubUrl: 'https://github.com/shahril2206/finpocket',
  },
  {
    id: 'lettuboost',
    title: 'Lettuboost',
    tagline: 'Sustainability innovation website',
    category: 'Landing',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    description: 'A professional website communicating a complex sustainability concept for competition exposure.',
    problem: 'Lettuboost needed a professional online presence to communicate a complex sustainability concept clearly to judges, partners, and the public.',
    solution: 'Designed and developed a minimal, content-focused website that simplifies the project narrative, highlights innovation, and strengthens credibility.',
    result: 'A clear and professional digital presence supporting outreach, storytelling, and competition exposure.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    year: 2024,
    liveUrl: 'https://lettuboost.com',
  },
  {
    id: 'textgenes',
    title: 'TextGenes',
    tagline: 'Coming soon',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    description: 'Project details to be announced.',
    problem: 'To be stated.',
    solution: 'To be stated.',
    result: 'To be stated.',
    technologies: ['React', 'TypeScript'],
    year: 2024,
  },
];

export const featuredProjects = projects.slice(0, 3);
