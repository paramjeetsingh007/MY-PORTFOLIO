import React from "react";
import { SKILLS } from "../data/constants";

function Skills() {
  return (
    <section id="Skills" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-[#39ff14] font-mono text-sm mb-3">
          Skills
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-12">
          Tech Stack
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 hover:border-[#39ff14]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39ff14] animate-pulse" />

                <span className="text-[#39ff14] font-mono text-sm font-semibold uppercase tracking-wide">
                  {category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20 hover:bg-[#39ff14] hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;