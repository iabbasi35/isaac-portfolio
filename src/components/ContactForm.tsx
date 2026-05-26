import { useState, useCallback } from 'react'

const STEP_LABELS = ['About You', 'Your Challenge', 'Scope & Timeline', 'Anything Else']
const TRAINING_TYPES = ['AI / Tech Enablement', 'Sales Enablement', 'Onboarding', 'Process Training', 'Leadership Development', 'Other']
const DELIVERY_FORMATS = ['Self-paced eLearning', 'VILT / Live', 'AI-powered', 'Video', 'Blended']

interface FormState {
  name: string
  _replyto: string
  company: string
  role: string
  challenge: string
  training_types: string[]
  audience_size: string
  budget: string
  timeline: string
  delivery_formats: string[]
  referral_source: string
  additional_context: string
}

const initial: FormState = {
  name: '', _replyto: '', company: '', role: '',
  challenge: '', training_types: [], audience_size: '',
  budget: '', timeline: '', delivery_formats: [],
  referral_source: '', additional_context: '',
}

function IAMonogram() {
  return (
    <div className="cf-monogram">
      <span className="cf-monogram-text">IA</span>
      <span className="cf-monogram-dot" />
    </div>
  )
}

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [fading, setFading] = useState(false)
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const setField = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const togglePill = (field: 'training_types' | 'delivery_formats', value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(v => v !== value)
        : [...(prev[field] as string[]), value],
    }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (step === 0) {
      if (!form.name.trim()) e.name = 'Name is required.'
      if (!form._replyto.trim()) e._replyto = 'Email is required.'
    }
    if (step === 1) {
      if (form.training_types.length === 0) e.training_types = 'Please select at least one option.'
    }
    if (step === 2) {
      if (!form.budget) e.budget = 'Budget range is required.'
      if (!form.timeline) e.timeline = 'Timeline is required.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goTo = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setStep(next)
      requestAnimationFrame(() => requestAnimationFrame(() => setFading(false)))
    }, 180)
  }, [])

  const handleNext = () => { if (validate()) goTo(step + 1) }
  const handleBack = () => goTo(step - 1)

  const handleSubmit = async () => {
    setSubmitting(true)
    setSubmitError(false)
    const payload = {
      ...form,
      training_types: form.training_types.join(', '),
      delivery_formats: form.delivery_formats.join(', '),
    }
    try {
      const res = await fetch('https://formspree.io/f/xdajwpnz', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) setSubmitted(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const progressPct = [25, 50, 75, 100][step]

  return (
    <section className="cf-section" id="contact">
      <div className="cf-header">
        <h2 className="cf-heading">Let's work together.</h2>
        <p className="cf-sub">Tell me about your training challenge and I'll follow up within 24 hours.</p>
      </div>

      <div className="cf-card">
        {submitted ? (
          <div className="cf-success">
            <IAMonogram />
            <h3 className="cf-success-heading">You're on my radar.</h3>
            <p className="cf-success-sub">I'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="cf-progress">
              <div className="cf-step-labels">
                {STEP_LABELS.map((label, i) => (
                  <span key={label} className={`cf-step-label${i === step ? ' active' : ''}`}>{label}</span>
                ))}
              </div>
              <div className="cf-track">
                <div className="cf-track-fill" style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            <div className={`cf-steps${fading ? ' fading' : ''}`}>
              {step === 0 && (
                <div className="cf-step">
                  <div className="cf-field">
                    <label className="cf-label">Full Name *</label>
                    <input className={`cf-input${errors.name ? ' cf-input--error' : ''}`} type="text" value={form.name} onChange={e => setField('name', e.target.value)} placeholder="Jane Smith" />
                    {errors.name && <span className="cf-error">{errors.name}</span>}
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Email *</label>
                    <input className={`cf-input${errors._replyto ? ' cf-input--error' : ''}`} type="email" value={form._replyto} onChange={e => setField('_replyto', e.target.value)} placeholder="jane@company.com" />
                    {errors._replyto && <span className="cf-error">{errors._replyto}</span>}
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Company / Organization</label>
                    <input className="cf-input" type="text" value={form.company} onChange={e => setField('company', e.target.value)} placeholder="Acme Corp" />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Your Role</label>
                    <select className="cf-select" value={form.role} onChange={e => setField('role', e.target.value)}>
                      <option value="">Select…</option>
                      <option>L&D Leader</option>
                      <option>HR / People Ops</option>
                      <option>Founder / Executive</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="cf-step">
                  <div className="cf-field">
                    <label className="cf-label">What's your biggest L&D challenge right now?</label>
                    <textarea className="cf-textarea" style={{ minHeight: 100 }} value={form.challenge} onChange={e => setField('challenge', e.target.value)} placeholder="Tell me what's not working, what you're building, or what's keeping you up at night." />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Type of training needed *</label>
                    <div className="cf-pills">
                      {TRAINING_TYPES.map(t => (
                        <button key={t} type="button" className={`cf-pill${form.training_types.includes(t) ? ' selected' : ''}`} onClick={() => togglePill('training_types', t)}>{t}</button>
                      ))}
                    </div>
                    {errors.training_types && <span className="cf-error">{errors.training_types}</span>}
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Audience Size</label>
                    <select className="cf-select" value={form.audience_size} onChange={e => setField('audience_size', e.target.value)}>
                      <option value="">Select…</option>
                      <option>1–50</option>
                      <option>51–500</option>
                      <option>500–5,000</option>
                      <option>5,000+</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="cf-step">
                  <div className="cf-field">
                    <label className="cf-label">Budget Range *</label>
                    <select className={`cf-select${errors.budget ? ' cf-input--error' : ''}`} value={form.budget} onChange={e => setField('budget', e.target.value)}>
                      <option value="">Select…</option>
                      <option>Under $5k</option>
                      <option>$5k–$15k</option>
                      <option>$15k–$50k</option>
                      <option>$50k+</option>
                      <option>Not sure yet</option>
                    </select>
                    {errors.budget && <span className="cf-error">{errors.budget}</span>}
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Timeline *</label>
                    <select className={`cf-select${errors.timeline ? ' cf-input--error' : ''}`} value={form.timeline} onChange={e => setField('timeline', e.target.value)}>
                      <option value="">Select…</option>
                      <option>ASAP</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Flexible</option>
                    </select>
                    {errors.timeline && <span className="cf-error">{errors.timeline}</span>}
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Delivery Format Preferred</label>
                    <div className="cf-pills">
                      {DELIVERY_FORMATS.map(f => (
                        <button key={f} type="button" className={`cf-pill${form.delivery_formats.includes(f) ? ' selected' : ''}`} onClick={() => togglePill('delivery_formats', f)}>{f}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="cf-step">
                  <div className="cf-field">
                    <label className="cf-label">How did you hear about Isaac?</label>
                    <select className="cf-select" value={form.referral_source} onChange={e => setField('referral_source', e.target.value)}>
                      <option value="">Select…</option>
                      <option>LinkedIn</option>
                      <option>Google</option>
                      <option>Referral</option>
                      <option>Coursera</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Anything else?</label>
                    <textarea className="cf-textarea" style={{ minHeight: 80 }} value={form.additional_context} onChange={e => setField('additional_context', e.target.value)} placeholder="Anything else that would help me understand your situation." />
                  </div>
                </div>
              )}
            </div>

            <div className={`cf-nav${step > 0 ? ' cf-nav--split' : ' cf-nav--end'}`}>
              {step > 0 && (
                <button type="button" className="cf-btn-back" onClick={handleBack}>Back</button>
              )}
              {step < 3 ? (
                <button type="button" className="cf-btn-next" onClick={handleNext}>Next</button>
              ) : (
                <button type="button" className="cf-btn-next" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send it →'}
                </button>
              )}
            </div>

            {submitError && (
              <p className="cf-submit-error">Something went wrong — please email me directly.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
