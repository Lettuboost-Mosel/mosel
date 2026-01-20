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
    description: 'Team Mr. Biceps Recognized for exceptional collaboration and team coordination in developing an innovative fintech solution under time pressure.',
    icon: Trophy,
  },
  {
    title: '3rd Prize - UI/UX Design',
    event: 'Innovate Carlo Rino UPM UI/UX 2024',
    year: 2024,
    description: 'Team Design Mavericks Awarded for outstanding UI/UX design in the Carlo Rino innovation challenge at Universiti Putra Malaysia.',
    icon: Medal,
  },
  {
    title: '1st Winning Prize',
    event: 'Digital Kampung Website for Community',
    year: 2025,
    description: 'One of our team member won the first place for designing and developing an impactful community website that connects and empowers volunteers and NGOs.',
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding py-12">
          <div className="container-custom">
            <SectionHeader
              label="Recognition"
              title="Our Achievements"
              description="Awards and achievements accomplished by our team members!"
              className="mb-0 md:mb-0"
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

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Work. Real Results.
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Let’s do the same for you!
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
