import { useState } from "react";
import { techStack, type TechItem } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const expertise = [
  { name: "SOFTWARE_ENGINEERING", level: 95 },
  { name: "BANKING_INFO_SYSTEMS", level: 92 },
  { name: "DATA_SCIENCE / ML", level: 88 },
  { name: "SQL / PLSQL / DATABASES", level: 93 },
  { name: "FULLSTACK_WEB_DEV", level: 85 },
  { name: "BUSINESS_INTELLIGENCE", level: 84 },
];

function TechBadge({ tech }: { tech: TechItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex flex-col items-center gap-3 border border-edge bg-panel p-5 transition hover:border-cyber/40 hover:bg-panel-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.07)]">
      {failed ? (
        <span
          className="clip-corner-sm grid h-10 w-10 place-items-center font-tech text-xs font-bold text-white transition group-hover:scale-110"
          style={{ backgroundColor: tech.color }}
        >
          {tech.abbr}
        </span>
      ) : (
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-10 w-10 object-contain saturate-[0.85] transition group-hover:scale-110 group-hover:saturate-100"
        />
      )}
      <span className="text-center font-tech text-[10px] font-medium tracking-wider text-slate-400 group-hover:text-slate-200">
        {tech.name.toUpperCase()}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-edge bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="arsenal"
            title="Tech Arsenal"
            subtitle="The languages, frameworks, and tools deployed to build enterprise software and machine learning solutions."
          />
        </Reveal>

        {/* tech logo grid */}
        <div className="grid grid-cols-3 gap-px border border-edge bg-edge sm:grid-cols-4 lg:grid-cols-8">
          {techStack.map((t, i) => (
            <Reveal key={t.name} delay={(i % 8) * 40} className="h-full">
              <TechBadge tech={t} />
            </Reveal>
          ))}
        </div>

        {/* expertise bars */}
        <div className="mt-14 grid gap-x-14 gap-y-8 md:grid-cols-2">
          {expertise.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-tech text-xs font-semibold tracking-[0.15em] text-slate-200">
                    {s.name}
                  </span>
                  <span className="font-tech text-[11px] font-bold text-cyber">
                    {s.level}%
                  </span>
                </div>
                <div className="flex h-2.5 gap-[3px] border border-edge bg-void p-[2px]">
                  {Array.from({ length: 30 }).map((_, j) => (
                    <span
                      key={j}
                      className={`h-full flex-1 transition ${
                        j < Math.round((s.level / 100) * 30)
                          ? "bg-cyber"
                          : "bg-edge/60"
                      }`}
                      style={
                        j < Math.round((s.level / 100) * 30)
                          ? { opacity: 0.5 + (j / 30) * 0.5 }
                          : undefined
                      }
                    />
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
