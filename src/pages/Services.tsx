import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layout, Code2, Palette, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeader } from '@/components/SectionHeader';

const services = [
  {
    title: 'Landing Page Development',
    description: 'High-converting landing pages designed to capture attention and drive action.',
    icon: Layout,
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive layouts',
      'SEO optimization',
      'Fast loading speeds',
    ],
  },
  {
    title: 'Business Website Development',
    description: 'Professional websites that establish your online presence and build credibility.',
    icon: Globe,
    features: [
      'Multi-page website structure',
      'Content management system',
      'Contact forms & integrations',
      'Analytics setup',
    ],
  },
  {
    title: 'Full-stack Web Development',
    description: 'Complete web applications with robust backend systems and modern frontends.',
    icon: Code2,
    features: [
      'Custom web applications',
      'Database design & management',
      'API development',
      'User authentication',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    icon: Palette,
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design',
      'Usability testing',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience to understand your needs.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We create a detailed roadmap and design concepts tailored to your requirements.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our team brings the designs to life with clean, efficient code and regular updates.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We deploy your project and provide support to ensure a successful launch.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding pt-12">
          <div className="container-custom">
            <SectionHeader
              label="Our Services"
              title="What We Offer"
              description="From stunning landing pages to full-stack applications, we provide comprehensive web development solutions tailored to your needs."
            />
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon - Branding */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Branding Services</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're expanding our offerings to include comprehensive branding services. 
                Build a cohesive brand identity that resonates with your audience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader
              label="How We Work"
              title="Our Process"
              description="A streamlined approach to delivering exceptional results."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="relative p-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                  )}
                  
                  <span className="text-5xl font-bold text-primary/20 mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-medium mb-4 block">Why Acrion</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're not just developers – we're partners invested in your success. 
                  Here's what sets us apart.
                </p>

                <div className="space-y-4">
                  {[
                    'Dedicated attention to every project',
                    'Transparent communication throughout',
                    'Modern technologies and best practices',
                    'Competitive pricing with no hidden costs',
                    'Ongoing support after launch',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                    alt="Development workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Request a Quote
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
