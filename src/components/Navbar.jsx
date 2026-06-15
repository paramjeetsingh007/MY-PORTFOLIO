import React from "react";
import { NAV_LINKS } from "../data/constants";
import { IconMenu, IconX } from "./Icons";

export default function Navbar({
  menuOpen,
  setMenuOpen,
  activeSection,
  scrollTo,
}) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          className="font-mono text-[#39ff14] font-bold text-xl"
        >
          {"<PS/>"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`transition text-sm font-semibold hover:text-[#39ff14] ${
                activeSection === link
                  ? "text-[#39ff14]"
                  : "text-gray-400"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop CV Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="bg-[#39ff14] text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-zinc-800 px-6 py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  scrollTo(link);
                  setMenuOpen(false);
                }}
                className={`text-left transition ${
                  activeSection === link
                    ? "text-[#39ff14]"
                    : "text-gray-400"
                }`}
              >
                {link}
              </button>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-3 bg-[#39ff14] text-black px-5 py-3 rounded-lg text-center font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}