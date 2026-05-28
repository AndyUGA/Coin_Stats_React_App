export default function CoinCard({ coin, index }) {
  const priceChange = coin.priceChange1d ?? 0
  const isPositive = priceChange >= 0

  const fmt = (n, opts = {}) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 2, ...opts }).format(n)

  const fmtPrice = (n) => {
    if (n >= 1) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 6 }).format(n)
  }

  const fmtShort = (n) => {
    if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
    if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
    return `$${fmt(n)}`
  }

  return (
    <div
      className="glass-card rounded-2xl p-5 flex flex-col gap-4 animate-fade-in cursor-default"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={coin.icon}
              alt={coin.name}
              className="w-10 h-10 rounded-full"
              onError={(e) => { e.target.src = `https://placehold.co/40x40/0d1424/00e5ff?text=${coin.symbol?.[0] ?? '?'}` }}
            />
          </div>
          <div>
            <h3 className="font-syne font-bold text-slate-100 text-sm leading-tight">{coin.name}</h3>
            <span className="font-mono text-xs text-slate-500">{coin.symbol}</span>
          </div>
        </div>
        <span
          className="font-mono text-xs font-semibold px-2 py-1 rounded-md"
          style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.15)' }}
        >
          #{coin.rank}
        </span>
      </div>

      {/* Price */}
      <div>
        <div className="font-mono font-semibold text-lg text-slate-100 leading-none">
          {fmtPrice(coin.price)}
        </div>
        <div
          className={`font-mono text-sm font-medium mt-1 ${isPositive ? 'text-lime-400' : 'text-red-400'}`}
        >
          {isPositive ? '▲' : '▼'} {Math.abs(priceChange).toFixed(2)}%
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
        <div>
          <div className="font-mono text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">Market Cap</div>
          <div className="font-mono text-xs text-slate-300">{fmtShort(coin.marketCap)}</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">Volume 24h</div>
          <div className="font-mono text-xs text-slate-300">{fmtShort(coin.volume)}</div>
        </div>
      </div>
    </div>
  )
}
