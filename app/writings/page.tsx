import Link from 'next/link'

const writings = [
  {
    id: "3313a95e-625a-81f2-a708-d46062fbe51e",
    title: "Known Chaos",
    excerpt: "Navigating uncertainty in a world that demands certainty.",
    date: "March 28, 2026",
    category: "Reflection",
    url: "https://www.notion.so/3313a95e-625a-81f2-a708-d46062fbe51e"
  },
  {
    id: "32c3a95e-625a-81c7-8990-e12c5e66e192",
    title: "The Blue Ocean Hidden in Plain Sight: 300 Million SMEs",
    excerpt: "AI unlocked 300 million customers. VCs spent 30 years chasing enterprise logos while the SME market sat ignored, invisible.",
    date: "March 23, 2026",
    category: "Essay",
    url: "https://www.notion.so/32c3a95e-625a-81c7-8990-e12c5e66e192"
  },
  {
    id: "31b3a95e-625a-816c-9fd2-cf7126219ebe",
    title: "Software Is Moving Too Fast. Services Are the Next Opportunity.",
    excerpt: "AI software is eating the world. AI services will digest it.",
    date: "March 6, 2026",
    category: "Essay",
    url: "https://www.notion.so/31b3a95e-625a-816c-9fd2-cf7126219ebe"
  },
  {
    id: "31b3a95e-625a-81c8-aae3-c5f26cf61453",
    title: "The Go Bag",
    excerpt: "What you keep ready when home becomes uncertain.",
    date: "March 6, 2026",
    category: "Reflection",
    url: "https://www.notion.so/31b3a95e-625a-81c8-aae3-c5f26cf61453"
  },
  {
    id: "3163a95e-625a-81b9-b927-e902cfdfa2f8",
    title: "A Bit Shaken, But Ok",
    excerpt: "Living through war from a distance that's too close.",
    date: "March 1, 2026",
    category: "Personal",
    url: "https://www.notion.so/3163a95e-625a-81b9-b927-e902cfdfa2f8"
  },
  {
    id: "3143a95e-625a-81b5-abba-c818815c0adf",
    title: "What Running a Personal AI Agent for a Week Actually Looks Like",
    excerpt: "The reality behind the AI assistant hype — one week in.",
    date: "February 27, 2026",
    category: "Essay",
    url: "https://www.notion.so/3143a95e-625a-81b5-abba-c818815c0adf"
  },
  {
    id: "3133a95e-625a-81b8-a844-fb0977cd7b47",
    title: "AI Won't Kill SaaS. It'll Do What LinkedIn Did to Recruiters — Grow",
    excerpt: "The paradox of automation: it doesn't eliminate, it expands.",
    date: "February 26, 2026",
    category: "Analysis",
    url: "https://www.notion.so/3133a95e-625a-81b8-a844-fb0977cd7b47"
  },
  {
    id: "30d3a95e-625a-81bd-9371-fa2426ae7e0c",
    title: "Life in 2036: The Messy Middle",
    excerpt: "Not utopia. Not dystopia. The realistic version.",
    date: "February 20, 2026",
    category: "Futures",
    url: "https://www.notion.so/30d3a95e-625a-81bd-9371-fa2426ae7e0c"
  },
  {
    id: "30d3a95e-625a-81cf-9e98-f1bd31d7995b",
    title: "Life in 2036: The Great Concentration",
    excerpt: "What happens when AI creates winner-take-all dynamics everywhere.",
    date: "February 20, 2026",
    category: "Futures",
    url: "https://www.notion.so/30d3a95e-625a-81cf-9e98-f1bd31d7995b"
  },
  {
    id: "30d3a95e-625a-8125-abc6-e0cbaca66c38",
    title: "Life in 2036: The Great Divergence",
    excerpt: "Two futures splitting apart. Which path will we take?",
    date: "February 20, 2026",
    category: "Futures",
    url: "https://www.notion.so/30d3a95e-625a-8125-abc6-e0cbaca66c38"
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
            Essays, reflections, and futures
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
                Read on Notion →
              </a>
            </article>
          ))}
        </div>

      </div>
    </main>
  )
}
