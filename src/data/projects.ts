export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Landing' | 'App';
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
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    tagline: 'Real-time financial analytics platform',
    category: 'App',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'A comprehensive financial analytics dashboard for tracking investments, expenses, and market trends in real-time.',
    problem: 'Financial institutions needed a unified platform to visualize complex data across multiple accounts and markets.',
    solution: 'We built a responsive dashboard with real-time data streaming, interactive charts, and customizable widgets.',
    result: 'Reduced data analysis time by 60% and improved decision-making accuracy for over 500 active users.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
    year: 2024,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce',
    tagline: 'Next-gen shopping experience',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    description: 'A fully-featured e-commerce platform with AI-powered recommendations and seamless checkout.',
    problem: 'Traditional e-commerce sites were losing customers due to poor user experience and slow performance.',
    solution: 'Created a blazing-fast platform with personalized recommendations and one-click checkout.',
    result: 'Increased conversion rates by 45% and reduced cart abandonment by 30%.',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma', 'Redis'],
    year: 2024,
    liveUrl: 'https://example.com',
  },
  {
    id: 'health-app',
    title: 'HealthSync',
    tagline: 'Personal wellness companion',
    category: 'App',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    description: 'A health and wellness application that tracks fitness goals, nutrition, and mental well-being.',
    problem: 'Users struggled to maintain consistent health habits without proper tracking and motivation.',
    solution: 'Developed an intuitive app with gamification, social features, and AI-powered insights.',
    result: 'Over 10,000 downloads in the first month with 4.8-star average rating.',
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'Node.js'],
    year: 2023,
    liveUrl: 'https://example.com',
    figmaUrl: 'https://figma.com',
  },
  {
    id: 'startup-landing',
    title: 'TechLaunch',
    tagline: 'Startup landing page that converts',
    category: 'Landing',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'High-converting landing page for a tech startup, featuring animated sections and lead capture.',
    problem: 'The startup was struggling to communicate their value proposition effectively.',
    solution: 'Designed a visually stunning landing page with clear messaging and strategic CTAs.',
    result: 'Achieved 12% conversion rate and reduced bounce rate by 40%.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    year: 2023,
    liveUrl: 'https://example.com',
  },
  {
    id: 'portfolio-cms',
    title: 'ArtistHub',
    tagline: 'Creative portfolio platform',
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    description: 'A portfolio management system for artists and designers with built-in CMS capabilities.',
    problem: 'Artists needed an easy way to showcase their work without technical knowledge.',
    solution: 'Built a drag-and-drop portfolio builder with customizable templates and analytics.',
    result: 'Empowered 2,000+ creatives to build their online presence.',
    technologies: ['Vue.js', 'Supabase', 'Cloudinary', 'Stripe'],
    year: 2023,
    githubUrl: 'https://github.com',
  },
  {
    id: 'saas-dashboard',
    title: 'CloudMetrics',
    tagline: 'SaaS analytics made simple',
    category: 'App',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'A comprehensive SaaS metrics dashboard for tracking MRR, churn, and customer lifetime value.',
    problem: 'SaaS founders needed better visibility into their business metrics.',
    solution: 'Created an automated dashboard that integrates with popular payment providers.',
    result: 'Helped 150+ SaaS companies optimize their growth strategies.',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
    year: 2022,
    liveUrl: 'https://example.com',
  },
  {
    id: 'restaurant-website',
    title: 'Saveur Bistro',
    tagline: 'Fine dining digital presence',
    category: 'Landing',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'An elegant website for a fine dining restaurant with online reservations and menu showcase.',
    problem: 'The restaurant needed to attract a younger demographic while maintaining their premium brand.',
    solution: 'Designed a sophisticated website with immersive visuals and seamless booking system.',
    result: 'Online reservations increased by 200% within three months.',
    technologies: ['Gatsby', 'Sanity CMS', 'Tailwind CSS', 'OpenTable API'],
    year: 2022,
    liveUrl: 'https://example.com',
    figmaUrl: 'https://figma.com',
  },
];

export const featuredProjects = projects.slice(0, 3);
