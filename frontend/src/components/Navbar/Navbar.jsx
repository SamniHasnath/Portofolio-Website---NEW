import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { createRipple } from '../../utils/ripple';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';

  return (
    <>
      {/* Rainbow top bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '3px',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
      }} />

      <nav style={{
        position: 'fixed', top: '3px', left: 0, right: 0, zIndex: 40,
        background: 'var(--c-nav)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div className="nav-inner" style={{
          maxWidth: '1200px', margin: '0 auto', padding: '14px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        }}>
          {/* Logo */}
          <a href="#home" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            textDecoration: 'none', flexShrink: 0,
          }}>
            <img
              src="/logo.png"
              alt="Samni Hasnath Logo"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #c9a84c',
                boxShadow: '0 0 0 1px rgba(201,168,76,0.3)',
              }}
            />
            <span style={{
              fontSize: '22px', fontWeight: '800',
              color: 'var(--c-accent)', letterSpacing: '-0.5px',
            }}>
              Samni
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: '22px',
            listStyle: 'none', margin: 0, padding: 0,
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{
                  color: 'var(--c-text-2)', textDecoration: 'none',
                  fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1px solid var(--c-border)',
                background: 'var(--c-card)',
                color: 'var(--c-text-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-accent)';
                e.currentTarget.style.color = 'var(--c-accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.color = 'var(--c-text-2)';
              }}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Hire Me */}
            <a href="#contact" onClick={createRipple} style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '9px 22px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              color: '#ffffff', fontWeight: '600', fontSize: '13px',
              textDecoration: 'none', transition: 'opacity 0.2s', whiteSpace: 'nowrap',
            }}
              className="hire-btn ripple-host"
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Hire Me
            </a>

            {/* Mobile burger */}
            <button onClick={() => setOpen(!open)} style={{
              display: 'none', background: 'none', border: 'none',
              color: 'var(--c-text-2)', cursor: 'pointer', padding: '4px',
            }} className="burger-btn">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: 'var(--c-card)', borderTop: '1px solid var(--c-border)',
            padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{
                color: 'var(--c-text-2)', textDecoration: 'none',
                fontSize: '16px', fontWeight: '500', padding: '4px 0',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingTop: '8px' }}>
              <a href="#contact" className="ripple-host" onClick={e => { setOpen(false); createRipple(e); }} style={{
                display: 'inline-flex', padding: '11px 24px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#ffffff', fontWeight: '600', fontSize: '14px', textDecoration: 'none',
              }}>
                Hire Me
              </a>
              <button onClick={toggleTheme} style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid var(--c-border)', background: 'var(--c-input)',
                color: 'var(--c-text-2)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {isLight ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hire-btn { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
