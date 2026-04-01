import React, { useState, useRef, useEffect } from "react";

// ── Sandeep's Knowledge Base ──────────────────────────────────────────────────
const KB = {
  name: "Sandeep Yadav",
  role: "Full Stack Developer",
  email: "yadavsandeep1268@gmail.com",
  phone: "+91 9315717382",
  location: "Ghaziabad, Uttar Pradesh",
  linkedin: "linkedin.com/in/sandeep-yadav",
  github: "github.com/sandeep-yadav",

  education: [
    { degree: "B.Tech CSE", college: "Raj Kumar Goel Institute of Technology, Ghaziabad", year: "2021–2025", score: "74%" },
    { degree: "10+2 (CBSE)", school: "M.J.R.P. Public School, UP", year: "2020", score: "84%" },
  ],

  experience: {
    role: "Web Development Intern",
    company: "CODTECH IT SOLUTIONS",
    period: "Aug 2025 – Sept 2025",
    work: ["Built responsive web apps with HTML, CSS, JavaScript, React", "Improved UI/UX", "Integrated APIs", "Optimized performance", "Team collaboration"],
  },

  skills: {
    languages: ["Java", "C", "JavaScript", "Python"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "EJS"],
    backend: ["Node.js", "Express", "REST API"],
    databases: ["MongoDB", "MySQL", "SQL"],
    tools: ["VS Code", "GitHub", "Git"],
    soft: ["Problem-solving", "Creativity", "Self-motivation", "Teamwork", "Communication"],
  },

  projects: [
    {
      name: "WonderLust",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "EJS", "MongoDB", "Express"],
      date: "July 2025",
      desc: "Full-featured accommodation booking platform with villa/room listings, user accounts, property management via MongoDB.",
    },
    {
      name: "Blog App",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
      date: "Oct 2025",
      desc: "Scalable blogging platform — users can create, read, consume posts. ReactJS frontend, Node.js backend, JWT auth.",
    },
    {
      name: "ATM Interface System",
      tech: ["Java", "OOP", "Console UI"],
      date: "Dec 2024",
      desc: "Java-based ATM simulation — withdrawal, deposit, balance inquiry, money transfer, secure PIN login.",
    },
  ],

  certifications: [
    "Programming in Java — NPTEL",
    "Introduction to Web Development — Coursera",
    "Prompt Engineering for ChatGPT — Coursera",
  ],

  profiles: ["CodeChef", "LeetCode", "GeeksForGeeks"],

  availability: "Actively looking for full-time and internship opportunities in web development.",
};

// ── AI Response Engine ────────────────────────────────────────────────────────
const getResponse = (input) => {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|good\s*(morning|evening|afternoon))/.test(q))
    return `Hi there! 👋 I'm Sandeep's AI assistant. I can tell you about his skills, projects, experience, education, or how to hire him. What would you like to know?`;

  // Who are you / about
  if (/who (are you|is sandeep|is he)|about (you|sandeep|yourself)/.test(q))
    return `I'm the AI assistant for **${KB.name}**, a ${KB.role} based in ${KB.location}. He's a B.Tech CSE graduate (2025) from RKGIT Ghaziabad with hands-on experience in full-stack web development using React, Node.js, and MongoDB. He interned at CODTECH IT SOLUTIONS and has built 3 real-world projects. 🚀`;

  // Skills
  if (/skill|tech|stack|know|language|framework|tool/.test(q))
    return `**Sandeep's Tech Stack:**\n\n🔹 **Languages:** ${KB.skills.languages.join(", ")}\n🔹 **Frontend:** ${KB.skills.frontend.join(", ")}\n🔹 **Backend:** ${KB.skills.backend.join(", ")}\n🔹 **Databases:** ${KB.skills.databases.join(", ")}\n🔹 **Tools:** ${KB.skills.tools.join(", ")}\n🔹 **Soft Skills:** ${KB.skills.soft.join(", ")}`;

  // React
  if (/react/.test(q))
    return `Yes! Sandeep is proficient in **React.js**. He used it in his Blog App project — building the full frontend with React, connecting to a Node.js + Express backend via REST APIs, and implementing JWT-based authentication. 💻`;

  // Node / backend
  if (/node|express|backend|server|api/.test(q))
    return `Sandeep has solid **Node.js & Express** experience. He built REST APIs for both WonderLust (accommodation platform) and Blog App. He's comfortable with routing, middleware, authentication, and connecting to MongoDB. 🖥️`;

  // MongoDB / database
  if (/mongo|database|db|sql|mysql/.test(q))
    return `Sandeep works with both **SQL and NoSQL** databases:\n\n🔹 **MongoDB** — used in WonderLust & Blog App with Mongoose for schema design\n🔹 **MySQL / SQL** — covered in academics and personal practice\n🔹 Comfortable with CRUD operations, relationships, and query optimization.`;

  // Java
  if (/java\b/.test(q))
    return `Sandeep has strong **Java** skills — certified via NPTEL. He built an ATM Interface System in Java using OOP principles (classes, inheritance, encapsulation). He's comfortable with data structures and algorithms in Java. ☕`;

  // Projects
  if (/project|built|made|work|portfolio/.test(q))
    return `**Sandeep's Projects:**\n\n1️⃣ **WonderLust** (July 2025) — Accommodation booking platform. Stack: Node.js, EJS, MongoDB, Express\n\n2️⃣ **Blog App** (Oct 2025) — Blogging platform with JWT auth. Stack: React, Node.js, MongoDB, REST API\n\n3️⃣ **ATM Interface System** (Dec 2024) — Java-based ATM simulation with secure PIN login\n\nAll projects are available on his GitHub! 🔗`;

  // WonderLust
  if (/wonderlust|wonder lust|accommodation|booking/.test(q))
    return `**WonderLust** is Sandeep's accommodation booking platform (July 2025).\n\n✅ Full villa/room listings with detailed info\n✅ User account management via MongoDB & Mongoose\n✅ Dynamic pages with EJS templates\n✅ Built with Node.js, Express, MongoDB\n\nIt showcases his full-stack backend skills! 🏡`;

  // Blog App
  if (/blog/.test(q))
    return `**Blog App** (Oct 2025) is a full-stack blogging platform:\n\n✅ ReactJS frontend\n✅ Node.js + Express backend\n✅ MongoDB database\n✅ JWT authentication & authorization\n✅ REST API architecture\n\nUsers can Create, Read, and Consume blog posts. Great showcase of his MERN stack skills! 📝`;

  // ATM
  if (/atm|bank/.test(q))
    return `**ATM Interface System** (Dec 2024) is a Java console application:\n\n✅ Withdrawal, Deposit, Balance Inquiry, Money Transfer\n✅ Secure login with User ID + PIN\n✅ Built using OOP principles in Java\n\nDemonstrates his core Java and problem-solving skills! 💳`;

  // Experience / internship
  if (/experience|intern|work(ed)?|job|employ/.test(q))
    return `**Work Experience:**\n\n💼 **${KB.experience.role}** at ${KB.experience.company}\n📅 ${KB.experience.period}\n\n✅ ${KB.experience.work.join("\n✅ ")}`;

  // Education
  if (/educat|college|degree|school|study|studied|btech|b\.tech|cgpa|percent/.test(q))
    return `**Education:**\n\n🎓 **${KB.education[0].degree}** — ${KB.education[0].college}\n   Score: ${KB.education[0].score} | ${KB.education[0].year}\n\n🏫 **${KB.education[1].degree}** — ${KB.education[1].school}\n   Score: ${KB.education[1].score} | ${KB.education[1].year}`;

  // Certifications
  if (/certif|course|nptel|coursera/.test(q))
    return `**Certifications:**\n\n🏅 ${KB.certifications.join("\n🏅 ")}\n\nThese reflect his commitment to continuous learning! 📚`;

  // Hire / available / opportunity
  if (/hire|availab|opportunit|recruit|looking|open to|job|position|role/.test(q))
    return `**${KB.name} is actively available!** 🟢\n\n${KB.availability}\n\n📧 **Email:** ${KB.email}\n📞 **Phone:** ${KB.phone}\n📍 **Location:** ${KB.location}\n\nFeel free to reach out — he responds quickly! 🚀`;

  // Contact
  if (/contact|email|phone|reach|connect|message/.test(q))
    return `**Contact Sandeep:**\n\n📧 ${KB.email}\n📞 ${KB.phone}\n📍 ${KB.location}\n🔗 LinkedIn & GitHub available on this portfolio\n\nHe's always open to new opportunities and collaborations! 💬`;

  // Salary / CTC
  if (/salary|ctc|pay|compensation|package/.test(q))
    return `Sandeep is open to discussing compensation based on the role and responsibilities. Please reach out directly at **${KB.email}** or **${KB.phone}** to discuss further. 💼`;

  // Freelance / client
  if (/freelanc|client|project cost|hire for|build.*website|build.*app/.test(q))
    return `Sandeep is open to **freelance projects**! 🎯\n\nHe can help with:\n✅ Full-stack web applications (React + Node.js)\n✅ REST API development\n✅ Database design (MongoDB / MySQL)\n✅ UI/UX implementation\n\nContact him at **${KB.email}** to discuss your project requirements and timeline!`;

  // Strengths
  if (/strength|best at|good at|specializ|expert/.test(q))
    return `**Sandeep's Key Strengths:**\n\n⚡ Full-stack development (MERN stack)\n⚡ Building REST APIs with Node.js & Express\n⚡ React frontend development\n⚡ MongoDB database design\n⚡ Java & OOP fundamentals\n⚡ Problem-solving & quick learner\n⚡ Team collaboration`;

  // Why hire
  if (/why (hire|choose|pick|select)|reason to hire/.test(q))
    return `**Why hire Sandeep?** 🌟\n\n✅ Strong MERN stack skills with real project experience\n✅ Internship experience at CODTECH IT SOLUTIONS\n✅ 3 completed real-world projects\n✅ Certified in Java (NPTEL) & Web Dev (Coursera)\n✅ Fast learner, self-motivated, team player\n✅ Actively seeking opportunities — ready to start!\n\nReach him at ${KB.email} 🚀`;

  // Coding profiles
  if (/leetcode|codechef|geeks|competitive|dsa|algorithm/.test(q))
    return `Sandeep is active on competitive programming platforms:\n\n👨‍💻 **CodeChef** — competitive programming\n⚡ **LeetCode** — DSA problem solving\n🌿 **GeeksForGeeks** — algorithms & data structures\n\nLinks are available in the portfolio! 🏅`;

  // Location / remote
  if (/locat|remote|relocat|onsite|hybrid|where/.test(q))
    return `Sandeep is based in **Ghaziabad, Uttar Pradesh** 📍\n\nHe is open to:\n✅ Remote work\n✅ On-site (Delhi NCR region)\n✅ Hybrid roles\n✅ Relocation for the right opportunity`;

  // Thanks / bye
  if (/thank|bye|goodbye|see you|great|awesome|nice/.test(q))
    return `You're welcome! 😊 Feel free to ask anything else about Sandeep. You can also reach him directly at **${KB.email}**. Have a great day! 👋`;

  // Default
  return `I'm not sure about that specific question, but I can help you with:\n\n💡 Sandeep's **skills & tech stack**\n💡 His **projects** (WonderLust, Blog App, ATM System)\n💡 **Work experience** & internship\n💡 **Education** & certifications\n💡 **Hiring / contact** information\n💡 **Freelance** availability\n\nWhat would you like to know? 😊`;
};

// ── Suggested Questions ───────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What are your skills?",
  "Tell me about your projects",
  "Are you available to hire?",
  "What is your experience?",
  "Can you do freelance work?",
  "How to contact you?",
];

// ── Chat Message ──────────────────────────────────────────────────────────────
const Message = ({ msg }) => (
  <div className={`flex gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
    {msg.from === "bot" && (
      <div className="w-7 h-7 rounded-fullfrom-violet-600 to-pink-500 flex items-center justify-center text-xs shrink-0 mt-1">🤖</div>
    )}
    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
      msg.from === "user"
        ? "bg-violet-600 text-white rounded-br-sm"
        : "bg-white/5 border border-white/10 text-gray-300 rounded-bl-sm"
    }`}>
      {msg.text.split("**").map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
      )}
    </div>
    {msg.from === "user" && (
      <div className="w-7 h-7 rounded-full bg-violet-700 flex items-center justify-center text-xs shrink-0 mt-1">👤</div>
    )}
  </div>
);

// ── Main Chatbot Component ────────────────────────────────────────────────────
const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi! 👋 I'm Sandeep's AI assistant.\n\nI can answer questions about his **skills**, **projects**, **experience**, and **availability**.\n\nHow can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text) => {
    const q = text || input;
    if (!q.trim()) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: getResponse(q) }]);
    }, 700 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shimmer-btn shadow-2xl shadow-violet-500/40 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${open ? "rotate-90" : ""}`}
        title="Chat with Sandeep's AI"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 z-50 w-80 md:w-96 transition-all duration-500 ${
        open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
      }`}>
        <div className="bg-[#111111] border border-violet-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/20 flex flex-col" style={{ height: "520px" }}>

          {/* Header */}
          <div className=" from-violet-900/80 to-pink-900/40 border-b border-white/10 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full  from-violet-500 to-pink-500 flex items-center justify-center text-lg">🤖</div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">Sandeep's AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs">Online · Ask me anything</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white transition text-lg">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg, i) => <Message key={i} msg={msg} />)}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-center">
                <div className="w-7 h-7 rounded-full  from-violet-600 to-pink-500 flex items-center justify-center text-xs">🤖</div>
                <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
              {SUGGESTIONS.map((s, i) => (
                <button key={i} onClick={() => send(s)}
                  className="shrink-0 text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full hover:bg-violet-500/20 transition whitespace-nowrap">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about skills, projects, hiring..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 transition"
            />
            <button onClick={() => send()}
              className="w-10 h-10 shimmer-btn rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition shrink-0">
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
