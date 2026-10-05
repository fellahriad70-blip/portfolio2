import {
  CreditCard,
  ShieldCheck,
  Euro,
  Landmark,
  AlertTriangle,
  Users,
  BookOpenCheck,
  Clock3,
  Building2,
} from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  credit: CreditCard,
  shield: ShieldCheck,
  euro: Euro,
  landmark: Landmark,
  alert: AlertTriangle,
  users: Users,
  book: BookOpenCheck,
  clock: Clock3,
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="operations"
            title="Project Archive"
            subtitle="Banking platforms, financial automation, and data-driven systems delivered for major Algerian institutions."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Building2;
            return (
              <Reveal key={p.title} delay={(i % 2) * 100} className="h-full">
                <article className="edge-glow clip-corner group flex h-full flex-col border border-edge bg-panel p-6 transition hover:border-cyber/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="clip-corner-sm grid h-11 w-11 place-items-center border border-cyber/30 bg-void text-cyber transition group-hover:border-cyber/60 group-hover:bg-cyber/10">
                        <Icon size={19} />
                      </span>
                      <span className="font-tech text-[10px] font-bold tracking-[0.25em] text-slate-600">
                        OP_{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {p.client && (
                      <span className="clip-tag inline-flex items-center gap-1.5 border border-edge bg-panel-2 px-2.5 py-1 font-tech text-[9px] font-medium tracking-wider text-slate-300">
                        <Building2 size={11} className="text-cyber" />
                        {p.client.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base font-bold uppercase leading-snug tracking-wide text-white transition group-hover:text-cyber">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-edge/60 pt-4">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="clip-tag bg-cyber/8 border border-cyber/20 px-2 py-0.5 font-tech text-[9px] font-medium tracking-wider text-cyber"
                      >
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
