import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 6;

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Movie Website',
    tags: ['REACT', 'TAILWIND', 'API'],
    emoji: '🎬',
    description: 'A high-performance movie database application with real-time search, category filtering, and detailed media pages using TMDB API.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'Sales Analysis Dashboard',
    tags: ['PYTHON', 'PANDAS', 'D3.JS'],
    emoji: '📊',
    description: 'Comprehensive data visualization platform for sales metrics, including regional performance charts and predictive analytics components.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Authentication System',
    tags: ['NODE.JS', 'EXPRESS', 'JWT'],
    emoji: '🔐',
    description: 'Secure user management system featuring JWT-based auth, OAuth integration, and comprehensive account management features.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Weather App',
    tags: ['REACT NATIVE', 'OPENWEATHER', 'UI/UX'],
    emoji: '⛅',
    description: 'Minimalist weather forecasting app with geolocation support, dynamic backgrounds based on weather, and 7-day detailed forecasts.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    tags: ['NEXT.JS', 'STRIPE', 'MONGODB'],
    emoji: '🛒',
    description: 'Full-featured online store with product management, cart system, Stripe payment integration, and an admin dashboard for order tracking.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 6,
    title: 'Chat Application',
    tags: ['SOCKET.IO', 'REACT', 'NODE.JS'],
    emoji: '💬',
    description: 'Real-time messaging app with private and group chats, typing indicators, online presence detection, and message history.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 7,
    title: 'Task Manager',
    tags: ['REACT', 'REDUX', 'FIREBASE'],
    emoji: '✅',
    description: 'Productivity app with drag-and-drop kanban boards, deadline reminders, team collaboration features, and cloud sync via Firebase.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 8,
    title: 'AI Image Generator',
    tags: ['PYTHON', 'OPENAI', 'FLASK'],
    emoji: '🎨',
    description: 'Web app that generates unique images from text prompts using the DALL-E API, with a gallery, download support, and prompt history.',
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 9,
    title: 'Portfolio CMS',
    tags: ['NEXT.JS', 'SANITY', 'TAILWIND'],
    emoji: '🗂️',
    description: 'Headless CMS-powered portfolio template where all content is managed through Sanity Studio — no code changes needed for updates.',
    githubUrl: '#',
    demoUrl: '#',
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: '24px', marginBottom: '52px',
        }}>
          <div>
            <p style={{
              color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
              letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '14px',
            }}>
              My Portfolio
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
              color: 'var(--c-text)', lineHeight: '1.2',
            }}>
              Building digital products<br />with passion &amp; precision
            </h2>
          </div>
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {visible.map((project) => (
            <div key={project.id} style={{
              background: 'var(--c-card)', border: '1px solid var(--c-border)',
              borderRadius: '16px', overflow: 'hidden',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-border-hover)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '100%', height: '180px',
                background: 'linear-gradient(135deg, #1a1a2e, #0f0f1a)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '56px',
              }}>
                {project.emoji}
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px', fontWeight: '700',
                      color: 'var(--c-accent)', letterSpacing: '1px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: '700', color: 'var(--c-text)', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--c-text-2)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <a href={project.demoUrl} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', fontWeight: '700', color: 'var(--c-text)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text)')}
                  >
                    Live Preview <ExternalLink size={13} />
                  </a>
                  <a href={project.githubUrl} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', fontWeight: '500', color: 'var(--c-text-2)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
                  >
                    Source Code <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                background: 'var(--c-card)', border: '1px solid var(--c-border)',
                color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
                cursor: 'pointer', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-border-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {showAll ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> View All Projects ({projects.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
