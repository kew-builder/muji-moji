'use client'

import { useState } from 'react'
import { useApp, useThaiFont } from '@/context/AppContext'
import { booking } from '@/lib/translations'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const PHONE_RE = /^0\d{8,9}$/

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

interface FormState {
  name: string; phone: string; date: string; time: string; guests: string; note: string
}

interface FormErrors {
  phone?: string; date?: string; time?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function BookingSection() {
  const { lang } = useApp()
  const ff = useThaiFont()
  const t = booking[lang]

  const [form, setForm] = useState<FormState>({ name: '', phone: '', date: '', time: '', guests: '2', note: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  const inputStyle = { width: '100%', padding: '14px 16px', fontSize: 14, fontFamily: ff, border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text-primary)', outline: 'none', transition: 'var(--transition)' }
  const labelStyle = { fontSize: 12, fontWeight: 500 as const, color: 'var(--text-secondary)', marginBottom: 6, display: 'block' as const, fontFamily: ff, letterSpacing: '0.3px' }

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!PHONE_RE.test(form.phone)) {
      errs.phone = lang === 'th' ? 'เบอร์โทรไม่ถูกต้อง (0XXXXXXXXX)' : 'Invalid phone number (0XXXXXXXXX)'
    }
    if (!form.date || form.date < todayISO()) {
      errs.date = lang === 'th' ? 'กรุณาเลือกวันที่ถูกต้อง' : 'Please select a valid date'
    }
    if (!form.time) {
      errs.time = lang === 'th' ? 'กรุณาเลือกเวลา' : 'Please select a time'
    }
    return errs
  }

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) }),
      })
      if (!res.ok) throw new Error('API error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="booking" className="section" style={{ background: 'var(--bg-deep)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 500, margin: '0 auto', padding: '60px 40px', background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border-light)' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>&#10003;</div>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, fontFamily: ff }}>{t.success}</h3>
            <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', date: '', time: '', guests: '2', note: '' }) }} style={{ marginTop: 24, padding: '10px 24px', background: 'transparent', border: '1px solid var(--border)', borderRadius: 4, color: 'var(--accent)', fontSize: 13, cursor: 'pointer', fontFamily: ff }}>
              {t.back}
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        <div className="section-head">
          <div className="label">Reservation</div>
          <h2 style={{ fontFamily: ff }}>{t.title}</h2>
          <p className="subtitle" style={{ fontFamily: ff }}>{t.sub}</p>
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: 560, margin: '0 auto', background: 'var(--surface)', borderRadius: 16, padding: 48, border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>{t.name}</label>
              <input style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>{t.phone}</label>
              <input style={inputStyle} type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
              {errors.phone && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.phone}</span>}
            </div>
            <div>
              <label style={labelStyle}>{t.date}</label>
              <input style={inputStyle} type="date" min={todayISO()} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              {errors.date && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.date}</span>}
            </div>
            <div>
              <label style={labelStyle}>{t.time}</label>
              <select style={inputStyle} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required>
                <option value="">--</option>
                {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'].map(timeSlot => (
                  <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                ))}
              </select>
              {errors.time && <span style={{ fontSize: 12, color: '#c0392b', marginTop: 4, display: 'block' }}>{errors.time}</span>}
            </div>
            <div>
              <label style={labelStyle}>{t.guests}</label>
              <select style={inputStyle} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n}>{n} {lang === 'th' ? 'คน' : (n === 1 ? 'guest' : 'guests')}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.note}</label>
              <input style={inputStyle} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} placeholder={t.notePlaceholder} />
            </div>
          </div>

          {status === 'error' && (
            <p style={{ marginTop: 12, fontSize: 13, color: '#c0392b', fontFamily: ff }}>{t.error}</p>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', marginTop: 28, justifyContent: 'center', fontFamily: ff, fontSize: 15 }}>
            {status === 'loading' ? '...' : t.btn}
          </button>
        </form>
      </div>
    </section>
  )
}
