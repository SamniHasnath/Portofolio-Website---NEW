import { LayoutDashboard, Code2, Database, PieChart, Settings } from 'lucide-react';

const skillGroups = [
  {
    icon: <LayoutDashboard size={22} className="text-blue-400" />,
    title: 'Frontend',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    icon: <Code2 size={22} className="text-blue-400" />,
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: <Database size={22} className="text-blue-400" />,
    title: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: <PieChart size={22} className="text-blue-400" />,
    title: 'Data Science',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
  },
  {
    icon: <Settings size={22} className="text-blue-400" />,
    title: 'Tools',
    tags: ['Git / GitHub', 'VS Code', 'Postman', 'Docker'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#09090d] border-t border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 hover:border-[#2d2d4d] transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                {group.icon}
                <h3 className="text-white font-bold text-lg">{group.title}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#1a1a26] border border-[#2d2d3d] text-gray-300 text-sm"
                  >
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
