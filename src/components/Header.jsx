import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-slate-800/80"
      style={{ background: 'rgba(10,15,30,0.85)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⬡</span>
          <span
            className="logo-glow font-syne font-bold text-xl tracking-tight"
            style={{ color: '#00e5ff' }}
          >
            COIN<span className="text-white">STATS</span>
          </span>
        </div>

        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`
            }
          >
            /coins
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`
            }
          >
            /news
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span className="font-mono text-xs text-slate-500">LIVE</span>
        </div>
      </div>
    </header>
  )
}
