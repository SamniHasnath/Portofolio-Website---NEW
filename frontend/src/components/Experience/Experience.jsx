import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';

const timeline = [
  {
    Icon: GraduationCap,
    period: '2023 – Present',
    title: 'Software Engineering Undergraduate',
    type: 'University Degree Program',
    description:
      'Focused on core engineering principles, algorithms, and distributed systems. Maintaining a high GPA while actively participating in tech clubs.',
    color: 'var(--c-accent)',
    bg: 'rgba(96,165,250,0.12)',
  },
  {
    Icon: Award,
    period: '2024',
    title: 'Full Stack Development Specialization',
    type: 'Professional Certification',
    description:
      'In-depth study of modern web architectures, MERN stack, and cloud deployment strategies. Completed several enterprise-level capstone projects.',
    color: 'var(--c-accent-2)',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    Icon: BookOpen,
    period: '2024 – 2025',
    title: 'Self-Driven Data Science Journey',
    type: 'Online Learning & Research',
    description:
      'Exploring machine learning models, statistical analysis, and data visualization tools. Building a portfolio of data-centric applications.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
  },
  {
    Icon: Target,
    period: 'Future Goals',
    title: 'AI & Scalable Architecture',
    type: 'Aspirations',
    description:
      'Aiming to bridge the gap between AI and Full Stack development, creating intelligent applications that solve complex real-world problems.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
  },
];

export default function Experience() {
  return (
    <section id="education" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div className="reveal" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            My Background
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: '800', color: 'var(--c-text)',
          }}>
            Education &amp; Academic Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="edu-timeline">
          {timeline.map(({ Icon, period, title, type, description, color, bg }, idx) => (
            <div key={idx} className={`edu-item${idx % 2 === 1 ? ' right' : ''}`}>
              {/* Dot on center line */}
              <div className="edu-dot" style={{ background: color }} />

              {/* Card */}
              <div className="edu-card">
                {/* Icon + date row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={22} color={color} />
                  </div>
                  <span style={{
                    fontSize: '12px', fontWeight: '700', color: color,
                    letterSpacing: '2px', textTransform: 'uppercase',
                  }}>
                    {period}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px', fontWeight: '700', color: 'var(--c-text)',
                  marginBottom: '6px', lineHeight: '1.35',
                }}>
                  {title}
                </h3>

                {/* Subtitle */}
                <p style={{
                  fontSize: '11px', fontWeight: '700', color: 'var(--c-text-3)',
                  letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px',
                }}>
                  {type}
                </p>

                {/* Description */}
                <p style={{ color: 'var(--c-text-2)', lineHeight: '1.8', fontSize: '14px' }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
