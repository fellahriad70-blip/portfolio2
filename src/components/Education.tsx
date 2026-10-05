import { GraduationCap, Award, CalendarDays } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="training data"
            title="Education"
            subtitle="Graduate of Université d'Alger with an excellent record in Data Science and Software Engineering."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 120} className="h-full">
              <div className="edge-glow clip-corner group h-full border border-edge bg-panel p-6 transition hover:border-cyber/40">
                <div className="flex items-start gap-4">
                  <div className="clip-corner-sm grid h-13 w-13 shrink-0 place-items-center border border-sky-400/40 bg-void p-3 text-sky-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-slate-300">{e.field}</p>
                    <p className="mt-1 font-tech text-[11px] font-medium tracking-wider text-sky-300">
                      UNIVERSITÉ D'ALGER
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-edge/60 pt-4 font-tech text-[10px] tracking-wider text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={12} className="text-cyber/60" /> {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award size={12} className="text-amberwarn" /> GRADE:{" "}
                    <span className="font-bold text-amberwarn">{e.grade.toUpperCase()}</span>
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.skills.map((s) => (
                    <span
                      key={s}
                      className="clip-tag border border-sky-400/20 bg-sky-400/5 px-2 py-0.5 font-tech text-[9px] font-medium tracking-wider text-sky-300"
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
