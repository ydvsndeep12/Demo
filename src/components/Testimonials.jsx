import React, { useEffect, useRef, useState } from "react";

const certs = [
  { icon: "☕", title: "Programming in Java", org: "NPTEL", color: "#f97316" },
  { icon: "🌐", title: "Introduction to Web Development", org: "Coursera", color: "#06b6d4" },
  { icon: "🤖", title: "Prompt Engineering for ChatGPT", org: "Coursera", color: "#8b5cf6" },
];

const profiles = [
  { name: "CodeChef", icon: "👨‍🍳", href: "https://www.codechef.com/users/ydvsndeep12", color: "#f97316" },
  { name: "LeetCode", icon: "⚡", href: "https://leetcode.com/u/ydvsndeep12/", color: "#eab308" },
  { name: "GeeksForGeeks", icon: "🌿", href: "https://www.geeksforgeeks.org/profile/yadavsandit0a", color: "#22c55e" },
];

const exp = {
  role: "Web Development Intern",
  company: "CODTECH IT SOLUTIONS",
  period: "Aug – Sept 2025",
  points: [
    "Built responsive web apps with HTML, CSS, JavaScript & React.",
    "Improved UI/UX and integrated APIs.",
    "Optimized performance & collaborated with team.",
  ],
};

const useInView = () => {
  const ref = useRef();
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
};

const Testimonials = () => {
  const [ref, inView] = useInView();
  return (
    <section id="testimonials" ref={ref} className="py-26 overflow-hidden relative"
      style={{ background: "#0c0c14" }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent via-pink-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="section-label mx-auto mb-3">Background</div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">

          {/* Experience */}
          <div className={`rounded-2xl p-5 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ background: "rgba(18,18,30,0.8)", border: "1px solid rgba(99,102,241,0.15)", backdropFilter: "blur(20px)" }}>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)" }}>💼</div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm truncate">{exp.role}</p>
                <p className="text-indigo-400 text-xs font-semibold">{exp.company}</p>
              </div>
              <span className="text-slate-500 text-xs px-2.5 py-1 rounded-full shrink-0"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.points.map((p, i) => (
                <li key={i} className="flex gap-2 text-slate-400 text-xs transition-all duration-500"
                  style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-12px)", transitionDelay: `${0.3 + i * 0.1}s` }}>
                  <span className="text-indigo-400 shrink-0 font-bold mt-0.5">›</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            {certs.map((c, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl transition-all duration-700 hover:-translate-y-0.5"
                style={{
                  background: "rgba(18,18,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)",
                  opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)", transitionDelay: `${0.2 + i * 0.12}s`,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}30`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>{c.icon}</div>
                <div>
                  <p className="text-white font-semibold text-xs">{c.title}</p>
                  <p className="text-xs font-bold mt-0.5" style={{ color: c.color }}>{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-slate-500 text-xs font-semibold text-center mb-4 tracking-widest uppercase">Coding Profiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {profiles.map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{ background: `${p.color}10`, border: `1px solid ${p.color}22` }}
                onMouseEnter={e => { e.currentTarget.style.background = `${p.color}18`; e.currentTarget.style.boxShadow = `0 6px 20px ${p.color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${p.color}10`; e.currentTarget.style.boxShadow = "none"; }}>
                <span className="text-lg">{p.icon}</span>
                <span className="text-white font-semibold text-xs">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
