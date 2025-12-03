import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Medal, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AchievementCard } from '@/components/AchievementCard';
import { SectionHeader } from '@/components/SectionHeader';

const achievements = [
  {
    title: 'Best Teamwork Award',
    event: 'National Fintech Codeathon 2022',
    year: 2022,
    description: 'Recognized for exceptional collaboration and team coordination in developing an innovative fintech solution under time pressure.',
    icon: Trophy,
  },
  {
    title: '3rd Prize - UI/UX Design',
    event: 'Innovate Carlo Rino UPM',
    year: 2022,
    description: 'Awarded for outstanding user interface and experience design in the Carlo Rino innovation challenge at Universiti Putra Malaysia.',
    icon: Medal,
  },
];

const milestones = [
  { year: '2022', title: 'Studio Founded', description: 'Acrion was established with a vision to create exceptional digital experiences.' },
  { year: '2022', title: 'First Awards', description: 'Won Best Teamwork at National Fintech Codeathon and 3rd Prize at Innovate Carlo Rino.' },
  { year: '2023', title: 'Growing Portfolio', description: 'Expanded our services and delivered multiple successful projects.' },
  { year: '2024', title: 'Continued Growth', description: 'Continuing to push boundaries and deliver exceptional work for our clients.' },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding pt-12">
          <div className="container-custom">
            <SectionHeader
              label="Recognition"
              title="Our Achievements"
              description="We're proud of the recognition we've received for our work and dedication to excellence."
            />
          </div>
        </section>

        {/* Achievement Cards */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement.title} {...achievement} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <SectionHeader
              label="Our Journey"
              title="Key Milestones"
              description="A timeline of our growth and achievements over the years."
            />

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year + milestone.title}
                  className="relative pl-8 pb-12 last:pb-0 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <span className="text-primary font-semibold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Trophy, value: '2', label: 'Awards Won' },
                { icon: Star, value: '7+', label: 'Projects Completed' },
                { icon: Award, value: '100%', label: 'Client Satisfaction' },
                { icon: Medal, value: '2+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-card border border-border/50 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Create Something Award-Worthy
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Partner with us and experience the same dedication that earned us these achievements.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
