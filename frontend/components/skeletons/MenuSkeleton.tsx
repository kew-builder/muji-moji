import Sk from './SkeletonBase'

export default function MenuSkeleton() {
  return (
    <section id="menu" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container animate-pulse">
        {/* Section header */}
        <div className="section-head">
          <Sk width={64} height={12} rounded={2} style={{ margin: '0 auto 12px' }} />
          <Sk width={200} height={32} rounded={4} style={{ margin: '0 auto 16px' }} />
          <Sk width={280} height={14} rounded={2} style={{ margin: '0 auto' }} />
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {[80, 72, 88, 96].map((w, i) => (
            <Sk key={i} width={w} height={38} rounded={4} />
          ))}
        </div>

        {/* Items grid — 4 cards matching minmax(320px,1fr) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 24, background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: 8 }}
            >
              {/* Thumbnail */}
              <Sk width={64} height={64} rounded={4} />
              {/* Text block */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Sk width="70%" height={16} rounded={3} />
                <Sk width="90%" height={12} rounded={2} />
                <Sk width="60%" height={12} rounded={2} />
              </div>
              {/* Price */}
              <Sk width={48} height={20} rounded={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
