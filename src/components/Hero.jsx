import React from "react";
import Typewriter from "./Typewriter";

import paramImg from "../img/param2.png";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#070708] text-white overflow-hidden px-6 py-12 md:py-20">
      {/* Background Matrix/Grid Overlay Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: Content & Text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* ✨ FIXED AVAILABLE BADGE FOR IPHONE ✨ */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 max-w-fit mb-8 whitespace-nowrap mt-5">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[2px] text-[#39ff14] uppercase font-bold pr-1">
              Available For Work
            </span>
          </div>

          {/* Intro */}
          <p className="text-zinc-400 font-mono text-base mb-3">
            Hey there, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Paramjeet
            <br />
            <span className="text-[#39ff14] drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]">
              Singh.
            </span>
          </h1>

          {/* Typewriter Code Box style */}
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 font-mono px-4 py-2.5 rounded-xl max-w-fit mb-6 text-sm md:text-base text-[#39ff14]">
            <span className="text-zinc-500">&gt;</span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Engineer",
                "React Specialist",
                "Problem Solver",
              ]}
            />
          </div>

          {/* Description */}
          <p className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            I build modern, scalable web applications — from intuitive user
            interfaces to secure backend systems. Passionate about solving
            real-world problems through clean and efficient code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollToSection("Projects")}
              className="px-7 py-3 rounded-xl bg-[#39ff14] text-black font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              View Projects →
            </button>

            <button
              onClick={() => scrollToSection("Contact")}
              className="px-7 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-300 font-medium hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff14]/5 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Grid Stats Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { num: "6+", label: "Client Projects Delivered" },
              { num: "1+", label: "Year Professional Experience" },
              { num: "2", label: "Companies Worked With" },
            ].map((stat, i) => (
              <div
                key={i}
                className="border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm p-4 rounded-xl relative group hover:border-zinc-700 transition-all"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#39ff14] tracking-tight">
                  {stat.num}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Image & Tech Ring Visuals */}
        <div className="lg:col-span-6 flex justify-center items-center relative mt-10 lg:mt-0">
          <div className="relative w-80 h-80 md:w-[440px] md:h-[440px] rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#39ff14]/10 blur-3xl animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-[#39ff14]/20 scale-105 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-dashed border-zinc-800 pointer-events-none" />

            <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-[#39ff14]/30 bg-zinc-900 relative z-10">
              <img
                src={paramImg}
                alt="Paramjeet Singh"
                className="w-full h-full object-cover object-top grayscale-0 contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* FLOATING TECH BADGES */}
            <div className="absolute -top-4 left-4 z-20 flex flex-col items-center gap-1 p-3 rounded-xl border border-zinc-800 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="text-cyan-400 text-xl font-bold">⚛</div>
              <span className="text-[10px] font-mono text-zinc-400">React.js</span>
            </div>

            <div className="absolute top-10 -right-6 z-20 flex flex-col items-center gap-1 p-3 rounded-xl border border-zinc-800 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="text-green-500 text-xl font-bold">⬢</div>
              <span className="text-[10px] font-mono text-zinc-400">Node.js</span>
            </div>

            <div className="absolute bottom-20 -left-8 z-20 flex flex-col items-center gap-1 p-3 rounded-xl border border-zinc-800 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="text-white text-sm font-black tracking-tighter">ex</div>
              <span className="text-[10px] font-mono text-zinc-400">Express.js</span>
            </div>

            <div className="absolute bottom-6 right-0 z-20 flex flex-col items-center gap-1 p-3 rounded-xl border border-zinc-800 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="text-emerald-500 text-xl font-bold">🍃</div>
              <span className="text-[10px] font-mono text-zinc-400">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Down Mouse Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center p-1">
          <div className="w-1 h-2 bg-[#39ff14] rounded-full animate-bounce" />
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[2px] text-zinc-500">
          Scroll Down
        </span>
      </div>
    </section>
  );
}

export default Hero;