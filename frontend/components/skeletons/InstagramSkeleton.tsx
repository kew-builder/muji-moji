import Sk from './SkeletonBase'

export default function InstagramSkeleton() {
  return (
    <section className="section" style={{ background: 'var(--bg-deep)', paddingBottom: 80 }}>
      <div className="container animate-pulse">
        {/* Section header */}
        <div className="section-head" style={{ marginBottom: 40 }}>
          <Sk width={64} height={12} rounded={2} style={{ margin: '0 auto 12px' }} />
          <Sk width={180} height={32} rounded={4} style={{ margin: '0 auto 12px' }} />
          <Sk width={110} height={12} rounded={2} style={{ margin: '0 auto' }} />
        </div>

        {/* 6-column grid of square placeholders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Sk key={i} width="100%" height={0} rounded={4} style={{ aspectRatio: '1/1', height: 'auto' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
