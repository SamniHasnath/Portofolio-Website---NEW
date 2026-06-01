import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    title: 'Movie Website',
    tags: ['REACT', 'TAILWIND', 'API'],
    description:
      'A high-performance movie database application with real-time search, category filtering, and detailed media pages using TMDB API.',
    imageBg: '#1a1a26',
    emoji: '🎬',
    github: '#',
    demo: '#',
  },
  {
    title: 'Sales Analysis Dashboard',
    tags: ['PYTHON', 'PANDAS', 'D3.JS'],
    description:
      'Comprehensive data visualization platform for sales metrics, including regional performance charts and predictive analytics components.',
    imageBg: '#1a2a1a',
    emoji: '📊',
    github: '#',
    demo: '#',
  },
  {
    title: 'Authentication System',
    tags: ['NODE.JS', 'EXPRESS', 'JWT'],
    description:
      'Secure user management system featuring JWT-based auth, OAuth integration, and comprehensive account management features.',
    imageBg: '#2a1a1a',
    emoji: '🔐',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather App',
    tags: ['REACT NATIVE', 'OPENWEATHER', 'UI/UX'],
    description:
      'Minimalist weather forecasting app with geolocation support, dynamic backgrounds based on weather, and 7-day detailed forecasts.',
    imageBg: '#1a1a2a',
    emoji: '⛅',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#09090d] border-t border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              My Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Building digital products
              <br />
              with passion &amp; precision
            </h2>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-[#111118] border border-[#1e1e2e] text-white font-semibold hover:border-[#2d2d4d] transition-colors whitespace-nowrap"
          >
            Explore All Projects
          </a>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111118] border border-[#1e1e2e] rounded-2xl overflow-hidden hover:border-[#2d2d4d] transition-all"
            >
              {/* Image/thumbnail area */}
              <div
                className="w-full h-56 flex items-center justify-center text-5xl"
                style={{ backgroundColor: project.imageBg }}
              >
                {project.emoji}
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold text-blue-400 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    Live Preview <ExternalLink size={15} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Source Code <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
