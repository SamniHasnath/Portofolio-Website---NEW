import { ArrowRight, Download, ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-[#09090d]"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1e2e] bg-[#111118] text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
            I am
            <br />
            Samni Hasnath
          </h1>

          {/* Role gradient */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-snug">
            Aspiring Data Scientist &amp; Full Stack
            <br />
            Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            Building scalable applications and deriving insights from data.
            Currently focused on the intersection of Machine Learning and Full
            Stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a1a26] border border-[#2d2d3d] text-white font-semibold hover:bg-[#222230] transition-colors"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        {/* Right — Photo placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-lg aspect-[4/5] rounded-2xl bg-[#e8e8ec] flex items-center justify-center shadow-2xl shadow-black/50">
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <ImageIcon size={64} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
