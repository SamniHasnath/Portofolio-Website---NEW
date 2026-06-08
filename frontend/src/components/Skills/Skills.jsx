import { LayoutDashboard, Code2, Database, PieChart, Settings } from 'lucide-react';

const skillGroups = [
  { Icon: LayoutDashboard, title: 'Frontend', tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
  { Icon: Code2,          title: 'Backend',  tags: ['Node.js', 'Express.js', 'REST APIs'] },
  { Icon: Database,       title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { Icon: PieChart,       title: 'Data Science', tags: ['Python', 'Pandas', 'Matplotlib', 'Excel'] },
  { Icon: Settings,       title: 'Tools', tags: ['Git / GitHub', 'VS Code', 'Postman', 'Docker'] },
];

export default function Skills() {
  return (
    <section id="skills" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            My Expertise
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800', color: 'var(--c-text)',
          }}>
            Technologies I Work With
          </h2>
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {skillGroups.map(({ Icon, title, tags }) => (
            <div key={title} style={{
              background: 'var(--c-card)', border: '1px solid var(--c-border)',
              borderRadius: '16px', padding: '24px', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--c-border-hover)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Icon size={22} color="var(--c-accent)" />
                <h3 style={{ color: 'var(--c-text)', fontWeight: '700', fontSize: '17px' }}>{title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag) => (
                  <span key={tag} style={{
                    padding: '6px 14px', borderRadius: '999px',
                    background: 'var(--c-input)', border: '1px solid var(--c-border-md)',
                    color: 'var(--c-text-2)', fontSize: '13px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
