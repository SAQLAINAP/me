import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="frame p-10 text-center max-w-md mx-4">
        <div className="font-mono text-xs uppercase tracking-widest text-ink/70 mb-3">
          404 · off-grid
        </div>
        <div className="font-condensed uppercase text-6xl text-ink mb-3 leading-none">
          Lost&nbsp;in&nbsp;<span className="mk mk--lime">space</span>.
        </div>
        <p className="text-ink/70 mb-6">
          That route isn't part of the SAQLAINAP portfolio (yet). Head back to base
          or check the arena.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="pill pill--lime">← Home</Link>
          <Link href="/arena" className="pill pill--ghost">Arena</Link>
        </div>
      </div>
    </div>
  );
}
