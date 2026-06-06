import Sk from './SkeletonBase'

export default function ReviewsSkeleton() {
  return (
    <section id="reviews" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container animate-pulse">
        {/* Section header */}
        <div className="section-head">
          <Sk width={72} height={12} rounded={2} style={{ margin: '0 auto 12px' }} />
          <Sk width={200} height={32} rounded={4} style={{ margin: '0 auto' }} />
        </div>

        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: 16, padding: '48px 56px' }}>
            {/* Stars row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Sk key={i} width={16} height={16} rounded={2} />
              ))}
            </div>
            {/* Quote lines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginBottom: 24 }}>
              <Sk width="90%" height={14} rounded={2} />
              <Sk width="80%" height={14} rounded={2} />
              <Sk width="65%" height={14} rounded={2} />
            </div>
            {/* Author */}
            <Sk width={120} height={13} rounded={2} style={{ margin: '0 auto' }} />
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Sk key={i} width={i === 0 ? 24 : 8} height={8} rounded={4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
