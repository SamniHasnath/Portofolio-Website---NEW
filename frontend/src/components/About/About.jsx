const stats = [
  { value: '15+', label: 'Projects', color: 'var(--c-accent)' },
  { value: '20+', label: 'Technologies', color: 'var(--c-accent-2)' },
  { value: '2+ Yrs', label: 'Experience', color: '#34d399' },
];

export default function About() {
  return (
    <section id="about" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div className="reveal" style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: '64px',
        flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {/* Photo */}
        <div className="about-photo" style={{
          flexShrink: 0, width: '300px', height: '380px', borderRadius: '20px',
          border: '1px solid var(--c-border)', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}>
          <img
            src="/photo1.jpeg"
            alt="Samni Hasnath"
            style={{ width: '100%', height: '150%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Content */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '520px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            About Me
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
            color: 'var(--c-text)', lineHeight: '1.2', marginBottom: '8px',
          }}>
            Bridging the gap between
          </h2>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
            color: 'var(--c-text-3)', lineHeight: '1.2', marginBottom: '28px',
          }}>
            Data Science &amp; Web Development
          </h2>
          <p style={{ color: 'var(--c-text-2)', lineHeight: '1.8', marginBottom: '16px' }}>
            I'm a Software Engineering undergraduate with a passion for building
            intelligent applications. My expertise lies in crafting seamless user
            experiences while leveraging data-driven insights to solve complex problems.
          </p>
          <p style={{ color: 'var(--c-text-2)', lineHeight: '1.8', marginBottom: '36px' }}>
            Whether it's developing robust full-stack systems or analyzing patterns
            in data, I focus on delivering high-quality, scalable solutions that make an impact.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{
                background: 'var(--c-card)', border: '1px solid var(--c-border)',
                borderRadius: '16px', padding: '16px',
              }}>
                <p style={{ fontSize: '24px', fontWeight: '800', color: stat.color, marginBottom: '4px' }}>
                  {stat.value}
                </p>
                <p style={{
                  fontSize: '10px', color: 'var(--c-text-2)', fontWeight: '700',
                  letterSpacing: '1.5px', textTransform: 'uppercase', wordBreak: 'break-word',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
