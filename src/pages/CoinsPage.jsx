import { useState, useEffect, useMemo } from 'react'
import CoinCard from '../components/CoinCard'
import SkeletonCard from '../components/SkeletonCard'
import Pagination from '../components/Pagination'

const PAGE_SIZE = 15
const API_KEY = import.meta.env.VITE_COINSTATS_API_KEY

export default function CoinsPage() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [totalCoins, setTotalCoins] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    setSearch('')

    fetch(`https://openapiv1.coinstats.app/coins?limit=${PAGE_SIZE}&page=${page}`, {
      headers: { 'X-API-KEY': API_KEY },
    })
      .then(res => {
        if (!res.ok) throw new Error(`API error ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (!cancelled) {
          console.log(data);
          setCoins(data.result ?? [])
          setTotalCoins(data.meta?.itemCount ?? 0)
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [page])

  const filtered = useMemo(() => {
    if (!search.trim()) return coins
    const q = search.toLowerCase()
    return coins.filter(
      c => c.name?.toLowerCase().includes(q) || c.symbol?.toLowerCase().includes(q)
    )
  }, [coins, search])

  const totalPages = Math.ceil(totalCoins / PAGE_SIZE)
  console.log(totalCoins);
  console.log(PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Page header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl text-slate-100">
            Market <span style={{ color: '#00e5ff' }}>Overview</span>
          </h1>
          <p className="font-mono text-sm text-slate-500 mt-1">
            {totalCoins > 0 ? `${totalCoins.toLocaleString()} assets tracked` : 'Live cryptocurrency data'}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-500 text-sm">⌕</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Filter by name or symbol..."
            className="w-full pl-8 pr-4 py-2.5 rounded-xl font-mono text-sm text-slate-200 placeholder-slate-600 outline-none focus:ring-1 transition-all duration-200"
            style={{
              background: 'rgba(13,20,36,0.8)',
              border: '1px solid rgba(0,229,255,0.15)',
              '--tw-ring-color': 'rgba(0,229,255,0.3)',
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.4)'}
            onBlur={e => e.target.style.borderColor = 'rgba(0,229,255,0.15)'}
          />
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="glass-card rounded-2xl p-8 text-center mb-8"
          style={{ borderColor: 'rgba(248,113,113,0.3)' }}>
          <div className="text-4xl mb-3">⚠</div>
          <h3 className="font-syne font-bold text-red-400 text-lg mb-1">Failed to load data</h3>
          <p className="font-mono text-sm text-slate-500 mb-4">{error}</p>
          <button
            onClick={() => setPage(p => p)}
            className="font-mono text-sm px-5 py-2 rounded-lg transition-all"
            style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171' }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Grid */}
      {!error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
            {loading
              ? Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonCard key={i} type="coin" />)
              : filtered.map((coin, i) => <CoinCard key={coin.id} coin={coin} index={i} />)
            }
          </div>

          {!loading && filtered.length === 0 && search && (
            <div className="text-center py-16">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-syne font-semibold text-slate-400">No results for "<span style={{ color: '#00e5ff' }}>{search}</span>"</p>
              <p className="font-mono text-sm text-slate-600 mt-1">Try a different name or symbol</p>
            </div>
          )}

          {!loading && !search && (
            <Pagination
              currentPage={page}
              onPrev={() => setPage(p => Math.max(1, p - 1))}
              onNext={() => setPage(p => p + 1)}
              hasPrev={page > 1}
              hasNext={page < totalPages}
            />
          )}
        </>
      )}
    </div>
  )
}
