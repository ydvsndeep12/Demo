import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/wanderLust_img.png";
import img2 from "../assets/blog_image.png";
import img3 from "../assets/atm_img.png";

const projects = [
  {
    category: "Full Stack", title: "WonderLust", image: img1,
    tags: ["Node.js", "EJS", "MongoDB", "Express"],
    date: "July 2025",
    desc: "Full-featured accommodation booking platform with villa listings, user accounts, and MongoDB-powered data management.",
    source: "https://github.com/ydvsndeep12/WonderLust", color: "from-cyan-500/20 to-blue-600/10",
  },
  {
    category: "Full Stack", title: "Blog App", image: img2,
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    date: "Oct 2025",
    desc: "Scalable blogging platform with ReactJS frontend, Node.js + Express backend, REST APIs, and JWT authentication.",
    source: "https://github.com/ydvsndeep12/Blog-App", color: "from-violet-500/20 to-purple-600/10",
  },
  {
    category: "Java", title: "ATM Interface System", image: img3,
    tags: ["Java", "OOP", "Console UI"],
    date: "Dec 2024",
    desc: "Java-based ATM simulation with withdrawal, deposit, balance inquiry, and secure PIN-based login system.",
    source: "https://github.com/ydvsndeep12/ATM-Interface", color: "from-orange-500/20 to-red-600/10",
  },
];

const filters = ["All", "Full Stack", "Java"];

const useInView = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const ProjectCard = ({ title, image, tags, category, date, desc, source, color, index, inView }) => (
  <div
    className={`group relative  ${color} border border-white/10 hover:border-violet-500/50 rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10`}
    style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(50px)", transitionDelay: `${index * 0.15}s` }}
  >
    {/* Image */}
    <div className="relative overflow-hidden h-36">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
      <div className="absolute inset-0  from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-3">
        <a href={source} className="w-full text-center bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium py-1.5 rounded-lg transition translate-y-4 group-hover:translate-y-0 duration-500">
          View Source Code →
        </a>
      </div>
      <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm border border-white/10 text-violet-300 text-xs font-medium px-2 py-0.5 rounded-full">{category}</div>
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm border border-white/10 text-gray-400 text-xs px-2 py-0.5 rounded-full">{date}</div>
    </div>

    <div className="p-4">
      <h3 className="text-white font-bold text-base mb-1 group-hover:text-violet-300 transition">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{desc}</p>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full group-hover:border-violet-500/30 transition">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Works = () => {
  const [active, setActive] = useState("All");
  const [ref, inView] = useInView();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="works" ref={ref} className="py-10 overflow-hidden" style={{ background: "#0c0c14" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-xs sm:text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">My Projects</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">Real-world projects built with modern technologies.</p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex justify-center gap-3 mb-10 flex-wrap transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                active === f
                  ? "shimmer-btn text-white shadow-lg shadow-violet-500/30"
                  : "glass text-gray-400 hover:text-white hover:border-violet-500/30"
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
