import Link from 'next/link'

// TODO: Replace with Notion API integration
const photos = [
  {
    id: 1,
    title: "Dubai Skyline",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    date: "2026-03-15"
  },
  {
    id: 2,
    title: "Urban Light",
    url: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800",
    date: "2026-03-10"
  },
  {
    id: 3,
    title: "Minimal Architecture",
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
    date: "2026-03-05"
  },
]

export default function Photos() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <Link href="/" className="text-white/40 hover:text-white mb-12 inline-block font-light transition-colors">
          ← Back
        </Link>

        <div className="mb-16">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Photos
          </h1>
          <div className="h-px w-16 bg-white/20 mb-6"></div>
          <p className="text-white/50 font-light text-lg">
            Visual narratives from around the world
          </p>
        </div>

        {/* Elegant Photo Grid */}
        <div className="grid md:grid-cols-3 gap-1">
          {photos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer relative aspect-square overflow-hidden">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-light text-sm tracking-wide">{photo.title}</p>
                  <p className="text-xs text-white/50 mt-1">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for empty state */}
        {photos.length === 0 && (
          <div className="text-center py-32 text-white/30">
            <p className="text-xl mb-4 font-light">No photos yet</p>
            <p className="font-light">Connect your Notion database to display photography</p>
          </div>
        )}

      </div>
    </main>
  )
}
