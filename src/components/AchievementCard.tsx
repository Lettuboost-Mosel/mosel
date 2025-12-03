import { Trophy, Award, Medal, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  event: string;
  year: number;
  description: string;
  icon?: LucideIcon;
  index?: number;
}

export function AchievementCard({ 
  title, 
  event, 
  year, 
  description, 
  icon: Icon = Trophy,
  index = 0 
}: AchievementCardProps) {
  return (
    <div
      className={cn(
        "group relative p-8 rounded-2xl bg-card border border-border/50 hover-lift",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:glow">
        <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium mb-4">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-primary font-medium mb-3">{event}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
