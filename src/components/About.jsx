import React, { useEffect, useRef, useState } from "react";
import profilePic from "../assets/profile.png";

const skills = [
  { name: "React / JavaScript", level: 88, color: "#06b6d4" },
  { name: "Node.js / Express",  level: 85, color: "#10b981" },
  { name: "MongoDB / MySQL",    level: 82, color: "#8b5cf6" },
  { name: "Java / OOP",         level: 90, color: "#f97316" },
  { name: "HTML / CSS",         level: 92, color: "#6366f1" },
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

const About = () => {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} className="py-26 overflow-hidden relative"
      style={{ background: "#0c0c14" }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="section-label mx-auto mb-3">About Me</div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white">
            Full Stack <span className="text-gradient">Developer</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center">

          {/* Image */}
          <div className={`shrink-0 flex justify-center w-full sm:w-auto transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-2xl blur-2xl scale-110 -z-10 opacity-30"
                style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)" }} />
              <div className="img-glow animate-glowPulse">
                <div className="w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-64 rounded-[18px] overflow-hidden" style={{ background: "#050508" }}>
<img 
  src={profilePic}
  alt="Sandeep Yadav"
  className="w-full h-full object-cover hover:scale-110 transition duration-700"
/>
                </div>
              </div>
              {/* CGPA badge */}
              <div className="absolute -top-4 -right-5 text-center px-3 py-2 rounded-xl"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 6px 20px rgba(99,102,241,0.4)" }}>
                <p className="text-white text-lg font-black font-display leading-none">74%</p>
                <p className="text-indigo-200 text-xs mt-0.5">CGPA</p>
              </div>
              {/* Projects badge */}
              <div className="absolute -bottom-4 -left-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: "rgba(18,18,30,0.95)", border: "1px solid rgba(99,102,241,0.2)", backdropFilter: "blur(20px)" }}>
                <span className="text-base">🏆</span>
                <div>
                  <p className="text-white text-xs font-bold">5+ Projects</p>
                  <p className="text-slate-500 text-xs">Done</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              I'm <strong className="text-white">Sandeep Yadav</strong>, B.Tech CSE student at RKGIT, Ghaziabad (2021–2025).
              Interned at <span className="text-indigo-400 font-semibold">CODTECH IT SOLUTIONS</span> — built responsive apps, integrated APIs, improved UI/UX.
            </p>

            {/* Education */}
            <div className="rounded-xl p-4 mb-4"
              style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.12)" }}>
              <p className="text-white text-xs font-bold mb-2">🎓 Education</p>
              {[
                { d: "B.Tech CSE — RKGIT, Ghaziabad", s: "74%", y: "2021–25" },
                { d: "10+2 — M.J.R.P. Public School", s: "84%", y: "2020" },
              ].map((e, i) => (
                <div key={i}>
                  {i > 0 && <div className="h-px my-2" style={{ background: "rgba(255,255,255,0.05)" }} />}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-xs">{e.d}</span>
                    <span className="text-indigo-400 text-xs font-bold ml-2 shrink-0">{e.s} · {e.y}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-2.5 mb-5">
              {skills.map((sk, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{sk.name}</span>
                    <span className="font-bold" style={{ color: sk.color }}>{sk.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill"
                      style={{ width: inView ? `${sk.level}%` : "0%", transitionDelay: `${0.3 + i * 0.08}s`, background: `linear-gradient(90deg, ${sk.color}80, ${sk.color})` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="mailto:yadavsandeep1268@gmail.com" className="btn-primary px-6 py-2.5 text-xs">Hire Me</a>
              <a href="https://drive.google.com/file/d/1iVxZC3UjAFYgAmE58BcbyNkO3mQmy-BG/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-2.5 text-xs">
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
