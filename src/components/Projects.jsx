import React from "react";
import { PROJECTS } from "../data/constants";
import { IconExternal, IconGithub } from "./Icons";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="py-24 px-6 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-[#39ff14] font-mono text-sm mb-3">
         Projects
        </div>

        <h2 className="text-4xl font-bold text-white mb-12">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`relative rounded-2xl border p-7 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                project.highlight
                  ? "border-[#39ff14]/40 shadow-[0_0_25px_rgba(57,255,20,0.08)]"
                  : "border-zinc-800"
              }`}
            >
              {/* Featured Badge */}
              {project.highlight && (
                <div className="absolute top-4 right-4 bg-[#39ff14] text-black text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider">
                  FEATURED
                </div>
              )}

              {/* Emoji */}
              <div className="text-4xl mb-4">
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-7 mb-5 min-h-[90px]">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {/* <div className="flex items-center gap-5 mt-auto">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#39ff14] text-sm font-medium hover:opacity-80 transition"
                  >
                    <IconExternal className="w-4 h-4" />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
                >
                  <IconGithub className="w-4 h-4" />
                  Code
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}