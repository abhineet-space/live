import { useState, useCallback } from "react";
import { FileDown, Mail } from "lucide-react";

import Clock from "../components/Clock";
import GlassCard from "../components/GlassCard";
import ParticleCanvas from "../components/ParticleCanvas";

interface HomePageProps {
  hire?: boolean;
}

export default function HomePage({ hire = false }: HomePageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("abhineetsnu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);
  return (
    <>
      <ParticleCanvas />
      <GlassCard tiltDivisor={25}>
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="status-dot"></span>
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-blue-400 uppercase">
              {hire ? "Available for Hire" : "Status: In Progress"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter gradient-title leading-[1.05] uppercase">
            {hire ? (
              <>
                Crafting <br />
                Digital <br />
                Experiences
              </>
            ) : (
              <>
                Something Great <br />
                is Brewing
              </>
            )}
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-1 tracking-tight">
            Abhineet Kumar
          </h2>
          {hire ? (
            <p className="text-gray-400 font-light mt-1 text-base sm:text-lg italic">
              Full Stack Developer
            </p>
          ) : (
            <p className="text-gray-400 font-light text-lg italic">
              Building my digital space.
            </p>
          )}
        </div>

        {hire && (
          <div className="space-y-3 mb-6">
            <a
              href="/resume.pdf"
              download="Abhineet_Kumar_Resume"
              className="btn-premium cursor-pointer p-4 sm:p-5 rounded-2xl flex items-center justify-center group px-5 sm:px-6 w-full"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <FileDown className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-medium tracking-wide text-sm sm:text-base">
                  Download Resume
                </span>
              </div>
            </a>
          </div>
        )}

        <div className="space-y-4 mb-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
            Connect with me
          </p>

          <div onClick={handleCopy} className="space-y-3">
            <div className="btn-premium cursor-pointer p-4 sm:p-5 rounded-2xl flex items-center justify-center group px-5 sm:px-6 w-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium tracking-wide text-sm sm:text-base">
                  abhineetsnu@gmail.com
                </span>
              </div>
            </div>

            <p
              className={`text-blue-400 text-[14px] font-bold tracking-widest transition-all duration-300 ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              Email Copied to Clipboard
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/abhineet-space"
              target="_blank"
              className="btn-hover flex-1 h-[64px] rounded-2xl border border-blue-500/10 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm font-semibold text-blue-400">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/abhineet.space"
              target="_blank"
              className="btn-hover flex-1 h-[64px] rounded-2xl border border-pink-500/10 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient
                    id="insta_grad_final"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#insta_grad_final)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.893.419.42.677.819.893 1.379.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.893 1.38-.42.419-.819.677-1.379.893-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.893-.419-.42-.677-.819-.893-1.379-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.893-1.38.42-.419.819-.677 1.379-.893.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0c-3.259 0-3.667.014-4.947.072-1.278.059-2.15.26-2.91.558-.784.305-1.448.713-2.11 1.375-.667.667-1.075 1.33-1.375 2.114-.305.783-.506 1.657-.564 2.91-.058 1.28-.072 1.687-.072 4.947s.014 3.667.072 4.947c.059 1.278.26 2.15.558 2.91.305.784.713 1.448 1.375 2.11.667.667 1.33 1.075 2.114 1.375.783.305 1.657.506 2.91.564 1.28.058 1.687.072 4.947.072s3.667-.014 4.947-.072c1.278-.059 2.15-.26 2.91-.558.784-.305 1.448-.713 2.11-1.375.667-.667 1.075-1.33 1.375-2.114.305-.783.506-1.657.564-2.91.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.059-1.278-.26-2.15-.558-2.91-.305-.784-.713-1.448-1.375-2.11-.667-.667-1.33-1.075-2.114-1.375-.783-.305-1.657-.506-2.91-.564-1.28-.058-1.687-.072-4.947-.072z"
                />
                <path
                  fill="url(#insta_grad_final)"
                  d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"
                />
                <path
                  fill="url(#insta_grad_final)"
                  d="M18.406 4.155a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
              <span className="text-sm font-semibold text-pink-400">
                Instagram
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <Clock />
        </div>
      </GlassCard>
    </>
  );
}
