import { useState } from 'react';
import { ArrowRight, Clock, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 6;

const articles = [
  {
    id: 1,
    tag: 'REACT', tagColor: '#60a5fa', emoji: '⚛️',
    title: 'Getting Started with React & Tailwind CSS — A Practical Guide',
    excerpt: 'Learn how to set up a modern React project with Tailwind CSS from scratch. We cover project structure, component design patterns, and styling best practices.',
    date: 'Mar 15, 2025', readTime: '5 min read',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)', href: '#',
  },
  {
    id: 2,
    tag: 'DATA SCIENCE', tagColor: '#34d399', emoji: '📊',
    title: 'From Raw Data to Insights: My Data Science Workflow',
    excerpt: 'A walkthrough of the complete data science pipeline — data cleaning with Pandas, visualization with Matplotlib, and building a predictive model step by step.',
    date: 'Feb 20, 2025', readTime: '8 min read',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)', href: '#',
  },
  {
    id: 3,
    tag: 'BACKEND', tagColor: '#a78bfa', emoji: '🔐',
    title: 'Building Secure REST APIs with Node.js and Express',
    excerpt: 'Best practices for designing and securing REST APIs — JWT authentication, input validation, rate limiting, and proper error handling patterns.',
    date: 'Jan 10, 2025', readTime: '6 min read',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)', href: '#',
  },
  {
    id: 4,
    tag: 'DEVOPS', tagColor: '#fb923c', emoji: '🐳',
    title: 'Dockerizing a Full-Stack App — From Dev to Production',
    excerpt: 'Step-by-step guide to containerizing a Node + React application with Docker Compose, environment configs, and deploying to a VPS with Nginx.',
    date: 'Dec 5, 2024', readTime: '7 min read',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)', href: '#',
  },
  {
    id: 5,
    tag: 'TYPESCRIPT', tagColor: '#38bdf8', emoji: '🔷',
    title: 'TypeScript Generics Explained With Real Examples',
    excerpt: 'Generics can feel abstract at first. This post breaks them down using practical patterns you will actually encounter in everyday TypeScript projects.',
    date: 'Nov 18, 2024', readTime: '6 min read',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)', href: '#',
  },
  {
    id: 6,
    tag: 'MACHINE LEARNING', tagColor: '#f472b6', emoji: '🤖',
    title: 'Training Your First Neural Network with PyTorch',
    excerpt: 'A beginner-friendly introduction to building and training a simple feedforward neural network using PyTorch, covering tensors, layers, and optimizers.',
    date: 'Oct 30, 2024', readTime: '10 min read',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)', href: '#',
  },
  {
    id: 7,
    tag: 'GIT', tagColor: '#facc15', emoji: '🌿',
    title: 'Git Workflows That Actually Scale for Teams',
    excerpt: 'Comparing Git Flow, trunk-based development, and GitHub Flow — when to use each, how to enforce them with branch rules, and tips for clean commit history.',
    date: 'Sep 12, 2024', readTime: '5 min read',
    bannerBg: 'linear-gradient(135deg, #1a1a08, #101008)', href: '#',
  },
  {
    id: 8,
    tag: 'DATABASES', tagColor: '#f97316', emoji: '🗄️',
    title: 'PostgreSQL vs MongoDB — Choosing the Right Database',
    excerpt: 'An honest comparison of relational and document databases with real benchmarks, schema design trade-offs, and guidance on which fits your use case.',
    date: 'Aug 22, 2024', readTime: '9 min read',
    bannerBg: 'linear-gradient(135deg, #1a1208, #100c05)', href: '#',
  },
  {
    id: 9,
    tag: 'CAREER', tagColor: '#c084fc', emoji: '🚀',
    title: 'How I Landed My First Dev Job With No CS Degree',
    excerpt: 'The exact projects, learning path, and networking strategies I used to go from self-taught beginner to employed software developer in under a year.',
    date: 'Jul 4, 2024', readTime: '12 min read',
    bannerBg: 'linear-gradient(135deg, #1e1030, #12081e)', href: '#',
  },
];

export default function Blog() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? articles : articles.slice(0, INITIAL_COUNT);
  const hasMore = articles.length > INITIAL_COUNT;

  return (
    <section id="blog" className="sec" style={{
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
              Thoughts &amp; Tutorials
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
              color: 'var(--c-text)', lineHeight: '1.2',
            }}>
              Blog Articles
            </h2>
          </div>
          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '12px',
                background: 'var(--c-card)', border: '1px solid var(--c-border)',
                color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'border-color 0.2s, transform 0.2s',
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
              {showAll ? <><ChevronUp size={15} /> Show Less</> : <>All Articles ({articles.length}) <ArrowRight size={15} /></>}
            </button>
          )}
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {visible.map((article) => (
            <a key={article.id} href={article.href} style={{
              display: 'block', background: 'var(--c-card)',
              border: '1px solid var(--c-border)', borderRadius: '16px',
              overflow: 'hidden', textDecoration: 'none',
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
                width: '100%', height: '160px', background: article.bannerBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px',
              }}>
                {article.emoji}
              </div>

              <div style={{ padding: '24px' }}>
                <span style={{
                  fontSize: '11px', fontWeight: '700',
                  color: article.tagColor, letterSpacing: '2px',
                }}>
                  {article.tag}
                </span>
                <h3 style={{
                  fontSize: '17px', fontWeight: '700', color: 'var(--c-text)',
                  margin: '10px 0 12px', lineHeight: '1.4',
                }}>
                  {article.title}
                </h3>
                <p style={{
                  color: 'var(--c-text-2)', fontSize: '14px',
                  lineHeight: '1.7', marginBottom: '20px',
                }}>
                  {article.excerpt}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  paddingTop: '16px', borderTop: '1px solid var(--c-border)',
                }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    color: 'var(--c-text-3)', fontSize: '12px',
                  }}>
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    color: 'var(--c-text-3)', fontSize: '12px',
                  }}>
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
              </div>
            </a>
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
                <><ChevronDown size={16} /> View All Articles ({articles.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
