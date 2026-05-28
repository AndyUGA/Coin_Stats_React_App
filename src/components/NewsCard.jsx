function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`
  return new Date(dateStr).toLocaleDateString()
}

export default function NewsCard({ article, index }) {
  const {
    title,
    source,
    imgUrl,
    feedDate,
    description,
    link,
  } = article

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-2xl overflow-hidden flex flex-col animate-fade-in group"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-navy-900">
        <img
          src={imgUrl || ''}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.parentElement.innerHTML =
              `<div class="w-full h-full flex items-center justify-center bg-navy-900">
                <span style="color:rgba(0,229,255,0.3);font-size:2.5rem">📰</span>
              </div>`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        <span
          className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded"
          style={{ background: 'rgba(10,15,30,0.85)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)' }}
        >
          {source?.name ?? 'News'}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 p-4">
        <h3 className="font-syne font-bold text-slate-100 text-sm leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="font-mono text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-auto pt-2 flex items-center justify-between border-t border-slate-800/40">
          <span className="font-mono text-[10px] text-slate-600">
            {relativeTime(feedDate)}
          </span>
          <span className="font-mono text-[10px]" style={{ color: '#00e5ff' }}>
            READ →
          </span>
        </div>
      </div>
    </a>
  )
}
