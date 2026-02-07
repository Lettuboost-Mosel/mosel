import { Linkedin, Github, Instagram, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
  index?: number;
}

export function TeamMember({ name, role, bio, image, socials, index = 0 }: TeamMemberProps) {
  return (
    <div
      className={cn(
        "group text-center opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
      </div>

      {/* Info */}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary font-medium mb-3">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs mx-auto">
        {bio}
      </p>

      {/* Socials */}
      {socials && (
        <div className="flex justify-center gap-3">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label={`${name}'s GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
