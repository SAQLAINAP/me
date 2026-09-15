import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="glass-strong p-10 text-center max-w-md mx-4">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-300/70 mb-3">
          404 · off-grid
        </div>
        <div className="font-display text-5xl text-white mb-3">Lost in space.</div>
        <p className="text-white/60 mb-6">
          That route isn't part of the SAQLAINAP portfolio (yet). Head back to base
          or check the arena.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-neon">← Home</Link>
          <Link href="/arena" className="btn-ghost">Arena</Link>
        </div>
      </div>
    </div>
  );
}
