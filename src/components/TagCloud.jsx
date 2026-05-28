const STOP_WORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of','with',
  'is','it','its','as','by','from','that','this','are','be','was','were',
  'has','have','had','will','would','could','should','may','might','can',
  'not','no','so','if','then','than','into','up','out','about','more','new',
  'how','what','why','when','who','all','some','one','two','three','just',
  'over','after','during','amid','amid','following','amid','says','said',
])

function extractTopics(articles) {
  const freq = {}
  articles.forEach(({ title = '' }) => {
    title
      .toLowerCase()
      .replace(/[^a-z\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3 && !STOP_WORDS.has(w))
      .forEach(w => { freq[w] = (freq[w] || 0) + 1 })
  })
  return Object.entries(freq)
    .filter(([, c]) => c >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word, count]) => ({ word, count }))
}

export default function TagCloud({ articles }) {
  const topics = extractTopics(articles)
  if (!topics.length) return null

  const max = topics[0].count
  const min = topics[topics.length - 1].count

  return (
    <div className="glass-card rounded-2xl p-5 mb-8">
      <h2 className="font-syne font-bold text-sm uppercase tracking-widest mb-4"
        style={{ color: '#00e5ff' }}>
        ⚡ Trending Topics
      </h2>
      <div className="flex flex-wrap gap-2">
        {topics.map(({ word, count }) => {
          const intensity = max === min ? 0.5 : (count - min) / (max - min)
          const opacity = 0.4 + intensity * 0.6
          const scale = 0.75 + intensity * 0.35
          return (
            <span
              key={word}
              className="font-mono uppercase tracking-wide rounded-lg px-3 py-1.5 cursor-default transition-all duration-200 hover:scale-105"
              style={{
                fontSize: `${scale * 0.75}rem`,
                background: `rgba(0,229,255,${opacity * 0.1})`,
                color: `rgba(0,229,255,${opacity})`,
                border: `1px solid rgba(0,229,255,${opacity * 0.25})`,
              }}
            >
              {word}
              <span className="ml-1.5 opacity-50 text-[0.65em]">{count}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
