import React from "react";
import { EXPERIENCE } from "../data/constants";

function Experience() {
  return (
    <section id="Experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#39ff14] font-mono text-sm mb-3">
          Experience
        </div>

        <h2 className="text-4xl font-bold text-white mb-12">
          Work Experience
        </h2>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111] p-8 shadow-lg transition-all duration-300 hover:border-[#39ff14]/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(57,255,20,0.08)]"
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#39ff14]" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-[#39ff14] font-mono text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="self-start rounded-lg border border-[#39ff14]/30 bg-[#39ff14]/10 px-4 py-2 text-xs font-mono text-[#39ff14]">
                  {exp.year}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-gray-400 leading-7"
                  >
                    <span className="text-[#39ff14] mt-1 flex-shrink-0">
                      ▹
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;