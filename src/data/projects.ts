export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Landing' | 'App' | 'UI/UX' | 'Software Systems';
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

import lettuboostThumbnail from "../assets/images/lettuboost-thumbnail.png";
import lettuboostImage1 from "../assets/images/lettuboost-image1.png";
import lettuboostImage2 from "../assets/images/lettuboost-image2.png";
import lettuboostImage3 from "../assets/images/lettuboost-image3.png";
import lettuboostImage4 from "../assets/images/lettuboost-image4.png";
import textgenesImage from "../assets/images/textGenes-image.png";
import textgenesThumbnail from "../assets/images/textGenes-thumbnail.png";



export const projects: Project[] = [
  {
    id: 'eventkamek',
    title: 'EventKamek',
    tagline: 'Event discovery & vendor management platform',
    category: 'Web',
    thumbnail: '',
    description: 'Developed a full web-based platform enabling event discovery and vendor booth management. Features include event creation, vendor slot reservation, organizer dashboards, Google Maps–powered interactive map discovery, calendar integration, and public browsing. Built as a scalable system to support community and campus events. This is the Final Year Project by Shahril Aimar, one of Mosel core team members',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React.js', 'Node.js', 'Google Maps API', 'Tailwind CSS'],
    year: 2025,
    videoUrl: 'https://youtu.be/mx_O5OJqgH8',
    githubUrl: 'https://github.com/shahril2206/EventKamek',
  },
  {
    id: 'saravol',
    title: 'SaraVol',
    tagline: 'Connecting Volunteers and NGOs. Transforming Communities.',
    category: 'Web',
    thumbnail: '',
    description: 'Built a community-focused website for the Digital Kampung program organized by Saperdu. Designed and developed a platform promoting local cultural activities, community involvement, and digital empowerment. Delivered a pitch and won 1st place for clarity, innovation, real-world applicability, and community-driven solution. Developed by Shahril Aimar, one of Mosel core team members.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    year: 2025,
    liveUrl: 'https://saravol.lovable.app',
    githubUrl: 'https://github.com/shahril0622/saravol',
    videoUrl: 'https://youtu.be/etJlSv8rPpA',
  },
  {
    id: 'carlo-rino-uiux',
    title: 'Carlo Rino UPM UI/UX',
    tagline: 'Innovate Carlo Rino UPM UI/UX design challenge',
    category: 'UI/UX',
    thumbnail: '',
    description: 'Designing an innovative UI/UX solution for Carlo Rino. Created a complete Figma prototype focusing on user flow clarity, aesthetics, and brand consistency. Innovation: AI Chatbot, FYP Discovery page, Store Stock Finder. The team Design Mavericks, which 2 of the team members are Shahril and Zulhilmi Won 3rd place for creativity, usability, and design execution.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    year: 2024,
    videoUrl: 'https://youtu.be/xMMR9Ys5Jps?si=XQl5uGnIu-uoYVOf',
  },
  {
    id: 'finpocket',
    title: 'Finpocket',
    tagline: 'Financial literacy for children',
    category: 'Web',
    thumbnail: '',
    description: 'Created Finpocket, a financial literacy tool designed specifically for children, helping them learn basic money management through simple, interactive features. The Built during the National Fintech Codeathon 2022, the project focused on making financial education fun, accessible, and age-appropriate. Our team, Mr. Biceps, which 2 of the team members are Shahril and Zulhilmi, won the Best Teamwork Award for strong collaboration, clear communication, and effective problem-solving under time pressure.',
    problem: '',
    solution: '',
    result: '',
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
    thumbnail: lettuboostThumbnail,
    description: 'Designed and built the Lettuboost website to clearly communicate a sustainable agri‑tech solution that turns invasive water lettuce into selenium‑enriched fish feed. The page distills the problem, highlights benefits like lower feed costs and improved fish growth, and reinforces the circular‑economy story with clean visual hierarchy and focused copy. The result is a credible, competition‑ready digital presence that supports outreach to judges, partners, and the public.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Canva Pro'],
    year: 2025,
    videoUrl: '',
    liveUrl: 'https://lettuboost.com',
    images: [lettuboostImage1,lettuboostImage2,lettuboostImage3, lettuboostImage4]
  },
  {
    id: 'textgenes',
    title: 'TextGenes',
    tagline: 'AI-powered Summarizer',
    category: 'Software Systems',
    thumbnail: textgenesThumbnail,
    description: 'TextGenes is an AI-powered study assistant designed to help students efficiently navigate and understand large volumes of textbook content. The system allows users to upload PDF textbooks and ask questions directly about the content. Using AI-based text processing, TextGenes summarizes lengthy materials into concise, relevant insights and provides direct answers to students’ questions. The project addresses a common problem among students: inefficient study sessions and difficulty identifying key concepts in traditional textbooks. By offering personalized, on-demand explanations, TextGenes improves learning efficiency, reduces cognitive overload, and supports a more focused study experience.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Python', 'OpenAI API', 'LangChain', 'NumPy', 'PyMuPDF', 'Streamlit'],
    year: 2025,
    images: [textgenesImage]
  },
];

export const featuredProjects = projects.slice(0, 3);
