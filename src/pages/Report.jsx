import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle, AlertTriangle, User, MapPin, Phone, Info, ChevronRight } from 'lucide-react';

const steps = ['Personal Info', 'Last Seen Details', 'Contact & Submit'];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  fontFamily: 'var(--font-body)',
};

const labelStyle = {
  display: 'block',
  fontSize: '12px', fontWeight: 600, letterSpacing: '1px',
  color: 'var(--text-muted)', textTransform: 'uppercase',
  marginBottom: '8px',
};

const FormField = ({ label, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <label style={labelStyle}>{label}</label>
    {children}
  </div>
);

const Report = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', age: '', gender: '', height: '', weight: '', eyes: '', hair: '',
    location: '', lastSeen: '', description: '', circumstances: '',
    reporterName: '', reporterPhone: '', reporterEmail: '', relationship: '',
  });

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '72px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '72px 24px 80px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 500, width: '100%', margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid rgba(74,222,128,0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 40px',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(74,222,128,0.1)',
              border: '2px solid rgba(74,222,128,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <CheckCircle size={36} color="#4ade80" />
          </motion.div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800, fontSize: '28px',
            color: 'var(--text-primary)', marginBottom: '12px',
          }}>Report Submitted!</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Your report has been received. Our team will review and publish it within 2 hours. A unique case ID will be sent to your contact.
          </p>
          <div style={{
            padding: '16px 24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'monospace', fontSize: '16px', letterSpacing: '2px',
            color: 'var(--accent-blue)', marginBottom: '24px',
          }}>
            Case ID: MP-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}
          </div>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ name: '', age: '', gender: '', height: '', weight: '', eyes: '', hair: '', location: '', lastSeen: '', description: '', circumstances: '', reporterName: '', reporterPhone: '', reporterEmail: '', relationship: '' }); }}
            style={{
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
            }}
          >
            File Another Report
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '60px 24px 40px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px',
              background: 'rgba(255,59,59,0.1)',
              border: '1px solid rgba(255,59,59,0.25)',
              borderRadius: 100, marginBottom: '20px',
              fontSize: '12px', fontWeight: 700, color: '#ff3b3b', letterSpacing: '1px',
            }}>
              <AlertTriangle size={12} />
              EMERGENCY REPORTING
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)',
              letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: '12px',
            }}>Report a Missing Person</h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px' }}>
              Please provide as much detail as possible. Accurate information helps us act faster.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Step Indicator */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '40px', position: 'relative' }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                  <motion.div
                    animate={{
                      background: i === step ? 'var(--accent-blue)' : i < step ? '#4ade80' : 'rgba(255,255,255,0.06)',
                      borderColor: i === step ? 'var(--accent-blue)' : i < step ? '#4ade80' : 'rgba(255,255,255,0.1)',
                    }}
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
                      border: '2px solid',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '13px',
                      color: i <= step ? '#fff' : 'var(--text-muted)',
                    }}
                  >
                    {i < step ? <CheckCircle size={16} /> : i + 1}
                  </motion.div>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px',
                    color: i === step ? 'var(--text-primary)' : 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                  }}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 18, left: '50%', right: '-50%',
                    height: 2,
                    background: i < step ? '#4ade80' : 'rgba(255,255,255,0.06)',
                    zIndex: 0,
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(24px, 4vw, 40px)',
                marginBottom: '24px',
              }}
            >
              {step === 0 && (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '24px' }}>
                    Personal Information
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }} className="form-grid">
                    <FormField label="Full Name *">
                      <input style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Enter full name" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Age *">
                      <input style={inputStyle} type="number" value={form.age} onChange={e => update('age', e.target.value)} placeholder="Age in years" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Gender *">
                      <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.gender} onChange={e => update('gender', e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </FormField>
                    <FormField label="Height">
                      <input style={inputStyle} value={form.height} onChange={e => update('height', e.target.value)} placeholder="e.g. 5'8&quot;" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Eye Color">
                      <input style={inputStyle} value={form.eyes} onChange={e => update('eyes', e.target.value)} placeholder="e.g. Brown" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Hair Description">
                      <input style={inputStyle} value={form.hair} onChange={e => update('hair', e.target.value)} placeholder="e.g. Black, short" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                  </div>
                  <FormField label="Physical Description">
                    <textarea
                      style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                      value={form.description}
                      onChange={e => update('description', e.target.value)}
                      placeholder="Describe clothing, distinguishing features, tattoos, etc."
                      onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </FormField>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '24px' }}>
                    Last Seen Details
                  </h2>
                  <FormField label="Last Known Location *">
                    <input style={inputStyle} value={form.location} onChange={e => update('location', e.target.value)} placeholder="City, State or specific address" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </FormField>
                  <FormField label="Date Last Seen *">
                    <input style={{ ...inputStyle, colorScheme: 'dark' }} type="date" value={form.lastSeen} onChange={e => update('lastSeen', e.target.value)} />
                  </FormField>
                  <FormField label="Circumstances of Disappearance">
                    <textarea
                      style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                      value={form.circumstances}
                      onChange={e => update('circumstances', e.target.value)}
                      placeholder="Describe what happened before the person went missing, any unusual behavior, people seen with them, etc."
                      onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </FormField>
                  {/* Photo Upload Area */}
                  <FormField label="Upload Photo (Recommended)">
                    <div style={{
                      border: '2px dashed rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-md)',
                      padding: '40px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s ease, background 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.background = 'rgba(59,130,246,0.04)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <Upload size={32} color="var(--text-muted)" style={{ margin: '0 auto 12px' }} />
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                        Drag & drop or <span style={{ color: 'var(--accent-blue)' }}>browse files</span>
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>JPG, PNG up to 10MB</p>
                    </div>
                  </FormField>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '24px' }}>
                    Your Contact Information
                  </h2>
                  <div style={{
                    padding: '16px', marginBottom: '24px',
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex', gap: '10px', alignItems: 'flex-start',
                  }}>
                    <Info size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Your information is confidential and used only to coordinate the search. It will not be published publicly.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }} className="form-grid">
                    <FormField label="Your Full Name *">
                      <input style={inputStyle} value={form.reporterName} onChange={e => update('reporterName', e.target.value)} placeholder="Your name" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Relationship to Missing Person">
                      <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.relationship} onChange={e => update('relationship', e.target.value)}>
                        <option value="">Select relationship</option>
                        <option>Parent</option>
                        <option>Sibling</option>
                        <option>Spouse</option>
                        <option>Friend</option>
                        <option>Neighbor</option>
                        <option>Other</option>
                      </select>
                    </FormField>
                    <FormField label="Phone Number *">
                      <input style={inputStyle} type="tel" value={form.reporterPhone} onChange={e => update('reporterPhone', e.target.value)} placeholder="+91 XXXXX XXXXX" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                    <FormField label="Email Address">
                      <input style={inputStyle} type="email" value={form.reporterEmail} onChange={e => update('reporterEmail', e.target.value)} placeholder="your@email.com" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </FormField>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              style={{
                padding: '12px 24px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: step === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                fontWeight: 600, fontSize: '14px',
                cursor: step === 0 ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-body)',
              }}
            >
              Back
            </button>

            {step < steps.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(s => s + 1)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px',
                  background: 'var(--accent-blue)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  color: '#fff', fontWeight: 700, fontSize: '14px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}
              >
                Continue <ChevronRight size={16} />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px',
                  background: 'linear-gradient(135deg, #ff3b3b, #ff6b35)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  color: '#fff', fontWeight: 700, fontSize: '14px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                  boxShadow: '0 0 30px rgba(255,59,59,0.3)',
                }}
              >
                <AlertTriangle size={16} />
                Submit Report
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Report;
