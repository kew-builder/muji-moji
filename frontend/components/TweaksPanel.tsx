'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useApp } from '@/context/AppContext'

const PANEL_CSS = `
.twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
  max-height:calc(100vh - 32px);display:flex;flex-direction:column;
  background:rgba(250,249,247,.85);color:#29261b;
  backdrop-filter:blur(24px) saturate(160%);
  border:.5px solid rgba(255,255,255,.6);border-radius:14px;
  box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
  font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
.twk-hd{display:flex;align-items:center;justify-content:space-between;
  padding:10px 8px 10px 14px;cursor:move;user-select:none}
.twk-hd b{font-size:12px;font-weight:600}
.twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
  width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px}
.twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
.twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto}
.twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
  color:rgba(41,38,27,.45);padding:10px 0 0}
.twk-sect:first-child{padding-top:0}
.twk-row{display:flex;flex-direction:column;gap:5px}
.twk-lbl{display:flex;justify-content:space-between;align-items:baseline;color:rgba(41,38,27,.72);font-weight:500}
.twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
.twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
  background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s,width .15s}
.twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
  background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
  border-radius:6px;cursor:pointer;padding:4px 6px;line-height:1.2}
`

type Seg3 = [string, string, string]

function SegControl({ value, options, onChange }: { value: string; options: Seg3; onChange: (v: string) => void }) {
  const idx = options.indexOf(value)
  const n = options.length
  return (
    <div className="twk-seg">
      <div className="twk-seg-thumb" style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`, width: `calc((100% - 4px) / ${n})` }} />
      {options.map(o => (
        <button key={o} type="button" onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  )
}

export default function TweaksPanel() {
  const { tweaks, setTweak } = useApp()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 16, y: 16 })
  const PAD = 16

  const clamp = useCallback(() => {
    const p = panelRef.current
    if (!p) return
    const maxX = Math.max(PAD, window.innerWidth - p.offsetWidth - PAD)
    const maxY = Math.max(PAD, window.innerHeight - p.offsetHeight - PAD)
    offsetRef.current = {
      x: Math.min(maxX, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxY, Math.max(PAD, offsetRef.current.y)),
    }
    p.style.right = offsetRef.current.x + 'px'
    p.style.bottom = offsetRef.current.y + 'px'
  }, [])

  useEffect(() => { if (open) clamp() }, [open, clamp])

  const onDragStart = (e: React.MouseEvent) => {
    const p = panelRef.current
    if (!p) return
    const r = p.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const startR = window.innerWidth - r.right
    const startB = window.innerHeight - r.bottom
    const move = (ev: MouseEvent) => {
      offsetRef.current = { x: startR - (ev.clientX - sx), y: startB - (ev.clientY - sy) }
      clamp()
    }
    const up = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('blur', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('blur', up)
  }

  return (
    <>
      <style>{PANEL_CSS}</style>

      {/* Toggle button */}
      {!open && (
        <button onClick={() => setOpen(true)} style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 2147483645, width: 44, height: 44, borderRadius: '50%', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 18, boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Open tweaks">
          &#9881;
        </button>
      )}

      {open && (
        <div ref={panelRef} className="twk-panel" style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
          <div className="twk-hd" onMouseDown={onDragStart}>
            <b>Tweaks</b>
            <button className="twk-x" onClick={() => setOpen(false)}>&#10005;</button>
          </div>
          <div className="twk-body">
            <div className="twk-sect">Theme</div>
            <div className="twk-row">
              <div className="twk-lbl"><span>Color</span></div>
              <SegControl value={tweaks.theme} options={['warm', 'forest', 'dark']} onChange={v => setTweak('theme', v as 'warm' | 'forest' | 'dark')} />
            </div>
            <div className="twk-row">
              <div className="twk-lbl"><span>Heading</span></div>
              <SegControl value={tweaks.headingWeight} options={['light', 'regular', 'bold']} onChange={v => setTweak('headingWeight', v as 'light' | 'regular' | 'bold')} />
            </div>

            <div className="twk-sect">Layout</div>
            <div className="twk-row">
              <div className="twk-lbl"><span>Hero Style</span></div>
              <SegControl value={tweaks.heroStyle} options={['fullscreen', 'split', 'minimal']} onChange={v => setTweak('heroStyle', v as 'fullscreen' | 'split' | 'minimal')} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
