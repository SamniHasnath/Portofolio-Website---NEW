import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { createRipple } from '../../utils/ripple';

const roles = [
  'Data Scientist',
  'Full Stack Developer',
  'ML Engineer',
  'Problem Solver',
];

function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % roles.length);
      setTick(t => t + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setIndex(i => (i + 1) % roles.length);
    setTick(t => t + 1);
  };

  return (
    <span
      key={tick}
      className="animated-word"
      onClick={next}
      title="Click to cycle"
    >
      {roles[index]}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="sec" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '100px 24px 60px',
      background: 'var(--c-bg)', position: 'relative',
    }}>
      <div className="hero-inner" style={{
        maxWidth: '1100px', width: '100%', margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: '60px',
        flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {/* Text */}
        <div className="hero-text" style={{ flex: '1', minWidth: '300px', maxWidth: '560px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '999px',
            border: '1px solid var(--c-border-dark)',
            background: 'var(--c-card)', color: 'var(--c-text-2)',
            fontSize: '13px', marginBottom: '28px',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--c-accent)', display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Available for new opportunities
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '800',
            color: 'var(--c-text)', lineHeight: '1.1', marginBottom: '16px',
          }}>
            Hi, I'm<br />
            <span style={{ color: 'var(--c-accent)' }}>Samni Hasnath</span>
          </h1>

          <h2 style={{
            fontSize: 'clamp(17px, 2.2vw, 24px)', fontWeight: '600',
            color: 'var(--c-text-2)', marginBottom: '20px', lineHeight: '1.5',
          }}>
            Aspiring{' '}
            <span style={{ color: 'var(--c-accent-2)' }}>
              <AnimatedRole />
            </span>
          </h2>

          <p style={{
            color: 'var(--c-text-2)', fontSize: '16px', lineHeight: '1.8',
            marginBottom: '36px', maxWidth: '480px',
          }}>
            Building scalable applications and deriving insights from data.
            Currently focused on the intersection of Machine Learning and Full Stack development.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="ripple-host" onClick={createRipple} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              color: '#ffffff', fontWeight: '600', fontSize: '14px',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/cv.pdf" download className="ripple-host" onClick={createRipple} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '999px',
              background: 'var(--c-card)', border: '1px solid var(--c-border-md)',
              color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
              textDecoration: 'none', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--c-border-hover)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-border-md)')}
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div className="hero-glow" style={{
            position: 'absolute', width: '280px', height: '280px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
          }} />
          <div className="hero-photo" style={{
            width: '260px', height: '260px', borderRadius: '50%',
            border: '2px solid var(--c-border-dark)',
            position: 'relative', boxShadow: '0 0 60px rgba(99,102,241,0.1)',
            overflow: 'hidden',
          }}>
            <img
              src="/photo1.jpeg"
              alt="Samni Hasnath"
              style={{ width: '100%', height: '200%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '6px', color: 'var(--c-text-3)', animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
