import Link from 'next/link'

// TODO: Replace with Notion API integration
const apps = [
  {
    id: 1,
    name: "PhotoPoetry",
    description: "Merging visual storytelling with poetic expression. An AI-powered platform for creating immersive photo-poetry experiences.",
    status: "Building",
    tech: ["React", "Next.js", "AI", "Design"],
    link: null,
    year: "2026"
  },
  {
    id: 2,
    name: "MosAIc",
    description: "AI-native creative tools for modern builders. Exploring the intersection of automation and artistic expression.",
    status: "Building",
    tech: ["AI", "Web", "Creative Tech"],
    link: null,
    year: "2026"
  },
]

export default function Apps() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        <Link href="/" className="text-white/40 hover:text-white mb-12 inline-block font-light transition-colors">
          ← Back
        </Link>

        <div className="mb-20">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Apps
          </h1>
          <div className="h-px w-16 bg-white/20 mb-6"></div>
          <p className="text-white/50 font-light text-lg">
            Products in progress and shipped
          </p>
        </div>

        {/* Refined Apps List */}
        <div className="space-y-12">
          {apps.map((app) => (
            <div key={app.id} className="border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-light tracking-tight mb-2">{app.name}</h2>
                  <span className="text-xs tracking-widest uppercase text-white/30 font-light">
                    {app.year} · {app.status}
                  </span>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed mb-6 font-light text-lg">
                {app.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {app.tech.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 border border-white/10 text-white/40 font-light tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>

              {app.link && (
                <a 
                  href={app.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white inline-flex items-center gap-2 font-light tracking-wide text-sm transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Placeholder for empty state */}
        {apps.length === 0 && (
          <div className="text-center py-32 text-white/30">
            <p className="text-xl mb-4 font-light">No apps yet</p>
            <p className="font-light">Connect your Notion database to display projects</p>
          </div>
        )}

      </div>
    </main>
  )
}
