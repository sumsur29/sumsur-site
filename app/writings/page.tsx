import Link from 'next/link'

// TODO: Replace with Notion API integration
const writings = [
  {
    id: 1,
    title: "The Blue Ocean Nobody Saw Coming",
    excerpt: "AI unlocked 300 million customers. VCs spent 30 years chasing enterprise logos while the SME market sat ignored, invisible.",
    date: "March 23, 2026",
    category: "Essay",
    url: "https://www.notion.so/32c3a95e625a81c78990e12c5e66e192"
  },
  {
    id: 2,
    title: "On Building in Public",
    excerpt: "The paradox of visibility — sharing the journey while protecting the craft.",
    date: "March 15, 2026",
    category: "Reflection",
    url: "#"
  },
]

export default function Writings() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        <Link href="/" className="text-white/40 hover:text-white mb-12 inline-block font-light transition-colors">
          ← Back
        </Link>

        <div className="mb-20">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Writings
          </h1>
          <div className="h-px w-16 bg-white/20 mb-6"></div>
          <p className="text-white/50 font-light text-lg">
            Essays, poetry, and reflections
          </p>
        </div>

        {/* Refined Writings List */}
        <div className="space-y-16">
          {writings.map((writing) => (
            <article key={writing.id} className="group border-b border-white/5 pb-16 last:border-0">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-widest uppercase text-white/40 font-light">
                  {writing.category}
                </span>
                <span className="text-white/20">·</span>
                <span className="text-xs text-white/30 font-light">{writing.date}</span>
              </div>
              
              <h2 className="text-3xl font-light mb-4 tracking-tight group-hover:text-white/80 transition-colors">
                <a href={writing.url} target="_blank" rel="noopener noreferrer">
                  {writing.title}
                </a>
              </h2>
              
              <p className="text-white/50 leading-relaxed mb-6 font-light text-lg">
                {writing.excerpt}
              </p>
              
              <a 
                href={writing.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white inline-flex items-center gap-2 font-light tracking-wide text-sm transition-colors"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* Placeholder for empty state */}
        {writings.length === 0 && (
          <div className="text-center py-32 text-white/30">
            <p className="text-xl mb-4 font-light">No writings yet</p>
            <p className="font-light">Connect your Notion database to display articles</p>
          </div>
        )}

      </div>
    </main>
  )
}
