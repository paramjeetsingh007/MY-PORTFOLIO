import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#030303] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: Branding & Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-sm font-medium tracking-wide text-zinc-300">
            Designed & Developed by <span className="text-[#39ff14] font-semibold">Paramjeet Singh</span>
          </p>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Right: Clean Neon Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/paramjeetsingh007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 text-xl transition-all duration-200 hover:text-[#39ff14] hover:drop-shadow-[0_0_10px_#39ff14] hover:-translate-y-0.5"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/paramjeetsingh007/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 text-xl transition-all duration-200 hover:text-[#39ff14] hover:drop-shadow-[0_0_10px_#39ff14] hover:-translate-y-0.5"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/param.jeetsingh23/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 text-xl transition-all duration-200 hover:text-[#39ff14] hover:drop-shadow-[0_0_10px_#39ff14] hover:-translate-y-0.5"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;