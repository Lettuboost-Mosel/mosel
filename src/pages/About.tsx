import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TeamMember } from '@/components/TeamMember';
import { SectionHeader } from '@/components/SectionHeader';


import zulAbout from "../assets/images/zul-about-bgremoved.png";
import shahrilAbout from "../assets/images/shahril-about.png";
import hazimAbout from "../assets/images/hazim-about.png";

const team = [
{
  name: 'Zulhilmi Reduan',
  role: 'Founder & Coordinator',
  bio: "Defines mosel's direction, identity, and core service offerings. He oversees strategic decisions, ensures operational sustainability, and supports Mosel’s growth through funding, tools, and infrastructure. Focuses on building Mosel as a reliable digital partner for businesses.",
  image: zulAbout,
  socials: {
    linkedin: 'https://www.linkedin.com/in/zulhilmi-reduan-015381227/',
    instagram: 'https://www.instagram.com/zulhilmi_3/',
    github: 'https://github.com/zul3'
  }
},
{
  name: 'Shahril',
  role: 'Project Manager & Developer',
  bio: "Leads Mosel’s operations end-to-end, from project planning and client communication to development and conversion strategy, ensuring every project stays on timeline, aligns with business goals, and delivers real value. Focuses on bridging the gap between client needs and technical execution.",
  image: shahrilAbout,
  socials: {
    linkedin: 'https://www.linkedin.com/in/shahril-aimar-faizal-418120224/',
    instagram: 'https://www.instagram.com/shahreal0622/',
    github: 'https://github.com/shahril2206',
    website: 'https://shahrilaimar-portfolio.vercel.app/'
  }
},
{
  name: 'Hazim Danish',
  role: 'Full-Stack Developer',
  bio: "The core technical powerhouse, leading full-stack development across projects, handling system architecture, feature implementation, and security considerations. From building scalable websites to ensuring performance and reliability, turning ideas into robust, production-ready solutions.",
  image: hazimAbout,
  socials: {
    linkedin: 'https://www.linkedin.com/in/hazim-danish-523341287/',
    instagram: 'https://www.instagram.com/hazimdanish00123/',
    github: 'https://github.com/HazimDanish16'
  }
}];


const values = [
{
  icon: Target,
  title: 'Excellence',
  description: 'We strive for excellence in every line of code and pixel we deliver.'
},
{
  icon: Heart,
  title: 'Passion',
  description: 'We pour our hearts into creating digital experiences that matter.'
},
{
  icon: Lightbulb,
  title: 'Innovation',
  description: 'We embrace new technologies and creative solutions to stay ahead.'
},
{
  icon: Users,
  title: 'Collaboration',
  description: 'We believe great work comes from working closely with our clients.'
}];


export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Who We Are */}
        <section className="section-padding pt-12 py-[10px] pb-[48px]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-[30px]">
                A <span className="text-transparent font-bold text-4xl [text-stroke:_2px_#8FD7E5]">Web Studio</span> Built for Real-World Business Needs
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mosel is a web development studio that helps businesses establish a clear
                  and effective online presence.
                </p>
                <p>
                  We work with small businesses, startups, and growing brands that need more
                  than just a website - they need something that represents their business
                  properly, works across devices, and is easy to manage over time.
                </p>
                <p>
                  Our focus is on building practical, performance-focused websites, from
                  simple landing pages to full business sites. We prioritize clarity,
                  usability, and scalability, so your website supports your business goals
                  instead of becoming a burden.
                </p>
                <p>
                  Mosel was started with a simple idea: businesses should not need a large
                  agency to get a reliable, professional website. We keep things lean,
                  transparent, and tailored to what actually matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30 pt-[40px] py-[48px]">
          <div className="container-custom">
            <SectionHeader
              label="Our Values"
              title="What Drives Us"
              description="The principles that guide everything we do at Mosel." />


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) =>
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl border hover-lift opacity-0 animate-fade-in-up bg-[#111317] border-accent shadow"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader
              label="Our Team"
              title="Meet the People Behind Mosel"
              description="A talented group of individuals passionate about creating exceptional digital experiences." />


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) =>
              <TeamMember key={member.name} {...member} index={index} />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thinking About Your Next Landing Page?
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Let’s see if Mosel is the right fit to help you generate more leads and enquiries.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}