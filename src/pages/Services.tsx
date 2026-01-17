import { Link } from 'react-router-dom';
import { ArrowRight, Check, Heart, MessageSquare, Zap, DollarSign, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';

const packages = [
  {
    name: 'Starter',
    price: 'RM490',
    period: '/year',
    description: 'Perfect for small businesses getting started online.',
    features: [
      '1-page responsive website',
      'Free domain 1st year',
      'Free hosting + SSL',
      'WhatsApp button + Google Maps',
      'Basic SEO',
      'Live in 3–5 days',
    ],
    cta: 'Try Free Demo',
    hoverLabel: 'Simple Landing Page',
  },
  {
    name: 'Professional',
    price: 'RM1490',
    period: '/year',
    description: 'Ideal for growing businesses that need more features.',
    features: [
      'Everything in Starter',
      'Up to 5 pages',
      'Photo gallery / Menu',
      'Click-to-call & WhatsApp',
      'Social media links',
      '1 free revision after launch',
    ],
    cta: 'Select Plan',
    hoverLabel: 'Professional Landing Pages',
  },
  {
    name: 'Business',
    price: 'RM2990',
    period: '/year',
    prefix: 'From',
    description: 'For businesses that need advanced functionality.',
    features: [
      'Everything in Professional',
      'Blog / News section',
      'Booking or simple e-commerce',
      'Bilingual toggle (BM + English)',
      'Unlimited text edits (1st year)',
      'Priority WhatsApp support',
    ],
    cta: 'Select Plan',
    hoverLabel: 'Full-Stacked Website',
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
    title: 'Design',
    description: 'We create a design concept tailored to your brand and requirements.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our team brings the designs to life with clean, efficient code.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We deploy your website and provide support to ensure a successful launch.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="pt-12 pb-8">
          <div className="container-custom">
            <SectionHeader
              label="Our Service"
              title="Website Building Packages"
              description="Professional websites tailored to your business needs. Choose the package that fits you best."
            />
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className="p-8 rounded-2xl bg-card flex flex-col relative opacity-0 animate-fade-in-up border border-border/50 transition-all duration-300 hover:border-primary group"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {pkg.hoverLabel}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    {pkg.prefix && <span className="text-sm text-muted-foreground">{pkg.prefix} </span>}
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">{pkg.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              *50% deposit will be charged upon order confirmation. T&C's Apply.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <SectionHeader
              label="How We Work"
              title="Our Process"
              description="A streamlined approach to delivering your website."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="relative p-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
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
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader
              label="Why Mosel"
              title="Why Us?"
              description="We're not just developers – we're partners invested in your success."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: 'Dedicated Attention',
                  description: 'Every project gets our full focus and commitment to excellence.',
                },
                {
                  icon: MessageSquare,
                  title: 'Transparent Communication',
                  description: 'Clear updates and honest conversations throughout the process.',
                },
                {
                  icon: Zap,
                  title: 'Fast Turnaround',
                  description: 'Quick delivery without compromising on quality.',
                },
                {
                  icon: DollarSign,
                  title: 'No Hidden Costs',
                  description: 'Competitive pricing with everything included upfront.',
                },
                {
                  icon: Shield,
                  title: '1 Year Free Support',
                  description: 'Maintenance and support included after launch.',
                },
                {
                  icon: Sparkles,
                  title: 'Modern & Clean',
                  description: 'Contemporary designs that stand out from the crowd.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 opacity-0 animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
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
              Let's discuss your project and find the perfect package for your needs.
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