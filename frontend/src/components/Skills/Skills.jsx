import { useState } from 'react';
import { LayoutDashboard, Server, Database, PieChart, Wrench, Cloud, Palette, PenTool, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 6;

const skillGroups = [
  { Icon: LayoutDashboard, title: 'Frontend', tags: ['React', 'Tailwind CSS','Bootstrap', 'JavaScript', 'HTML/CSS'] },
  { Icon: Server,         title: 'Backend',  tags: ['Node.js', 'Express.js', 'RESTful APIs','Authentication & Authorization','Server-side Development'] },
  { Icon: Database,       title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB','Database Design & Management'] },
  { Icon: PieChart,       title: 'Data Science', tags: ['Python','NumPy', 'Pandas', 'Matplotlib', 'Excel','Statistics'] },
  { Icon: Wrench,         title: 'Tools', tags: ['Git / GitHub', 'VS Code', 'Postman', 'Docker'] },
  { Icon: Cloud,          title: 'Cloud & Deployment',  tags: ['GitHub Pages', 'Vercel', 'Render','Netlify'] },
  { Icon: Palette,        title: 'Graphic Design',  tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Indesign','Canva'] },
  { Icon: PenTool,        title: 'UI/UX Design',  tags: ['Figma', 'Wireframing', 'Adobe XD','Prototyping'] },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? skillGroups : skillGroups.slice(0, INITIAL_COUNT);
  const hasMore = skillGroups.length > INITIAL_COUNT;

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
          {visible.map(({ Icon, title, tags }) => (
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
                <><ChevronDown size={16} /> View More ({skillGroups.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
