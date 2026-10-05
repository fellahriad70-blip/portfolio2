import { MapPin, CalendarDays, Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const monoColors: Record<string, string> = {
  BADR: "border-emerald-400/50 text-emerald-300",
  UA: "border-sky-400/50 text-sky-300",
  SG: "border-amber-400/50 text-amber-300",
};

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 border-y border-edge bg-panel/40 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="career log"
            title="Deployment History"
            subtitle="From full-stack development at Sonelgaz to data science research and mission-critical banking systems at BADR Bank."
          />
        </Reveal>

        <div className="relative ml-4 border-l border-edge sm:ml-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              {/* timeline node */}
              <span className="absolute -left-[7px] top-6 h-3.5 w-3.5 rotate-45 border-2 border-cyber bg-void" />

              <Reveal delay={i * 80}>
                <div className="edge-glow clip-corner group border border-edge bg-panel p-6 transition hover:border-cyber/30">
                  <div className="flex flex-wrap items-start gap-4">
                    <div
                      className={`clip-corner-sm grid h-14 w-14 shrink-0 place-items-center border bg-void font-tech text-xs font-bold ${
                        monoColors[exp.monogram] ?? "border-cyber/50 text-cyber"
                      }`}
                    >
                      {exp.monogram}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                          {exp.role}
                        </h3>
                        <span className="clip-tag border border-cyber/30 bg-cyber/5 px-2 py-0.5 font-tech text-[9px] tracking-[0.2em] text-cyber">
                          {i === 0 ? "ACTIVE" : "ARCHIVED"}
                        </span>
                      </div>
                      <p className="mt-0.5 font-tech text-xs font-medium tracking-wider text-cyber/90">
                        {exp.company.toUpperCase()}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-tech text-[10px] tracking-wider text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={12} className="text-cyber/60" />
                          {exp.period.toUpperCase()} · {exp.duration.toUpperCase()}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} className="text-cyber/60" />
                          {exp.location.toUpperCase()}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase size={12} className="text-cyber/60" />
                          {exp.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-edge/60 pt-4">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-[9px] h-1 w-3 shrink-0 bg-cyber/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
