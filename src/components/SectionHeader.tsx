import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-6 md:mb-8",
        align === 'center' && "mx-auto text-center",
        className
      )}>

      {label &&
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {label}
        </span>
      }
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 mt-[5px]">
        {title}
      </h2>
      {description



      }
    </div>);

}