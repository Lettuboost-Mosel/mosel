import { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@mosel.dev',
    href: 'mailto:hello@mosel.dev',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+60 14-622 8473',
    href: 'https://wa.me/60146228473',
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding py-12">
          <div className="container-custom">
            <SectionHeader
              label="Get in Touch"
              title="Let's Start a Conversation"
              description="Have a website in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              className="mb-0 md:mb-0"
            />
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="bg-muted/30 rounded-2xl p-8 lg:p-10">
                  <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6 mb-10">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <SectionHeader
              label="FAQ"
              title="Common Questions"
              description="Answers to questions we often receive."
            />

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'What is your typical project timeline?',
                  a: 'Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, while a full web application can take 4-8 weeks or more.',
                },
                {
                  q: 'Do you offer ongoing maintenance?',
                  a: 'Yes, we offer 1 year free maintenance to keep your website updated, secure, and performing optimally after launch.',
                },
                {
                  q: 'What technologies do you work with?',
                  a: 'We primarily work with React, Next.js, TypeScript, Node.js, and various modern frameworks. We choose the best stack for each project.',
                },
                {
                  q: 'How do we get started?',
                  a: 'Simply fill out the contact form or reach out via email. We\'ll schedule a call to discuss your project and provide a quote.',
                },
              ].map((faq, index) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl bg-card border border-border/50 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
