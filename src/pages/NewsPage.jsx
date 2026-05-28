import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import SkeletonCard from '../components/SkeletonCard'
import TagCloud from '../components/TagCloud'

const API_KEY = import.meta.env.VITE_COINSTATS_API_KEY

export default function NewsPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = () => {
    setLoading(true)
    setError(null)
    fetch('https://openapiv1.coinstats.app/news?limit=20', {
      headers: { 'X-API-KEY': API_KEY },
    })
      .then(res => {
        if (!res.ok) throw new Error(`API error ${res.status}`)
        return res.json()
      })
      .then(data => {
        setArticles(Array.isArray(data) ? data : (data.result ?? []))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => { load() }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-syne font-bold text-3xl sm:text-4xl text-slate-100">
          Crypto <span style={{ color: '#00e5ff' }}>News</span>
        </h1>
        <p className="font-mono text-sm text-slate-500 mt-1">
          Latest headlines from the crypto world
        </p>
      </div>

      {/* Error state */}
      {error && (
        <div className="glass-card rounded-2xl p-8 text-center mb-8"
          style={{ borderColor: 'rgba(248,113,113,0.3)' }}>
          <div className="text-4xl mb-3">⚠</div>
          <h3 className="font-syne font-bold text-red-400 text-lg mb-1">Failed to load news</h3>
          <p className="font-mono text-sm text-slate-500 mb-4">{error}</p>
          <button
            onClick={load}
            className="font-mono text-sm px-5 py-2 rounded-lg transition-all"
            style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171' }}
          >
            Retry
          </button>
        </div>
      )}

      {!error && (
        <>
          {/* Tag cloud */}
          {!loading && articles.length > 0 && <TagCloud articles={articles} />}
          {loading && (
            <div className="glass-card rounded-2xl p-5 mb-8">
              <div className="h-4 skeleton rounded w-36 mb-4" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-7 skeleton rounded-lg" style={{ width: `${60 + Math.random() * 60}px` }} />
                ))}
              </div>
            </div>
          )}

          {/* News grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {loading
              ? Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} type="news" />)
              : articles.map((article, i) => <NewsCard key={article.id ?? i} article={article} index={i} />)
            }
          </div>
        </>
      )}
    </div>
  )
}
