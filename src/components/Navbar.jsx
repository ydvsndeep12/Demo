import React, { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: "rgba(5,5,8,0.85)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(99,102,241,0.12)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.4)"
      } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-display text-xl font-black text-white group-hover:text-gradient transition-all duration-300">Portfolio</span>
          <span className="text-2xl font-black text-gradient"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setActive(l.href)}
              className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300"
              style={active === l.href ? {
                color: "white",
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                border: "1px solid rgba(99,102,241,0.3)"
              } : { color: "#94a3b8" }}
              onMouseEnter={e => { if (active !== l.href) e.target.style.color = "white"; }}
              onMouseLeave={e => { if (active !== l.href) e.target.style.color = "#94a3b8"; }}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="mailto:yadavsandeep1268@gmail.com"
          className="hidden md:inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white transition p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(5,5,8,0.95)", borderTop: "1px solid rgba(99,102,241,0.1)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => { setMenuOpen(false); setActive(l.href); }}
              className="text-slate-400 hover:text-white px-4 py-2.5 rounded-xl text-sm transition hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <a href="mailto:yadavsandeep1268@gmail.com"
            className="btn-primary text-center px-4 py-2.5 rounded-xl text-sm mt-2">
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
