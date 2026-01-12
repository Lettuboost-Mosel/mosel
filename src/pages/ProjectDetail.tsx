import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Figma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/projects" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <section className="container-custom px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                {project.category}
              </Badge>
              <span className="text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {project.liveUrl && (
                <Button asChild variant="hero">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.figmaUrl && (
                <Button asChild variant="outline">
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Figma className="w-4 h-4" />
                    Figma
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Video Demo */}
        {project.videoUrl && (
          <section className="container-custom px-4 sm:px-6 lg:px-8 pb-16">
            <div className="rounded-2xl overflow-hidden border border-border/50 animate-fade-in-up">
              <iframe
                src={project.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/').split('?')[0]}
                title={`${project.title} Demo`}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <section className="container-custom px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={`${project.id}-image-${index}`}
                  className="rounded-2xl overflow-hidden border border-border/50 bg-muted"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
              Let's discuss how we can create something amazing for your business.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
