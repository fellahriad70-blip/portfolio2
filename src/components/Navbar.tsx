import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "ABOUT", idx: "01" },
  { href: "#experience", label: "EXPERIENCE", idx: "02" },
  { href: "#projects", label: "PROJECTS", idx: "03" },
  { href: "#skills", label: "SKILLS", idx: "04" },
  { href: "#education", label: "EDUCATION", idx: "05" },
  { href: "#contact", label: "CONTACT", idx: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge bg-void/90 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="clip-corner-sm grid h-10 w-10 place-items-center border border-cyber/40 bg-panel font-tech text-sm font-bold text-cyber transition group-hover:bg-cyber/10">
            RF
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-widest text-white">
              RIAD FELLAH
            </div>
            <div className="font-tech text-[10px] tracking-[0.2em] text-cyber/70">
              SWE // DATA SCIENTIST
            </div>
          </div>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group font-tech text-[11px] font-medium tracking-wider text-slate-400 transition hover:text-cyber"
              >
                <span className="mr-1 text-cyber/50 group-hover:text-cyber">
                  {l.idx}.
                </span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="clip-btn inline-block border border-cyber/60 bg-cyber/10 px-5 py-2 font-tech text-[11px] font-bold tracking-widest text-cyber transition hover:bg-cyber hover:text-void"
            >
              INIT_CONTACT →
            </a>
          </li>
        </ul>

        <button
          className="text-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-edge bg-void/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-l-2 border-transparent px-3 py-2.5 font-tech text-xs tracking-wider text-slate-300 transition hover:border-cyber hover:bg-cyber/5 hover:text-cyber"
                >
                  <span className="mr-2 text-cyber/60">{l.idx}.</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
