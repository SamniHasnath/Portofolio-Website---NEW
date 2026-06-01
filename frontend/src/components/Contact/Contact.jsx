import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail size={20} className="text-blue-400" />,
    label: 'EMAIL ME',
    value: 'hello@samni.dev',
    href: 'mailto:hello@samni.dev',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/samni',
    href: 'https://linkedin.com/in/samni',
  },
  {
    icon: <MapPin size={20} className="text-blue-400" />,
    label: 'LOCATION',
    value: 'Colombo, Sri Lanka',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#09090d] border-t border-[#1e1e2e]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left — Info (CENTERED) ── */}
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-5">
            Contact Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Let's work together
            <br />
            on your next project
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          {/* Contact items — icon + text, centered */}
          <div className="space-y-5 w-full max-w-xs">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111118] border border-[#1e1e2e] flex items-center justify-center flex-shrink-0 text-blue-400">
                  {info.icon}
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Form ── */}
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3.5 bg-[#1a1a26] border border-[#2d2d3d] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3.5 bg-[#1a1a26] border border-[#2d2d3d] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-3.5 bg-[#1a1a26] border border-[#2d2d3d] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 disabled:opacity-50 transition-colors inline-flex items-center justify-center gap-2 text-sm"
            >
              Send Message <Send size={16} />
            </button>

            {status === 'success' && (
              <p className="text-center text-green-400 text-sm font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 text-sm font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
