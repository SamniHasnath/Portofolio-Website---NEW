import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, LayoutGrid, Layers, Globe, Database, BarChart2, FolderOpen } from 'lucide-react';

const INITIAL_COUNT = 6;

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const CATEGORIES = [
  { label: 'All',            icon: LayoutGrid  },
  { label: 'Full Stack',     icon: Layers      },
  { label: 'API / Frontend', icon: Globe       },
  { label: 'Backend / DB',   icon: Database    },
  { label: 'Data Science',   icon: BarChart2   },
  { label: 'Other',          icon: FolderOpen  },
];

const projects = [
  {
    id: 1,
    title: 'Expense Tracker',
    category: 'Full Stack',
    type: 'Personal',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'POSTGRESQL'],
    emoji: '💸',
    description: 'Full stack expense management app with category tracking, monthly summaries, and a clean dashboard built on a PERN stack.',
    githubUrl: 'https://github.com/SamniHasnath/expense-tracker',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'Travel Tracker',
    category: 'Full Stack',
    type: 'Personal',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'POSTGRESQL'],
    emoji: '✈️',
    description: 'Interactive travel log where users can mark visited countries, add trip notes, and visualize their journey on a world map.',
    githubUrl: 'https://github.com/SamniHasnath/travel-tracker',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Book Notes App',
    category: 'Full Stack',
    type: 'Personal',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'POSTGRESQL'],
    emoji: '📚',
    description: 'Personal reading journal app that lets users log books, write notes, and rate reads — with cover images fetched from the Open Library API.',
    githubUrl: 'https://github.com/SamniHasnath/book-notes-app',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Elder Management System',
    category: 'Full Stack',
    type: 'Personal',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'POSTGRESQL'],
    emoji: '🏥',
    description: 'Care management platform for tracking elderly residents, health records, and caregiver assignments with a full CRUD backend.',
    githubUrl: 'https://github.com/SamniHasnath/elder-management-system',
    demoUrl: '#',
  },
  {
    id: 5,
    title: 'Authentication System',
    category: 'Full Stack',
    type: 'Personal',
    tags: ['NODE.JS', 'EXPRESS', 'JWT', 'POSTGRESQL'],
    emoji: '🔐',
    description: 'Secure user auth system with JWT-based login, registration, protected routes, and session management built from scratch.',
    githubUrl: 'https://github.com/SamniHasnath/authentication-system',
    demoUrl: '#',
  },
  {
    id: 6,
    title: 'Movie Website',
    category: 'API / Frontend',
    type: 'Personal',
    tags: ['REACT', 'TAILWIND', 'TMDB API'],
    emoji: '🎬',
    description: 'Movie database app with real-time search, category filtering, and detailed media pages powered by the TMDB API.',
    githubUrl: 'https://github.com/SamniHasnath/movie-website',
    demoUrl: '#',
  },
  {
    id: 7,
    title: 'Weather App',
    category: 'API / Frontend',
    type: 'Personal',
    tags: ['REACT', 'OPENWEATHER API', 'CSS'],
    emoji: '⛅',
    description: 'Clean weather forecasting app with city search, current conditions, and a dynamic UI that adapts to weather data.',
    githubUrl: 'https://github.com/SamniHasnath/weather-app',
    demoUrl: '#',
  },
  {
    id: 8,
    title: 'Joke Personalizer App',
    category: 'API / Frontend',
    type: 'Personal',
    tags: ['JAVASCRIPT', 'REST API', 'HTML/CSS'],
    emoji: '😄',
    description: 'Fun app that fetches and personalizes jokes using an external joke API, with category selection and display controls.',
    githubUrl: 'https://github.com/SamniHasnath/joke-personalizer-app',
    demoUrl: '#',
  },
  {
    id: 9,
    title: 'QR Code Generator',
    category: 'API / Frontend',
    type: 'Personal',
    tags: ['NODE.JS', 'EXPRESS', 'QR API'],
    emoji: '📱',
    description: 'Web tool that generates downloadable QR codes from any URL or text input using a QR code generation API.',
    githubUrl: 'https://github.com/SamniHasnath/qr-code-generator',
    demoUrl: '#',
  },
  {
    id: 15,
    title: 'Sales Analysis Dashboard',
    category: 'Data Science',
    type: 'Personal',
    tags: ['PYTHON', 'PANDAS', 'MATPLOTLIB'],
    emoji: '📊',
    description: 'Data analysis project that processes sales datasets, generates visual insights on revenue trends, and produces region-wise performance reports.',
    githubUrl: 'https://github.com/SamniHasnath/sales-analysis-dashboard',
    demoUrl: '#',
  },
  {
    id: 16,
    title: 'Data Visualization Project',
    category: 'Data Science',
    type: 'Personal',
    tags: ['PYTHON', 'SEABORN', 'NUMPY'],
    emoji: '📈',
    description: 'Exploratory data analysis using real-world datasets — includes correlation heatmaps, distribution plots, and statistical summaries.',
    githubUrl: 'https://github.com/SamniHasnath/data-visualization',
    demoUrl: '#',
  },
  {
    id: 10,
    title: 'Quiz App',
    category: 'Backend / DB',
    type: 'Personal',
    tags: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'EJS'],
    emoji: '🧠',
    description: 'Interactive quiz application with question banks stored in PostgreSQL, score tracking, and a server-rendered frontend.',
    githubUrl: 'https://github.com/SamniHasnath/quiz-app',
    demoUrl: '#',
  },
  {
    id: 11,
    title: 'Notes App',
    category: 'Backend / DB',
    type: 'Personal',
    tags: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'EJS'],
    emoji: '📝',
    description: 'Simple but functional note-taking app with full CRUD operations, persistent storage in PostgreSQL, and clean UI.',
    githubUrl: 'https://github.com/SamniHasnath/notes-app',
    demoUrl: '#',
  },
  {
    id: 12,
    title: 'Pipelinehub',
    category: 'Other',
    type: 'Personal',
    tags: ['REACT', 'NODE.JS', 'EXPRESS'],
    emoji: '🚀',
    description: 'Independent project — a pipeline management tool built to explore workflow automation concepts and dashboard design.',
    githubUrl: 'https://github.com/SamniHasnath/pipelinehub',
    demoUrl: '#',
  },
  {
    id: 13,
    title: 'Sports Management System',
    category: 'Other',
    type: 'Group',
    tags: ['PHP', 'MYSQL', 'HTML/CSS'],
    emoji: '⚽',
    description: 'Academic group project — a web-based system for managing sports teams, schedules, and match results with a MySQL backend.',
    githubUrl: 'https://github.com/SamniHasnath/sports-management-system',
    demoUrl: '#',
  },
  {
    id: 14,
    title: 'Bus Reservation System',
    category: 'Other',
    type: 'Personal',
    tags: ['C', 'CLI', 'FILE I/O'],
    emoji: '🚌',
    description: 'Command-line bus ticketing system in C with seat booking, cancellation, and file-based persistence — the project that started it all.',
    githubUrl: 'https://github.com/SamniHasnath/bus-reservation-system',
    demoUrl: '#',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="projects" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: '24px', marginBottom: '40px',
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

        {/* Category Filter Tabs */}
        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px',
          padding: '6px', background: 'var(--c-card)',
          border: '1px solid var(--c-border)', borderRadius: '16px',
          width: 'fit-content',
        }}>
          {CATEGORIES.map(({ label, icon: Icon }) => {
            const isActive = activeCategory === label;
            const count = label === 'All' ? projects.length : projects.filter(p => p.category === label).length;
            return (
              <button
                key={label}
                onClick={() => handleCategoryChange(label)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '9px 16px', borderRadius: '10px',
                  border: 'none',
                  background: isActive ? 'var(--c-accent)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--c-text-2)',
                  fontSize: '13px', fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.background = 'var(--c-bg)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={14} />
                {label}
                <span style={{
                  fontSize: '11px', fontWeight: '700',
                  background: isActive ? 'rgba(255,255,255,0.2)' : 'var(--c-bg)',
                  color: isActive ? '#fff' : 'var(--c-text-2)',
                  borderRadius: '6px', padding: '1px 6px',
                  minWidth: '20px', textAlign: 'center',
                  transition: 'all 0.2s',
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
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
                position: 'relative',
              }}>
                {project.emoji}
                <span style={{
                  position: 'absolute', top: '14px', right: '14px',
                  fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px',
                  padding: '4px 10px', borderRadius: '6px',
                  background: project.type === 'Group'
                    ? 'rgba(99, 179, 237, 0.15)'
                    : 'rgba(154, 117, 234, 0.15)',
                  color: project.type === 'Group' ? '#63b3ed' : '#9a75ea',
                  border: `1px solid ${project.type === 'Group' ? 'rgba(99,179,237,0.3)' : 'rgba(154,117,234,0.3)'}`,
                }}>
                  {project.type === 'Group' ? 'Group' : 'Personal'}
                </span>
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
                  <a href={project.demoUrl !== '#' ? project.demoUrl : undefined} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', fontWeight: '700',
                    color: project.demoUrl !== '#' ? 'var(--c-text)' : 'var(--c-text-2)',
                    textDecoration: 'none', transition: 'color 0.2s',
                    cursor: project.demoUrl !== '#' ? 'pointer' : 'default',
                    opacity: project.demoUrl !== '#' ? 1 : 0.45,
                  }}
                    onMouseEnter={e => { if (project.demoUrl !== '#') e.currentTarget.style.color = 'var(--c-accent)'; }}
                    onMouseLeave={e => { if (project.demoUrl !== '#') e.currentTarget.style.color = 'var(--c-text)'; }}
                  >
                    Live Preview <ExternalLink size={13} />
                  </a>
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '13px', fontWeight: '500', color: 'var(--c-text-2)',
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-text)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
                    >
                      Source Code <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--c-text-2)' }}>
            No projects in this category yet.
          </div>
        )}

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
                <><ChevronDown size={16} /> View All {activeCategory === 'All' ? 'Projects' : activeCategory} ({filtered.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
