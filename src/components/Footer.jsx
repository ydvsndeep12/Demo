import React from "react";

const Footer = () => (
  <footer className="relative pt-10 pb-6 overflow-hidden" style={{ background: "#0c0c14" }}>
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #ec4899, transparent)" }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.04)" }} />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <p className="text-slate-600 text-xs sm:text-sm">
          © 2023 <span className="text-slate-400">Sandeep Yadav</span> · yadavsandeep1268@gmail.com
        </p>
        <p className="text-slate-700 text-xs">Built with React & Tailwind CSS</p>
        <a href="#hero" className="text-slate-600 hover:text-indigo-400 text-xs px-4 py-2 rounded-full transition hover:bg-indigo-500/10"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}>↑ Back to top</a>
      </div>
    </div>
  </footer>
);

export default Footer;
