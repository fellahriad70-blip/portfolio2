import {
  Code2,
  BrainCircuit,
  BarChart3,
  Landmark,
  Database,
  PieChart,
} from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const areaIcons = [Code2, BrainCircuit, Database, BarChart3, Landmark, PieChart];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="about"
            title="Mission Profile"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="relative border-l-2 border-cyber/40 pl-6">
              <div className="space-y-4">
                {profile.about.map((p, i) => (
                  <p key={i} className="leading-relaxed text-slate-300">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="clip-corner border border-edge bg-panel p-6">
              <h3 className="mb-5 font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-cyber">
                ◢ Core_Directives
              </h3>
              <div className="grid gap-2">
                {profile.coreAreas.map((area, i) => {
                  const Icon = areaIcons[i % areaIcons.length];
                  return (
                    <div
                      key={area}
                      className="group flex items-center gap-3 border border-edge/60 bg-panel-2/60 px-4 py-3 transition hover:border-cyber/40 hover:bg-cyber/5"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center border border-cyber/20 bg-void text-cyber transition group-hover:border-cyber/50">
                        <Icon size={15} />
                      </span>
                      <span className="font-tech text-xs font-medium tracking-wider text-slate-200">
                        {area.toUpperCase()}
                      </span>
                      <span className="ml-auto font-tech text-[9px] text-cyber/40 group-hover:text-cyber">
                        0{i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
