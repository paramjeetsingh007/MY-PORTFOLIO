import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // Status can be: "idle", "success", "error", or "email-error"
  const [formStatus, setFormStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Regular expression for validating email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email format is correct
    if (!validateEmail(formData.email)) {
      setFormStatus("email-error");
      return; // Stop execution if validation fails
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log("Email sent:", formData);
      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("EmailJS Error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="Contact" className="relative py-28 px-6 bg-[#080808] overflow-hidden">
      
      {/* --- BACKGROUND NEON AMBIENCE OVALS --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#39ff14]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center">
          <p className="text-[#39ff14] font-mono tracking-[0.2em] text-xs font-semibold mb-3 uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#39ff14] to-emerald-400">Epic</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed mb-14 text-sm md:text-base">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you as soon as possible!
          </p>
        </div>

        {/* --- MAIN GLASS CARD --- */}
        <div className="bg-[#121212]/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-zinc-700/50 transition duration-500 min-h-[420px] flex flex-col justify-center">
          
          {/* SUCCESS STATE */}
          {formStatus === "success" && (
            <div className="text-center py-6 flex flex-col items-center justify-center animate-fade-in">
              <div className="w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <svg className="w-full h-full" viewBox="0 0 52 52">
                  <circle
                    className="stroke-[#39ff14] stroke-[3] fill-none animate-[draw-circle_0.6s_ease-in-out_forwards]"
                    cx="26"
                    cy="26"
                    r="23"
                    strokeDasharray="145"
                    strokeDashoffset="145"
                  />
                  <path
                    className="stroke-[#39ff14] stroke-[4] stroke-linecap-round stroke-linejoin-round fill-none animate-[draw-check_0.4s_ease-in-out_0.6s_forwards]"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    strokeDasharray="48"
                    strokeDashoffset="48"
                  />
                </svg>
              </div>
              <h3 className="text-[#39ff14] text-3xl font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                Message Sent!
              </h3>
              <p className="text-zinc-400 mt-2 font-medium">I'll get back to you very soon.</p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-8 px-6 py-3 rounded-xl border border-zinc-800 text-zinc-400 hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff14]/5 transition-all duration-300 font-mono text-xs uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          )}

          {/* ERROR / FAILURE STATE */}
          {formStatus === "error" && (
            <div className="text-center py-6 flex flex-col items-center justify-center animate-fade-in">
              <div className="w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <svg className="w-full h-full" viewBox="0 0 52 52">
                  <circle
                    className="stroke-red-500 stroke-[3] fill-none animate-[draw-circle_0.6s_ease-in-out_forwards]"
                    cx="26"
                    cy="26"
                    r="23"
                    strokeDasharray="145"
                    strokeDashoffset="145"
                  />
                  <path
                    className="stroke-red-500 stroke-[4] stroke-linecap-round fill-none animate-[draw-check_0.4s_ease-in-out_0.6s_forwards]"
                    d="M16 16l20 20M36 16L16 36"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                  />
                </svg>
              </div>
              <h3 className="text-red-500 text-3xl font-extrabold tracking-wide">
                Delivery Failed!
              </h3>
              <p className="text-zinc-400 mt-2 max-w-sm">
                Something went wrong. Please check your network connection and try again.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-8 px-6 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all duration-300 font-mono text-xs uppercase tracking-wider"
              >
                Try Again
              </button>
            </div>
          )}

          {/* IDLE OR EMAIL-ERROR FORM STATE */}
          {(formStatus === "idle" || formStatus === "email-error") && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-zinc-500 mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Paramjeet Singh"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-[#161616]/60 px-4 py-3.5 text-white outline-none focus:border-[#39ff14] focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] transition-all duration-300 placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-zinc-500 mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="paramjeet@gmail.com"
                    value={formData.email}
                    onChange={(e) => {
                      if (formStatus === "email-error") setFormStatus("idle");
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    required
                    className={`w-full rounded-xl border bg-[#161616]/60 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 ${
                      formStatus === "email-error"
                        ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                        : "border-zinc-800 focus:border-[#39ff14] focus:shadow-[0_0_15px_rgba(57,255,20,0.1)]"
                    }`}
                  />
                  {formStatus === "email-error" && (
                    <span className="text-[11px] text-red-500 font-mono mt-2 flex items-center gap-1 animate-fade-in">
                      ⚠️ Invalid email format. Please check again.
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider text-zinc-500 mb-2 uppercase">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project, goals, or just say hello..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-[#161616]/60 px-4 py-3.5 text-white outline-none resize-none focus:border-[#39ff14] focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] transition-all duration-300 placeholder:text-zinc-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#39ff14] text-black font-bold py-4 rounded-xl tracking-wide shadow-[0_0_20px_rgba(57,255,20,0.25)] hover:shadow-[0_0_30px_#39ff14] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group text-sm uppercase"
              >
                Send Message 
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;