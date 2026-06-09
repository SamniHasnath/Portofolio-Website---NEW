import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 6;

const articles = [
  {
    id: 1,
    tag: 'UI / UX', tagColor: '#60a5fa', emoji: '🖥️',
    title: 'GUI Patterns and Design in Human Computer Interaction: A Beginner-Friendly Guide',
    excerpt: 'Graphical User Interfaces (GUIs) are everywhere — from mobile apps to websites to desktop software. But have you ever wondered how they are designed and why they feel the way they do?',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)', href: 'https://medium.com/@samnauure0401',
  },
  {
    id: 2,
    tag: 'SECURITY', tagColor: '#a78bfa', emoji: '🔐',
    title: 'How Login Systems Work: All Authentication Methods Explained',
    excerpt: 'Learn how login systems work — from passwords and sessions to JWT, OAuth, and MFA — with simple explanations and practical examples for every method.',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)', href: 'https://medium.com/@samnauure0401',
  },
  {
    id: 3,
    tag: 'NETWORKING', tagColor: '#34d399', emoji: '🌐',
    title: 'Network Commands',
    excerpt: 'These are commands you use to check if your network is working and see basic info about your device — a quick reference for developers and students.',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)', href: 'https://medium.com/@samnauure0401',
  },
  {
    id: 4,
    tag: 'CLI', tagColor: '#fb923c', emoji: '💻',
    title: 'Master the Command Line: Practical CLI Guide for Students & Developers',
    excerpt: 'A practical, platform-wise command line guide for Windows, macOS, and Linux learners — covering navigation, file operations, and productivity shortcuts.',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)', href: 'https://medium.com/@samnauure0401',
  },
  {
    id: 5,
    tag: 'GIT', tagColor: '#facc15', emoji: '🌿',
    title: 'All Stages in Git',
    excerpt: 'Git is a distributed version control system that manages changes in source code. During its life cycle, a file in Git passes through multiple stages — here is what each one means.',
    bannerBg: 'linear-gradient(135deg, #1a1a08, #101008)', href: 'https://medium.com/@samnauure0401',
  },
  {
    id: 6,
    tag: 'WEB', tagColor: '#38bdf8', emoji: '🌍',
    title: 'How the Internet Works: HTTP, DNS & the Request-Response Cycle',
    excerpt: 'Every time you open a website, a lot happens behind the scenes. This article breaks down DNS resolution, HTTP requests, and how servers respond — in plain language.',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)', href: '#',
  },
  {
    id: 7,
    tag: 'LINUX', tagColor: '#34d399', emoji: '🐧',
    title: 'Linux File System Explained for Beginners',
    excerpt: 'The Linux file system can feel confusing at first. This guide walks through the directory structure — from /home to /etc to /var — and explains what each folder is actually for.',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)', href: '#',
  },
  {
    id: 8,
    tag: 'BACKEND', tagColor: '#f472b6', emoji: '🔌',
    title: 'Introduction to APIs: What They Are and How to Use Them',
    excerpt: 'APIs power almost every modern app. This beginner-friendly post explains what an API is, how REST works, and how to make your first API call with real examples.',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)', href: '#',
  },
  {
    id: 9,
    tag: 'DATABASE', tagColor: '#f97316', emoji: '🗄️',
    title: 'SQL vs NoSQL: Which Database Should You Use?',
    excerpt: 'Relational or document-based? This article compares SQL and NoSQL databases with clear examples, use cases, and a guide to help you pick the right one for your project.',
    bannerBg: 'linear-gradient(135deg, #1a1208, #100c05)', href: '#',
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
          <a
            href="https://medium.com/@samnauure0401"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '12px',
              background: 'var(--c-card)', border: '1px solid var(--c-border)',
              color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'border-color 0.2s, transform 0.2s',
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
            View on Medium <ArrowRight size={15} />
          </a>
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
            <a key={article.id} href={article.href} target="_blank" rel="noopener noreferrer" style={{
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
