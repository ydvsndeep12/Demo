import React, { useEffect, useRef, useState } from "react";

const skills = [
  { icon: "☕", title: "Java & C", desc: "OOP with Java and system-level programming with C. Strong DSA fundamentals.", tags: ["Java", "OOP", "C", "DSA"], grad: "from-orange-500/20 to-amber-500/5", accent: "#f97316" },
  { icon: "⚛️", title: "Frontend Dev", desc: "Responsive, interactive UIs with React ecosystem and modern CSS.", tags: ["HTML", "CSS", "JavaScript", "React"], grad: "from-cyan-500/20 to-blue-500/5", accent: "#06b6d4" },
  { icon: "🖥️", title: "Backend Dev", desc: "Scalable REST APIs and server-side apps with Node.js & Express.", tags: ["Node.js", "Express", "REST API", "EJS"], grad: "from-emerald-500/20 to-green-500/5", accent: "#10b981" },
  { icon: "🗄️", title: "Databases", desc: "SQL and NoSQL database design, querying, and optimization.", tags: ["MongoDB", "MySQL", "SQL", "Mongoose"], grad: "from-yellow-500/20 to-amber-500/5", accent: "#eab308" },
  { icon: "🔐", title: "Auth & Security", desc: "Secure authentication with JWT, sessions, and best practices.", tags: ["JWT", "Auth", "Sessions", "Security"], grad: "from-violet-500/20 to-purple-500/5", accent: "#8b5cf6" },
  { icon: "🛠️", title: "Tools & Soft Skills", desc: "Industry tools and strong communication for team collaboration.", tags: ["VS Code", "GitHub", "Git", "Teamwork"], grad: "from-pink-500/20 to-rose-500/5", accent: "#ec4899" },
];

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

const Services = () => {
  const [ref, inView] = useInView();
  return (
    <section id="services" ref={ref} className="py-28 overflow-hidden relative"
      style={{ background: "#0c0c14" }}>

      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 sm:mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-label mx-auto mb-4">What I Know</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">Full-stack developer with hands-on experience across the entire web development stack.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((s, i) => (
            <div key={i}
              className={`relative rounded-2xl p-6 cursor-default group overflow-hidden transition-all duration-700`}
              style={{
                background: `linear-gradient(135deg, rgba(18,18,30,0.9), rgba(12,12,20,0.95))`,
                border: `1px solid rgba(255,255,255,0.06)`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${s.accent}40`; e.currentTarget.style.boxShadow = `0 20px 60px ${s.accent}15`; e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>

              {/* Gradient bg blob */}
              <div className={`absolute inset-0 bg-linear-to-br ${s.grad} opacity-60 rounded-2xl`} />

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}>
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t, j) => (
                    <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200"
                      style={{ color: s.accent, background: `${s.accent}12`, border: `1px solid ${s.accent}25` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
