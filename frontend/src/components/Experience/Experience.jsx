import { useState } from 'react';
import {
  School, BookOpen, GraduationCap, Building2, Code2,
  Award, Target, Users, Palette, PenTool, FileText, ChevronDown,
} from 'lucide-react';

const academicTimeline = [
  {
    Icon: Building2,
    period: 'Jun 2024 – Jun 2028',
    title: 'Sabaragamuwa University of Sri Lanka',
    type: 'BSc (Hons) in Software Engineering',
    description:
      'Pursuing a degree in Computer Software Engineering, focused on core engineering principles, algorithms, and distributed systems while actively participating in tech clubs.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
  },
  {
    Icon: GraduationCap,
    period: 'Jan 2014 – Jan 2023',
    title: 'Mahmud Ladies College, Kalmunai',
    type: 'Grade 6 to Advanced Level',
    description:
      'Completed secondary and collegiate education. Ordinary Level: 8A, B. Advanced Level: 2B, C.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
  },
  {
    Icon: BookOpen,
    period: 'Jan 2010 – Dec 2013',
    title: 'KM/Al-Hilal Vidyalaya',
    type: 'Primary Studies',
    description:
      'Completed primary studies, developing strong fundamentals across core subjects.',
    color: 'var(--c-accent-2)',
    bg: 'rgba(167,139,250,0.12)',
  },
     {
    Icon: School,
    period: 'Jan 2009 – Jan 2010',
    title: 'G.M.M.S',
    type: 'Early Education',
    description:
      'Started primary schooling, building the foundation for early literacy and numeracy skills.',
    color: 'var(--c-accent)',
    bg: 'rgba(96,165,250,0.12)',
  },
   
   
];

const journeyTimeline = [
   {
    Icon: Code2,
    period: 'Jan 2025 – 2026',
    title: 'The App Brewery',
    type: 'Full Stack Development By Dr. Angela Yu',
    description:
      'Completed professional full-stack web development training covering HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, MongoDB, REST APIs, authentication, Git/GitHub, and deployment. Developed multiple real-world projects and gained practical experience in both frontend and backend development following industry best practices.',
    color: 'var(--c-accent)',
    bg: 'rgba(96,165,250,0.12)',
  },
  {
    Icon: Code2,
    period: '2026 – Present',
    title: 'Complete A.I. & Machine Learning, Data Science Bootcamp',
    type: 'By Zero To Mastery Academy',
    description:
      'Currently pursuing training in Artificial Intelligence, Machine Learning, and Data Science, covering Python, statistics, data analysis, data visualization, machine learning, deep learning, and practical AI project development.',
    color: 'var(--c-accent)',
    bg: 'rgba(96,165,250,0.12)',
  },
  {
    Icon: Award,
    period: '2024 - Present',
    title: 'Full Stack Development Specialization',
    type: 'Professional Certification',
    description:
      'In-depth study of modern web architectures, MERN stack, and cloud deployment strategies. Completed several enterprise-level capstone projects.',
    color: 'var(--c-accent-2)',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    Icon: BookOpen,
    period: '2025 – PRESENT',
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

const volunteerTimeline = [
  {
    Icon: Users,
    period: '2025 - PRESENT',
    title: 'Member',
    type: 'Society of Computer Sciences, SUSL',
    description:
      'Active member contributing to society activities and events within the Faculty of Computing at Sabaragamuwa University.',
    color: 'var(--c-accent)',
    bg: 'rgba(96,165,250,0.12)',
  },
  {
    Icon: Palette,
    period: '2025 - PRESENT',
    title: 'Volunteer(Graphic Designer)',
    type: 'IEEE Student Branch of SUSL',
    description:
      'Designing visual content and graphics for IEEE Student Branch events, campaigns, and social media.',
    color: 'var(--c-accent-2)',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    Icon: PenTool,
    period: '2025 - PRESENT',
    title: 'Volunteer(Graphic Designer,Programme Organizer)',
    type: 'IEEE WIE Student Branch Affinity Group of SUSL',
    description:
      'Creating designs and visual materials supporting IEEE WIE Student Branch Affinity Group initiatives.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
  },
  {
    Icon: FileText,
    period: 'Jan 2026 – Present',
    title: 'Technical Writer',
    type: 'Medium · Self-employed · Remote',
    description:
      'Writing beginner-friendly technical articles and publishing technical content on the Medium platform.',
       color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
  },
];

const TABS = [
  { key: 'academic', label: 'Academic Background', timeline: academicTimeline },
  { key: 'journey', label: 'Learning Journey', timeline: journeyTimeline },
  { key: 'volunteer', label: 'Volunteer Experience', timeline: volunteerTimeline },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('academic');
  const active = TABS.find(t => t.key === activeTab);

  return (
    <section id="education" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            My Background
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: '800', color: 'var(--c-text)',
          }}>
            {active.label}
          </h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px',
          marginBottom: '64px',
        }}>
          {TABS.map(({ key, label }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '10px 20px', borderRadius: '999px',
                  border: '1px solid var(--c-border)',
                  background: isActive ? 'var(--c-accent)' : 'var(--c-card)',
                  color: isActive ? '#fff' : 'var(--c-text-2)',
                  fontSize: '13px', fontWeight: '700',
                  letterSpacing: '0.5px', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderColor = 'var(--c-border-hover)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderColor = 'var(--c-border)'; }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Interactive stepper */}
        <EduStepper key={activeTab} timeline={active.timeline} />
      </div>
    </section>
  );
}

function EduStepper({ timeline }) {
  const [openIndex, setOpenIndex] = useState(() => {
    const current = timeline.findIndex(item => /present/i.test(item.period));
    return current !== -1 ? current : 0;
  });

  return (
    <div className="edu-stepper">
      {timeline.map(({ Icon, period, title, type, description, tags, color, bg }, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div key={idx} className={`edu-step${isOpen ? ' open' : ''}`}>
            <span className="edu-step-dot" style={{ background: color }} />

            <button
              className="edu-step-header"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <div className="edu-step-icon" style={{ background: bg }}>
                <Icon size={20} color={color} />
              </div>
              <div className="edu-step-heading">
                <span className="edu-step-period" style={{ color }}>{period}</span>
                <h3 className="edu-step-title">{title}</h3>
                <p className="edu-step-type">{type}</p>
              </div>
              <ChevronDown className="edu-step-chevron" size={20} />
            </button>

            <div className="edu-step-body">
              <div className="edu-step-body-inner">
                <p>{description}</p>
                {tags && tags.length > 0 && (
                  <div className="edu-step-tags">
                    {tags.map(tag => (
                      <span key={tag} className="edu-step-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
