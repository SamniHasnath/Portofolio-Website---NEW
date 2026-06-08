import { useState } from 'react';
import { ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 3;

const certs = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Meta / Coursera',
    date: 'Dec 2024',
    category: 'WEB DEVELOPMENT',
    color: '#60a5fa',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)',
    credential: '#',
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'IBM / Coursera',
    date: 'Oct 2024',
    category: 'DATA SCIENCE',
    color: '#34d399',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)',
    credential: '#',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'deeplearning.ai / Coursera',
    date: 'Aug 2024',
    category: 'MACHINE LEARNING',
    color: '#a78bfa',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)',
    credential: '#',
  },
  {
    title: 'React Professional Certificate',
    issuer: 'Meta / Coursera',
    date: 'Jun 2024',
    category: 'FRONTEND',
    color: '#f472b6',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)',
    credential: '#',
  },
  {
    title: 'Node.js & Express Backend',
    issuer: 'freeCodeCamp',
    date: 'Apr 2024',
    category: 'BACKEND',
    color: '#fb923c',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)',
    credential: '#',
  },
  {
    title: 'SQL & Database Management',
    issuer: 'Oracle Academy',
    date: 'Feb 2024',
    category: 'DATABASES',
    color: '#38bdf8',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)',
    credential: '#',
  },
];

export default function Certification() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certs : certs.slice(0, INITIAL_COUNT);
  const hasMore = certs.length > INITIAL_COUNT;

  return (
    <section id="certifications" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Credentials
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
            color: 'var(--c-text)', marginBottom: '16px',
          }}>
            Certifications &amp; Courses
          </h2>
          <p style={{ color: 'var(--c-text-2)', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
            Continuous learning through industry-recognized programs and hands-on projects.
          </p>
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '20px',
        }}>
          {visible.map((cert) => (
            <div key={cert.title} style={{
              background: 'var(--c-card)', border: '1px solid var(--c-border)',
              borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-border-hover)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Banner — always dark for visual contrast */}
              <div style={{
                height: '72px', background: cert.bannerBg,
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', padding: '0 20px',
              }}>
                <span style={{
                  fontSize: '11px', fontWeight: '700', color: cert.color,
                  letterSpacing: '2px', textTransform: 'uppercase',
                }}>
                  {cert.category}
                </span>
                <ShieldCheck size={28} color={cert.color} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px 24px' }}>
                <h3 style={{
                  fontSize: '17px', fontWeight: '700', color: 'var(--c-text)',
                  marginBottom: '6px', lineHeight: '1.3',
                }}>
                  {cert.title}
                </h3>
                <p style={{ color: 'var(--c-text-2)', fontSize: '13px', marginBottom: '16px' }}>
                  {cert.issuer}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: 'var(--c-text-3)', fontWeight: '600' }}>
                    Issued {cert.date}
                  </span>
                  <a href={cert.credential} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    fontSize: '12px', fontWeight: '700', color: cert.color,
                    textDecoration: 'none', transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    View Credential <ExternalLink size={12} />
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
                <><ChevronDown size={16} /> View All Certifications ({certs.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
