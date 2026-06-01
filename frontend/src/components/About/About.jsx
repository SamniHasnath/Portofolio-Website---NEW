import { ImageIcon } from 'lucide-react';

const stats = [
  { value: '15+', label: 'PROJECTS', color: 'text-blue-400' },
  { value: '20+', label: 'TECHNOLOGIES', color: 'text-purple-400' },
  { value: '2+ Yrs', label: 'EXPERIENCE', color: 'text-cyan-400' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#09090d] border-t border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Photo placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-[#e8e8ec] flex items-center justify-center shadow-2xl shadow-black/50">
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <ImageIcon size={56} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Bridging the gap between
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 leading-tight mb-8">
            Data Science &amp; Web
            <br />
            Development
          </h2>

          <p className="text-gray-400 leading-relaxed mb-5">
            I'm a Software Engineering undergraduate with a passion for building
            intelligent applications. My expertise lies in crafting seamless user
            experiences while leveraging data-driven insights to solve complex
            problems.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            Whether it's developing robust full-stack systems or analyzing patterns
            in data, I focus on delivering high-quality, scalable solutions that
            make an impact.
          </p>

          {/* Stats */}
          <div className="flex gap-4 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[100px] bg-[#111118] border border-[#1e1e2e] rounded-2xl px-5 py-4"
              >
                <p className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
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
