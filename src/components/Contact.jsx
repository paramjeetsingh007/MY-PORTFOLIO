import React, { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "paramjeetsingh121223@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="Contact" className="relative py-28 px-6 bg-[#080808] text-white overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#39ff14]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-[#39ff14] uppercase font-semibold">
            Open for New Projects & Collabs
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
          Let’s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#39ff14] to-emerald-400">
            Remarkable Together.
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mt-6 mb-12 leading-relaxed">
          Reach out directly via email, connect professionally on LinkedIn, or shoot a quick DM on Instagram.
        </p>

        {/* 3-Column Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-[#39ff14]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-[#39ff14]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <button
                  onClick={handleCopy}
                  className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Email Address</p>
              <a
                href={`mailto:${email}`}
                className="text-white font-medium text-sm break-all mt-1 block hover:text-[#39ff14] transition-colors"
              >
                {email}
              </a>
            </div>
            <a
              href={`mailto:${email}`}
              className="mt-6 text-xs font-mono text-[#39ff14] flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Send an email <span>→</span>
            </a>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/paramjeetsingh007/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-[#0077b5]/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-[#0077b5]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </span>
                <span className="text-zinc-500 text-xs group-hover:text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Professional</p>
              <p className="text-white font-medium text-base mt-1 group-hover:text-[#0077b5] transition-colors">
                Paramjeet Singh
              </p>
            </div>
            <span className="mt-6 text-xs font-mono text-zinc-400 group-hover:text-[#0077b5] flex items-center gap-1 group-hover:gap-2 transition-all">
              Connect on LinkedIn <span>→</span>
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/param.jeetsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-pink-500/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-pink-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                  </svg>
                </span>
                <span className="text-zinc-500 text-xs group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Social / DM</p>
              <p className="text-white font-medium text-base mt-1 group-hover:text-pink-400 transition-colors">
                @param.jeetsingh23
              </p>
            </div>
            <span className="mt-6 text-xs font-mono text-zinc-400 group-hover:text-pink-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              Drop a DM <span>→</span>
            </span>
          </a>
        </div>

        {/* Primary Action Button */}
        <div className="mt-12">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#39ff14] text-black font-mono font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_#39ff14] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Say Hello Directly →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;