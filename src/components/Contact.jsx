import React, { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Send,
  CheckCircle,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import CodeWave from "./CodeWave";

const Contact = () => {
  const email = "aungminko.dev@gmail.com";
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_vgebn77",
        "template_s0jd3hz",
        form.current,
        "7xvvEzkpQ5K6aNivV"
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section
      className="py-32 bg-slate-950 relative overflow-hidden"
      id="contact"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-500 font-mono mb-4 text-lg">
            04. What’s Next?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* ဘယ်ဘက်ခြမ်း: Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-slate-500 font-mono text-sm uppercase tracking-wider">
                    Email Me
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-white text-xl font-medium hover:text-blue-400 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-slate-500 font-mono text-sm uppercase tracking-wider">
                    Location
                  </h4>
                  <span className="text-white text-xl font-medium">
                    Yangon, Myanmar
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Send size={28} />
                </div>
                <div>
                  <h4 className="text-slate-500 font-mono text-sm uppercase tracking-wider">
                    Social Media
                  </h4>
                  <div className="flex gap-6 mt-2 text-slate-300">
                    <a
                      href="https://facebook.com/..."
                      target="_blank"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/..."
                      target="_blank"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/..."
                      target="_blank"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ညာဘက်ခြမ်း: Contact Form */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="h-full flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSent
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                } disabled:opacity-50`}
              >
                {isSending ? (
                  "Sending..."
                ) : isSent ? (
                  <>
                    <CheckCircle size={22} /> Message Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-center items-center">
          <p className="text-slate-600 font-mono text-sm">
            Designed & Built by Aung Min Ko © 2025
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <CodeWave />
      </div>
    </section>
  );
};

export default Contact;
