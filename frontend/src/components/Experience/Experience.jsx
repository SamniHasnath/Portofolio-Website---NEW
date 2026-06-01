import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';

const timeline = [
  {
    icon: <GraduationCap size={20} className="text-blue-400" />,
    period: '2023 – PRESENT',
    title: 'Software Engineering Undergraduate',
    type: 'UNIVERSITY DEGREE PROGRAM',
    description:
      'Focused on core engineering principles, algorithms, and distributed systems. Maintaining a high GPA while actively participating in tech clubs.',
  },
  {
    icon: <Award size={20} className="text-blue-400" />,
    period: '2024',
    title: 'Full Stack Development Specialization',
    type: 'PROFESSIONAL CERTIFICATION',
    description:
      'In-depth study of modern web architectures, MERN stack, and cloud deployment strategies. Completed several enterprise-level capstone projects.',
  },
  {
    icon: <BookOpen size={20} className="text-blue-400" />,
    period: '2024 – 2025',
    title: 'Self-Driven Data Science Journey',
    type: 'ONLINE LEARNING & RESEARCH',
    description:
      'Exploring machine learning models, statistical analysis, and data visualization tools. Building a portfolio of data-centric applications.',
  },
  {
    icon: <Target size={20} className="text-blue-400" />,
    period: 'FUTURE GOALS',
    title: 'AI & Scalable Architecture',
    type: 'ASPIRATIONS',
    description:
      'Aiming to bridge the gap between AI and Full Stack development, creating intelligent applications that solve complex real-world problems.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#09090d] border-t border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            My Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Education &amp; Progress
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-6 mb-12 last:mb-0 relative">
              {/* Left: icon + vertical line */}
              <div className="flex flex-col items-center">
                {/* Circle icon */}
                <div className="w-11 h-11 rounded-full bg-[#111118] border border-[#2d2d4d] flex items-center justify-center flex-shrink-0 z-10">
                  {item.icon}
                </div>
                {/* Vertical line (except last) */}
                {idx < timeline.length - 1 && (
                  <div className="flex-1 w-px bg-[#1e1e2e] mt-3" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-2 pt-1">
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">
                  {item.period}
                </p>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">
                  {item.type}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
