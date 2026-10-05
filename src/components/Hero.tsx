import { useEffect, useState } from "react";
import { MapPin, ArrowRight, Mail, ChevronRight } from "lucide-react";

const roles = [
  "SOFTWARE ENGINEER",
  "DATA SCIENTIST",
  "ML ENGINEER",
  "BANKING SYSTEMS DEV",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 35 : 75
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const stats = [
  { value: "03+", label: "YEARS_EXP" },
  { value: "08+", label: "ENTERPRISE_SYS" },
  { value: "90%", label: "ML_ACCURACY" },
  { value: "10K+", label: "RECORDS_PROCESSED" },
];

const sysStatus = [
  { k: "ROLE", v: "IT ENGINEER @ BADR BANK" },
  { k: "SPEC", v: "BANKING INFO SYSTEMS" },
  { k: "STACK", v: "PYTHON / SQL / PLSQL / ML" },
  { k: "EDU", v: "M.Sc DATA SCIENCE — EXCELLENT" },
  { k: "LOC", v: "ALGIERS, ALGERIA [36.75N, 3.05E]" },
  { k: "STATUS", v: "OPERATIONAL", live: true },
];

const tickerItems = [
  "PYTHON", "SQL", "PL/SQL", "MACHINE LEARNING", "POWER BI", "SCIKIT-LEARN",
  "PANDAS", "NUMPY", "REACT", "LARAVEL", "PHP", "JAVASCRIPT", "GIT", "ORACLE DB",
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="scanline relative overflow-hidden pt-28 pb-0">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-cybergrid absolute inset-0" style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 35%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 35%, black 20%, transparent 75%)",
        }} />
        <div className="animate-glow absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyber/8 blur-3xl" />
        <div className="animate-glow absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-cyan-700/10 blur-3xl" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.25fr_1fr]">
        <div>
          {/* system boot line */}
          <div className="animate-fade-up mb-6 font-tech text-[11px] tracking-widest text-cyber/60">
            <span className="text-cyber">$</span> ./initialize --profile=fellah_riadh
            <span className="ml-2 text-emerald-400">[OK]</span>
          </div>

          <div
            className="animate-fade-up clip-tag mb-5 inline-flex items-center gap-2 border border-cyber/30 bg-cyber/5 px-4 py-1.5 font-tech text-[11px] font-medium tracking-[0.2em] text-cyber"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyber" />
            </span>
            SYSTEM ONLINE — OPEN TO OPPORTUNITIES
          </div>

          <h1
            className="animate-fade-up font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]"
            style={{ animationDelay: "200ms" }}
          >
            Ahmed Riadh
            <br />
            <span className="relative inline-block text-transparent" style={{
              WebkitTextStroke: "1.5px rgba(34,211,238,0.9)",
            }}>
              FELLAH
            </span>
          </h1>

          <div
            className="animate-fade-up mt-5 flex h-8 items-center font-tech text-base font-semibold tracking-[0.15em] text-slate-200 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            <ChevronRight size={18} className="mr-1 text-cyber" />
            {typed}
            <span className="animate-blink ml-1 inline-block h-5 w-2.5 bg-cyber" />
          </div>

          <p
            className="animate-fade-up mt-5 max-w-xl leading-relaxed text-slate-400"
            style={{ animationDelay: "400ms" }}
          >
            Engineering secure, mission-critical banking systems at{" "}
            <span className="font-semibold text-cyber">BADR Bank</span> and
            weaponizing data through machine learning. Precision-built software
            for finance, automation, and intelligence.
          </p>

          <div
            className="animate-fade-up mt-3 flex items-center gap-2 font-tech text-xs tracking-wider text-slate-500"
            style={{ animationDelay: "450ms" }}
          >
            <MapPin size={13} className="text-cyber" />
            ALGIERS // ALGERIA
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "550ms" }}
          >
            <a
              href="#projects"
              className="clip-btn group inline-flex items-center gap-2 bg-cyber px-7 py-3.5 font-tech text-xs font-bold tracking-[0.15em] text-void transition hover:bg-cyan-300"
            >
              VIEW_PROJECTS
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="clip-btn inline-flex items-center gap-2 border border-edge bg-panel px-7 py-3.5 font-tech text-xs font-bold tracking-[0.15em] text-slate-200 transition hover:border-cyber/60 hover:text-cyber"
            >
              <Mail size={15} /> CONTACT
            </a>
          </div>
        </div>

        {/* HUD status panel */}
        <div className="animate-fade-up relative hidden lg:block" style={{ animationDelay: "400ms" }}>
          <div className="clip-corner relative border border-edge bg-panel/90 shadow-[0_0_60px_rgba(34,211,238,0.07)] backdrop-blur">
            {/* panel header */}
            <div className="flex items-center justify-between border-b border-edge bg-panel-2 px-5 py-3">
              <span className="font-tech text-[10px] font-bold tracking-[0.25em] text-cyber">
                ◢ PROFILE.SYS
              </span>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 animate-[radar-spin_3s_linear_infinite] rounded-full border border-cyber/40 border-t-cyber" />
                <span className="font-tech text-[9px] tracking-widest text-slate-500">
                  LIVE
                </span>
              </div>
            </div>

            <div className="space-y-0 p-5">
              {sysStatus.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 border-b border-edge/50 py-2.5 last:border-0"
                >
                  <span className="shrink-0 font-tech text-[10px] font-bold tracking-[0.2em] text-slate-500">
                    {row.k}
                  </span>
                  <span className={`text-right font-tech text-[11px] font-medium tracking-wide ${
                    row.live ? "text-emerald-400" : "text-slate-200"
                  }`}>
                    {row.live && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    )}
                    {row.v}
                  </span>
                </div>
              ))}
            </div>

            {/* mini bars */}
            <div className="border-t border-edge bg-panel-2/60 px-5 py-4">
              <div className="mb-2 font-tech text-[9px] tracking-[0.25em] text-slate-500">
                CORE_SYSTEMS
              </div>
              <div className="flex items-end gap-1">
                {[70, 90, 55, 95, 80, 60, 88, 75, 92, 65, 85, 78, 96, 72, 89, 58, 83, 91].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-cyber/70"
                    style={{ height: `${h * 0.3}px`, opacity: 0.3 + (h / 150) }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* corner accents */}
          <span className="absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 border-cyber" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-cyber" />
        </div>
      </div>

      {/* stats row */}
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px border border-edge bg-edge md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="animate-fade-up group bg-panel p-6 text-center transition hover:bg-panel-2"
            style={{ animationDelay: `${600 + i * 100}ms` }}
          >
            <div className="font-display text-3xl font-bold text-cyber transition group-hover:text-cyan-300">
              {s.value}
            </div>
            <div className="mt-1 font-tech text-[10px] tracking-[0.2em] text-slate-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* tech ticker */}
      <div className="relative mt-0 overflow-hidden border-b border-edge bg-panel/60 py-3">
        <div className="animate-ticker flex w-max gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="font-tech text-[11px] tracking-[0.25em] text-slate-600">
              <span className="mr-10 text-cyber/40">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
