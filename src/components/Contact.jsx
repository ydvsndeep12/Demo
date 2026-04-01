import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ── Replace these with your EmailJS credentials ──
const SERVICE_ID  = "service_vaavdbq";
const TEMPLATE_ID = "template_6kbqmal";
const PUBLIC_KEY  = "6-A36PZP3c4KVQbJq";

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

const Contact = () => {
  const [ref, inView] = useInView();
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-26 overflow-hidden relative"
      style={{ background: "#0c0c14" }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="section-label mx-auto mb-3">Get In Touch</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
          </div>

          {/* Card */}
          <div className="rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(18,18,30,0.95), rgba(236,72,153,0.04))",
              border: "1px solid rgba(99,102,241,0.18)",
              boxShadow: "0 20px 60px rgba(99,102,241,0.07)"
            }}>

            {/* Left — Contact Info */}
            <div className={`flex-1 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Open to full-time roles & freelance projects. Reach out anytime!
              </p>

              <div className="space-y-3 mb-5">
                {[
                  { icon: "📧", label: "Email", value: "yadavsandeep1268@gmail.com", href: "mailto:yadavsandeep1268@gmail.com", color: "#6366f1" },
                  { icon: "📞", label: "Phone", value: "+91 9315717382", href: "tel:+919315717382", color: "#8b5cf6" },
                  { icon: "📍", label: "Location", value: "Ghaziabad, Uttar Pradesh", href: "#", color: "#ec4899" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{item.label}</p>
                      <p className="text-white text-xs font-semibold group-hover:text-indigo-400 transition">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-2 flex-wrap">
                {[["LinkedIn","https://www.linkedin.com/in/ydvsndeep12/","#0077b5"],["GitHub","https://github.com/ydvsndeep12 ","#e2e8f0"],["CodeChef","https://www.codechef.com/users/ydvsndeep12","#f97316"],["LeetCode","https://leetcode.com/u/ydvsndeep12/","#eab308"],["GFG","https://www.geeksforgeeks.org/profile/yadavsandit0a","#22c55e"]].map(([s,h,c]) => (
                  <a key={s} href={h} target="_blank" rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                    style={{ color: "#64748b", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={e => { e.target.style.color = c; e.target.style.borderColor = `${c}40`; }}
                    onMouseLeave={e => { e.target.style.color = "#64748b"; e.target.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(99,102,241,0.12)" }} />

            {/* Right — Form */}
            <div className={`flex-1 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[["text","FirstName","from_firstname"],["text","LastName","from_lastname"]].map(([t,p,n]) => (
                    <input key={p} type={t} name={n} placeholder={p} required
                      className="w-full px-3 py-2.5 rounded-xl text-white text-xs placeholder-slate-600 focus:outline-none transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(99,102,241,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
                  ))}
                </div>
                <input type="email" name="from_email" placeholder="Email" required
                  className="w-full px-3 py-2.5 rounded-xl text-white text-xs placeholder-slate-600 focus:outline-none transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={e => { e.target.style.borderColor = "rgba(99,102,241,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
                <textarea rows={4} name="message" placeholder="Your Message" required
                  className="w-full px-3 py-2.5 rounded-xl text-white text-xs placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={e => { e.target.style.borderColor = "rgba(99,102,241,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
                {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                <button type="submit" disabled={sending}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={sent
                    ? { background: "#16a34a", boxShadow: "0 4px 16px rgba(22,163,74,0.3)" }
                    : { background: "linear-gradient(135deg,#4f46e5,#7c3aed,#9333ea)", backgroundSize: "200% auto", animation: "shimmerMove 3s linear infinite", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}>
                  {sending ? "Sending..." : sent ? "✓ Message Sent!" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
