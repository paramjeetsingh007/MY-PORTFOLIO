import React from "react";

function About() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="About" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#39ff14] font-mono text-sm mb-3">About me</div>

        <h2 className="text-4xl font-bold mb-12 text-white">Who I Am</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-gray-400 leading-8 mb-5">
              I'm a{" "}
              <span className="text-[#39ff14] font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in the MERN Stack. I enjoy building full-stack web
              applications with clean UI and functional backend systems.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              I have hands-on experience working in a company environment as
              well as an internship, where I contributed to real-world web
              applications using React, Node.js, Express, and MongoDB.
            </p>

            <p className="text-gray-400 leading-8">
              I’ve also built multiple personal projects available on GitHub,
              focusing on improving my skills in frontend development, APIs, and
              backend logic.
            </p>

            <p className="text-gray-400 leading-8 mt-3">
              When I'm not coding, you’ll usually find me debugging with a cup
              of tea ☕ and exploring new tech ideas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("Contact")}
                className="bg-[#39ff14] text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Hire Me
              </button>

              <button className="border border-[#39ff14] text-[#39ff14] px-6 py-3 rounded-xl hover:bg-[#39ff14] hover:text-black transition">
                Download CV
              </button>
            </div>
          </div>

          {/* Terminal Card */}
          <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-[#161616] px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <span className="ml-2 text-xs text-gray-500 font-mono">
                paramjeet.json
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-8 overflow-x-auto">
              <span className="text-gray-500">{"{"}</span>
              <br />
              <span className="ml-4 text-[#39ff14]">"name"</span>
              <span className="text-gray-500">:</span>
              <span className="text-orange-300"> "Paramjeet Singh"</span>,
              <br />
              <span className="ml-4 text-[#39ff14]">"role"</span>
              <span className="text-gray-500">:</span>
              <span className="text-orange-300"> "Full Stack Developer"</span>,
              <br />
              <span className="ml-4 text-[#39ff14]">"stack"</span>
              <span className="text-gray-500">:</span>
              <span className="text-white">
                {" "}
                ["React, Node, Express, MongoDB"]
              </span>
              ,
              <br />
              <span className="ml-4 text-[#39ff14]">"experience"</span>
              <span className="text-gray-500">:</span>
              <span className="text-orange-300">
                {" "}
                "Internship + Industry Experience"
              </span>
              ,
              <br />
              <span className="ml-4 text-[#39ff14]">"projects"</span>
              <span className="text-gray-500">:</span>
              <span className="text-white"> "Multiple GitHub Projects"</span>,
              <br />
              <span className="ml-4 text-[#39ff14]">"available"</span>
              <span className="text-gray-500">:</span>
              <span className="text-[#39ff14]"> true</span>,
              <br />
              <span className="ml-4 text-[#39ff14]">"Tea"</span>
              <span className="text-gray-500">:</span>
              <span className="text-orange-300"> "always"</span>
              <br />
              <span className="text-gray-500">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
