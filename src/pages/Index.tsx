import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Trophy, Award, Medal, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { featuredProjects } from '@/data/projects';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Teamwork Award',
    event: 'National Fintech Codeathon 2022',
  },
  {
    icon: Medal,
    title: '3rd Prize',
    event: 'Innovate Carlo Rino UPM UI/UX',
  },
  {
    icon: Award,
    title: '1st Winning Prize',
    event: 'Digital Kampung Website for Community',
  },
];


export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Laptop className="w-4 h-4" />
              Web Development Studio
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="text-gradient">Mosel</span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Websites for more sales
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
              Mosel designs and builds high-converting landing pages for businesses that want real results.
              We focus on clear messaging, conversion-driven UX, and fast performance — so every visitor
              knows what to do next.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Projects Delivered"
            description="Explore our latest work and see how we've helped businesses transform their digital presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            label="Pricing"
            title="Our Website Packages"
            description="Choose the perfect package for your business needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover-lift opacity-0 animate-fade-in-up flex flex-col" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold text-primary mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">RM490</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['1-page responsive website', 'Free domain 1st year', 'Free hosting + SSL', 'WhatsApp button + Google Maps', 'Basic SEO', 'Live in 3–5 days'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Try Free Demo</Link>
              </Button>
            </div>

            {/* Professional Package */}
            <div className="p-8 rounded-2xl bg-card border-2 border-primary hover-lift opacity-0 animate-fade-in-up flex flex-col relative" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">RM1490</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Everything in Starter', 'Up to 5 pages', 'Photo gallery / Menu', 'Click-to-call & WhatsApp', 'Social media links', '1 free revision after launch'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" className="w-full">
                <Link to="/contact">Select Plan</Link>
              </Button>
            </div>

            {/* Business Package */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover-lift opacity-0 animate-fade-in-up flex flex-col" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold text-primary mb-4">Business</h3>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-3xl font-bold">RM2990</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Everything in Professional', 'Blog / News section', 'Booking or simple e-commerce', 'Bilingual toggle (BM + English)', 'Unlimited text edits (1st year)', 'Priority WhatsApp support'].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Select Plan</Link>
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            *50% deposit will be charged upon order confirmation. T&C's Apply.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Recognition"
            title="Our Achievements"
            description="We're proud of our accomplishments and the recognition we've received."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="flex items-start gap-6 p-8 rounded-2xl bg-card border border-border/50 hover-lift opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/achievements">
                View All Achievements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto mb-10">
            Let's collaborate and create something amazing together. 
            Get in touch with us today.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
