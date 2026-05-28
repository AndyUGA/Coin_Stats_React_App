import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CoinsPage from './pages/CoinsPage'
import NewsPage from './pages/NewsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-mesh min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<CoinsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <footer className="relative z-10 text-center py-6 text-slate-600 font-mono text-xs border-t border-slate-800/50">
          <span className="text-cyan-400/60">CoinStats</span> — Powered by CoinStats API
        </footer>
      </div>
    </BrowserRouter>
  )
}
