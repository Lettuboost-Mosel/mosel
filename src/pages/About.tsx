import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TeamMember } from '@/components/TeamMember';
import { SectionHeader } from '@/components/SectionHeader';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with a passion for creating elegant solutions to complex problems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on crafting beautiful, user-centered digital experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'David Park',
    role: 'Backend Developer',
    bio: 'Systems architect specializing in scalable backend solutions and database optimization.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every line of code and pixel we deliver.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into creating digital experiences that matter.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe great work comes from working closely with our clients.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding pt-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                We Build Digital <span className="text-gradient">Experiences</span>
              </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Mosel is a web development studio dedicated to transforming ideas into 
              beautiful, functional digital solutions. We combine creativity with 
              technical expertise to help you sell more.
            </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                <span className="text-primary font-medium mb-4 block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Passion Project to Professional Studio
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mosel was born from a simple belief: that every business deserves 
                    a digital presence that truly represents their vision. What started 
                    as a passion project has evolved into a full-fledged web development 
                    studio.
                  </p>
                  <p>
                    Our journey began in 2022, when our founding team came together with 
                    a shared vision of creating exceptional web experiences. Since then, 
                    we've had the privilege of working with diverse clients, from startups 
                    to established businesses.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible in web 
                    development, always staying true to our core values of excellence, 
                    innovation, and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-card border border-border/50 shadow-xl max-w-xs">
                  <div className="text-4xl font-bold text-primary mb-1">2+</div>
                  <div className="text-muted-foreground">Years helping businesses sell more</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader
              label="Our Values"
              title="What Drives Us"
              description="The principles that guide everything we do at Mosel."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl bg-card border border-border/50 hover-lift opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <SectionHeader
              label="Our Team"
              title="Meet the People Behind Mosel"
              description="A talented group of individuals passionate about creating exceptional digital experiences."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <TeamMember key={member.name} {...member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              We're always excited to collaborate on new projects. Let's create something amazing together.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get in Touch
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
