import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { createRipple } from '../../utils/ripple';

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email Me', value: 'hello@samni.dev', href: 'mailto:hello@samni.dev' },
  { icon: <LinkedinIcon />,   label: 'LinkedIn',  value: 'linkedin.com/in/samni', href: 'https://linkedin.com/in/samni' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Colombo, Sri Lanka', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const fieldStyle = {
    width: '100%', padding: '14px 16px',
    background: 'var(--c-input)', border: '1px solid var(--c-border-md)',
    borderRadius: '12px', color: 'var(--c-text)', fontSize: '14px',
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div className="reveal" style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px', alignItems: 'start',
      }}>
        {/* Left — Info */}
        <div>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Contact Me
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800',
            color: 'var(--c-text)', lineHeight: '1.2', marginBottom: '16px',
          }}>
            Let's work together<br />on your next project
          </h2>
          <p style={{ color: 'var(--c-text-2)', lineHeight: '1.8', marginBottom: '36px', maxWidth: '380px' }}>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((info) => (
              <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'var(--c-card)', border: '1px solid var(--c-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: 'var(--c-accent)',
                }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{
                    color: 'var(--c-text-3)', fontSize: '11px', fontWeight: '700',
                    letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px',
                  }}>
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href} style={{
                      color: 'var(--c-text)', fontWeight: '500', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text)')}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p style={{ color: 'var(--c-text)', fontWeight: '500' }}>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div style={{
          background: 'var(--c-card)', border: '1px solid var(--c-border)',
          borderRadius: '20px', padding: '32px',
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="contact-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                required placeholder="Your Name" style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--c-accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--c-border-md)')} />
              <input type="email" name="email" value={form.email} onChange={handleChange}
                required placeholder="Email Address" style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--c-accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--c-border-md)')} />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange}
              required rows={6} placeholder="Your Message"
              style={{ ...fieldStyle, resize: 'none' }}
              onFocus={e => (e.target.style.borderColor = 'var(--c-accent)')}
              onBlur={e => (e.target.style.borderColor = 'var(--c-border-md)')} />
            <button type="submit" disabled={status === 'sending'} className="ripple-host" onClick={createRipple} style={{
              padding: '16px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              color: '#ffffff', border: 'none', borderRadius: '12px',
              fontWeight: '700', fontSize: '14px',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              opacity: status === 'sending' ? '0.5' : '1',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'opacity 0.2s', fontFamily: 'inherit',
            }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={e => (e.currentTarget.style.opacity = status === 'sending' ? '0.5' : '1')}
            >
              Send Message <Send size={16} />
            </button>

            {status === 'success' && (
              <p style={{ textAlign: 'center', color: '#34d399', fontSize: '14px', fontWeight: '500' }}>
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p style={{ textAlign: 'center', color: '#f87171', fontSize: '14px', fontWeight: '500' }}>
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
