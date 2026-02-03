import { useState, useEffect } from "react";

const topics = [
  { icon: "🌐", label: "HTML & CSS", color: "#e34c26" },
  { icon: "⚡", label: "JavaScript", color: "#f7df1e" },
  { icon: "⚛️", label: "React", color: "#61dafb" },
  { icon: "🟢", label: "Node.js", color: "#68a51c" },
  { icon: "🔷", label: "TypeScript", color: "#3178c6" },
  { icon: "🗄️", label: "Databases", color: "#f46b45" },
  { icon: "▲", label: "Next.js", color: "#fff" },
  { icon: "🧪", label: "Testing", color: "#99425b" },
];

const credits = [
  {
    name: "freeCodeCamp.org",
    role: "YouTube Channel",
    link: "https://www.youtube.com/@freecodecamp",
    color: "#f66535",
    desc: "Published the video tutorial",
  },
  {
    name: "Scrimba",
    role: "Course Creator",
    link: "https://scrimba.com",
    color: "#8B5CF6",
    desc: "Built the interactive course & content",
  },
];

const videoLink = "https://www.youtube.com/watch?v=LzMnsfqjzkA&t=4s";
const scrimbaPath = "https://scrimba.com/fullstack-path-c0";

// Animated floating particle
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full opacity-10"
      style={{
        background: "linear-gradient(135deg, #61dafb, #8B5CF6)",
        ...style,
      }}
    />
  );
}

// Tag pill
function TagPill({ color, icon, label, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 cursor-default hover:scale-105 hover:shadow-lg"
      style={{
        borderColor: color + "44",
        background: color + "0f",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${delay}ms`,
        boxShadow: "0 0 0px " + color + "00",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 16px ${color}33`;
        e.currentTarget.style.borderColor = color + "aa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0px ${color}00`;
        e.currentTarget.style.borderColor = color + "44";
      }}
    >
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span className="text-sm font-medium" style={{ color: color }}>
        {label}
      </span>
    </div>
  );
}

// Credit card
function CreditCard({ credit, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={credit.link}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border transition-all duration-300 overflow-hidden no-underline"
      style={{
        borderColor: hovered ? credit.color + "66" : "#2a2a3a",
        background: hovered ? credit.color + "08" : "#1a1a2a",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 30px ${credit.color}22` : "none",
        animationDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-lg font-bold"
            style={{ color: hovered ? credit.color : "#fff" }}
          >
            {credit.name}
          </span>
          <span
            className="text-xs transition-transform duration-300"
            style={{
              color: "#666",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            ↗
          </span>
        </div>
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: credit.color }}
        >
          {credit.role}
        </span>
        <p className="text-sm mt-2" style={{ color: "#8888a0" }}>
          {credit.desc}
        </p>
      </div>
    </a>
  );
}

// Link row
function LinkRow({ label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 no-underline"
      style={{
        background: hov ? "#ffffff08" : "transparent",
        borderBottom: "1px solid #2a2a3a",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span className="text-sm" style={{ color: "#aaa" }}>
        {label}
      </span>
      <span
        className="text-xs transition-all duration-200"
        style={{
          color: "#61dafb",
          transform: hov ? "translateX(4px)" : "translateX(0)",
        }}
      >
        Open →
      </span>
    </a>
  );
}

// Section header
function SectionHeader({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="h-px flex-1"
        style={{ background: "linear-gradient(90deg, #2a2a3a, transparent)" }}
      />
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#61dafb" }}
      >
        {children}
      </span>
      <div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(270deg, #2a2a3a, transparent)",
        }}
      />
    </div>
  );
}

// Raw markdown modal
function MarkdownModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);
  const raw = `# 🚀 Fullstack Development — Daily Practice

> My daily hands-on practice repo while learning fullstack web development from scratch.

---

## 🛠️ Tech Stack

\`HTML\` \`CSS\` \`JavaScript\` \`React\` \`Node.js\` \`TypeScript\` \`Databases\` \`Next.js\`

---

## 🙏 Credits

All credit for the curriculum and teaching goes to the original creators below.

| Source | Role | Link |
|--------|------|------|
| **freeCodeCamp.org** | YouTube Channel (Published the Tutorial) | [YouTube →](https://www.youtube.com/@freecodecamp) |
| **Scrimba** | Course Creator & Content | [Scrimba →](https://scrimba.com) |

---

## 📎 Links

- 🎬 **Video Tutorial** — [Become a Fullstack Developer from Scratch](https://www.youtube.com/watch?v=LzMnsfqjzkA&t=4s) on freeCodeCamp YouTube
- 📚 **Interactive Course** — [Scrimba Fullstack Path](https://scrimba.com/fullstack-path-c0)

---

## 📝 About

This repo is **only my daily practice and exercises**. It is not a course or tutorial.
If you want to learn, go to the [original video](https://www.youtube.com/watch?v=LzMnsfqjzkA&t=4s) and [Scrimba](https://scrimba.com) — they are the real source. 🙌`;

  const copy = () => {
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 rounded-2xl border overflow-hidden"
        style={{ background: "#131320", borderColor: "#2a2a3a", maxHeight: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div
          className="flex items-center justify-between px-5 py-4 sticky top-0 z-10"
          style={{ background: "#131320", borderBottom: "1px solid #2a2a3a" }}
        >
          <span className="text-sm font-semibold" style={{ color: "#fff" }}>
            📄 Raw README.md
          </span>
          <div className="flex gap-3">
            <button
              onClick={copy}
              className="text-xs px-4 py-1.5 rounded-lg font-semibold transition-all duration-200 border"
              style={{
                borderColor: copied ? "#4ade80" : "#61dafb44",
                color: copied ? "#4ade80" : "#61dafb",
                background: copied ? "#4ade8011" : "#61dafb0a",
              }}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
            <button
              onClick={onClose}
              className="text-lg leading-none"
              style={{ color: "#666" }}
            >
              ×
            </button>
          </div>
        </div>
        {/* body */}
        <div className="overflow-y-auto p-5" style={{ maxHeight: "calc(80vh - 60px)" }}>
          <pre
            className="text-xs leading-relaxed whitespace-pre-wrap break-words"
            style={{ color: "#aab", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {raw}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
  }, []);

  return (
    <div
      className="min-h-screen flex items-start justify-center px-4 py-10 relative overflow-hidden"
      style={{ background: "#0e0e1a", fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* floating particles */}
      <Particle style={{ width: 200, height: 200, top: "-60px", left: "-60px" }} />
      <Particle style={{ width: 140, height: 140, bottom: "10%", right: "-40px" }} />
      <Particle style={{ width: 80, height: 80, top: "40%", left: "8%" }} />

      {/* card */}
      <div
        className="relative w-full max-w-xl rounded-2xl border overflow-hidden transition-all duration-700"
        style={{
          background: "#131320",
          borderColor: "#2a2a3a",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* top glow bar */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #61dafb 30%, #8B5CF6 70%, transparent 100%)",
          }}
        />

        {/* hero */}
        <div className="px-7 pt-8 pb-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: "#61dafb11", border: "1px solid #61dafb22" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#61dafb" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#61dafb" }}
            >
              Daily Practice Repo
            </span>
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              background: "linear-gradient(135deg, #fff 40%, #61dafb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Fullstack Development
          </h1>
          <p className="text-sm" style={{ color: "#6b6b80" }}>
            Hands-on exercises, pushed daily
          </p>
        </div>

        {/* tech stack */}
        <div className="px-7 pb-6">
          <SectionHeader>Tech Stack</SectionHeader>
          <div className="flex flex-wrap gap-2 justify-center">
            {topics.map((t, i) => (
              <TagPill key={t.label} color={t.color} icon={t.icon} label={t.label} delay={i * 70} />
            ))}
          </div>
        </div>

        {/* credits */}
        <div className="px-7 pb-6">
          <SectionHeader>Credits</SectionHeader>
          <div className="flex flex-col gap-3">
            {credits.map((c, i) => (
              <CreditCard key={c.name} credit={c} index={i} />
            ))}
          </div>
        </div>

        {/* links */}
        <div className="px-7 pb-6">
          <SectionHeader>Links</SectionHeader>
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "#0e0e1a", border: "1px solid #2a2a3a" }}
          >
            <LinkRow label="🎬 Video Tutorial — freeCodeCamp YouTube" href={videoLink} />
            <LinkRow label="📚 Interactive Course — Scrimba Fullstack Path" href={scrimbaPath} />
          </div>
        </div>

        {/* about */}
        <div className="px-7 pb-6">
          <SectionHeader>About</SectionHeader>
          <p
            className="text-sm text-center leading-relaxed"
            style={{ color: "#6b6b80" }}
          >
            This repo is{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>
              only my daily practice
            </span>
            . Not a course or tutorial. For learning, visit the original video and Scrimba — they are the real source.{" "}
            <span>🙌</span>
          </p>
        </div>

        {/* bottom action */}
        <div
          className="px-7 py-5 flex justify-center"
          style={{ borderTop: "1px solid #2a2a3a", background: "#0e0e1a" }}
        >
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 border"
            style={{
              borderColor: "#61dafb33",
              color: "#61dafb",
              background: "#61dafb0a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#61dafb18";
              e.currentTarget.style.borderColor = "#61dafb66";
              e.currentTarget.style.boxShadow = "0 0 20px #61dafb22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#61dafb0a";
              e.currentTarget.style.borderColor = "#61dafb33";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>📄</span> Get Raw README.md
          </button>
        </div>
      </div>

      {/* modal */}
      <MarkdownModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}