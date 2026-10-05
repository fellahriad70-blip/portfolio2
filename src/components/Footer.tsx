export default function Footer() {
  return (
    <footer className="border-t border-edge bg-void py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="clip-corner-sm grid h-8 w-8 place-items-center border border-cyber/40 bg-panel font-tech text-[10px] font-bold text-cyber">
            RF
          </span>
          <span className="font-tech text-xs tracking-[0.2em] text-slate-300">
            AHMED RIADH FELLAH
          </span>
        </div>
        <p className="font-tech text-[10px] tracking-[0.2em] text-slate-600">
          © {new Date().getFullYear()} // SWE · DATA_SCIENTIST · ALGIERS_DZ //
          <span className="ml-2 text-cyber/60">SYS.STATUS: ONLINE</span>
        </p>
      </div>
    </footer>
  );
}
