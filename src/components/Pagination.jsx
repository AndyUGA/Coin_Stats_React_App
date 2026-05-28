export default function Pagination({ currentPage, onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="font-mono text-sm px-5 py-2.5 rounded-xl border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: hasPrev ? 'rgba(0,229,255,0.06)' : 'rgba(255,255,255,0.02)',
          borderColor: hasPrev ? 'rgba(0,229,255,0.25)' : 'rgba(255,255,255,0.06)',
          color: hasPrev ? '#00e5ff' : '#64748b',
        }}
      >
        ← PREV
      </button>

      <span className="font-mono text-sm px-4 py-2 rounded-lg"
        style={{ background: 'rgba(0,229,255,0.05)', color: 'rgba(0,229,255,0.8)', border: '1px solid rgba(0,229,255,0.15)' }}>
        PAGE {currentPage}
      </span>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="font-mono text-sm px-5 py-2.5 rounded-xl border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: hasNext ? 'rgba(0,229,255,0.06)' : 'rgba(255,255,255,0.02)',
          borderColor: hasNext ? 'rgba(0,229,255,0.25)' : 'rgba(255,255,255,0.06)',
          color: hasNext ? '#00e5ff' : '#64748b',
        }}
      >
        NEXT →
      </button>
    </div>
  )
}
