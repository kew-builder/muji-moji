import Sk from './SkeletonBase'

// Mirrors the 8-photo masonry with the same aspect ratio heights used in GallerySection
const shapes: { h: number }[] = [
  { h: 1.4 }, { h: 1.0 }, { h: 1.2 }, { h: 1.0 },
  { h: 1.5 }, { h: 1.0 }, { h: 1.3 }, { h: 1.0 },
]

export default function GallerySkeleton() {
  return (
    <section id="gallery" className="section" style={{ background: 'var(--bg-deep)' }}>
      <div className="container animate-pulse">
        {/* Section header */}
        <div className="section-head">
          <Sk width={64} height={12} rounded={2} style={{ margin: '0 auto 12px' }} />
          <Sk width={220} height={32} rounded={4} style={{ margin: '0 auto 16px' }} />
          <Sk width={300} height={14} rounded={2} style={{ margin: '0 auto' }} />
        </div>

        {/* Masonry — 3 columns, same gap/maxWidth as real component */}
        <div style={{ columns: '3', columnGap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {shapes.map((p, i) => (
            <div key={i} style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 8, overflow: 'hidden' }}>
              <Sk width="100%" height={0} rounded={0} style={{ aspectRatio: `1/${p.h}`, height: 'auto', borderRadius: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
