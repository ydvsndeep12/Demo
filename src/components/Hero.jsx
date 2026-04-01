import React, { useEffect, useState, useRef } from "react";
import img from "../assets/profile.png"

const ROLES = ["Full Stack Developer", "React Developer", "Node.js Developer", "Problem Solver"];

const Particle = ({ style }) => (
  <div className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-0"
    style={{ animation: `particleDrift ${style.dur}s ease-out ${style.delay}s infinite`, ...style }} />
);

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const targets = [5, 3, 2025];
  const ref = useRef();

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Fade in on mount
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  // Count up animation
  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(targets.map((t) => Math.min(Math.round((t / steps) * step), t)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    dur: 4 + Math.random() * 4,
    delay: Math.random() * 4,
    left: `${Math.random() * 100}%`,
    top: `${40 + Math.random() * 50}%`,
  }));

  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] py-3 flex items-center overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" style={{ animation: "float 5s ease-in-out infinite 1s" }} />

      {/* Particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Left */}
          <div className={`flex-1 w-full max-w-2xl transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text-animate">Sandeep Yadav</span>
            </h1>

            {/* Typing role */}
            <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-5 h-8 sm:h-10">
              <span className="cursor-blink">{displayed}</span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              Specializing in <span className="text-violet-400 font-medium">React</span>,{" "}
              <span className="text-violet-400 font-medium">Node.js</span>, and{" "}
              <span className="text-violet-400 font-medium">MongoDB</span>. I build fast, scalable,
              user-friendly web applications with clean code and great UX.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm mb-6 flex flex-wrap gap-2">
              <span className="glass px-3 py-1 rounded-full">📍 Ghaziabad, UP</span>
              <span className="glass px-3 py-1 rounded-full">📞 +91 9315717382</span>
              <span className="glass px-3 py-1 rounded-full">🎓 B.Tech CSE · RKGIT</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#works" className="shimmer-btn text-white font-medium px-5 sm:px-7 py-3 sm:py-3.5 text-sm rounded-full transition hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/30">
                View My Projects ↓
              </a>
              <a href="mailto:yadavsandeep1268@gmail.com"
                className="glass hover:border-violet-500/50 text-white font-medium px-5 sm:px-7 py-3 sm:py-3.5 text-sm rounded-full transition hover:scale-105 active:scale-95">
                Contact Me →
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-white/10">
              {[
                { value: counts[0], suffix: "+", label: "Projects Built" },
                { value: counts[1], suffix: "+", label: "Certifications" },
                { value: counts[2], suffix: "", label: "B.Tech Grad" },
              ].map((stat, i) => (
                <div key={i} className="animate-countUp" style={{ animationDelay: `${i * 0.2}s` }}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}{stat.suffix}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative animate-floatSlow">

              {/* Spinning ring */}
              <div className="absolute -inset-4 rounded-full border border-violet-500/20 animate-spinSlow" />
              <div className="absolute -inset-8 rounded-full border border-pink-500/10" style={{ animation: "spinSlow 12s linear infinite reverse" }} />

              {/* Glow */}
              <div className="absolute inset-0  from-violet-600 via-pink-500 to-violet-800 blur-3xl opacity-30 scale-110 -z-10 rounded-3xl" />

              {/* Gradient border */}
              <div className=" rounded-3xl from-violet-500 via-pink-400 to-violet-700 animate-borderGlow">
                <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-[#0a0a0a]">
                  <img src={img} alt="Sandeep Yadav"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                </div>
              </div>

              {/* Badge — bottom left */}
              <div className="absolute -bottom-5 -left-5 glass shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 animate-fadeInUp delay-500">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white text-lg">💻</div>
                <div>
                  <p className="text-white text-sm font-semibold">Full Stack Dev</p>
                  <p className="text-gray-500 text-xs">React · Node · MongoDB</p>
                </div>
              </div>

              {/* Badge — top right */}
              <div className="absolute -top-4 -right-4 glass border-green-500/30 shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 animate-fadeInUp delay-600">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Open to Work</span>
              </div>

              {/* Floating dots */}
              <div className="absolute top-10 -left-6 w-3 h-3 bg-violet-500 rounded-full opacity-70 animate-pulse" />
              <div className="absolute bottom-20 -right-5 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-pulse" />
              <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-violet-400 rounded-full" style={{ animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
