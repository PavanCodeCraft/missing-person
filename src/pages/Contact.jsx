import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Shield } from 'lucide-react';

const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)', fontSize: '14px',
  outline: 'none', transition: 'border-color 0.2s ease',
  fontFamily: 'var(--font-body)',
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '60px 24px 40px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: 'var(--accent-blue)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contact
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-1.5px',
              color: 'var(--text-primary)', marginBottom: '12px',
            }}>Get in Touch</h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: 560 }}>
              Have information about a missing person? Or need help with a case? We're here 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: '32px' }} className="contact-grid">

          {/* Left Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: Phone, title: 'Emergency Helpline', value: '1800-XXX-XXXX', sub: 'Available 24/7 — Free Call', color: '#ff3b3b', href: 'tel:100' },
              { icon: Phone, title: 'Police Emergency', value: '100', sub: 'For immediate assistance', color: '#ff3b3b', href: 'tel:100' },
              { icon: Mail, title: 'Email Us', value: 'help@findthem.in', sub: 'Response within 2 hours', color: 'var(--accent-blue)', href: 'mailto:help@findthem.in' },
              { icon: MapPin, title: 'Headquarters', value: 'New Delhi, India', sub: 'Serving all of India', color: '#4ade80', href: null },
              { icon: Clock, title: 'Operating Hours', value: '24 hours / 7 days', sub: 'Round-the-clock support', color: '#ffb830', href: null },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href || undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '20px', textDecoration: 'none',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  cursor: item.href ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (item.href) {
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.background = `${item.color}08`;
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={18} color={item.color} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
              </motion.a>
            ))}

            {/* Confidentiality note */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                padding: '20px',
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.15)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', gap: '12px', alignItems: 'flex-start',
              }}
            >
              <Shield size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Strict Confidentiality</div>
                <div style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  All information you share is treated with complete confidentiality. Tips are shared only with relevant authorities.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 3, background: 'linear-gradient(90deg, #3b82f6, #6366f1)' }} />
            <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{
                      width: 72, height: 72, borderRadius: '50%',
                      background: 'rgba(74,222,128,0.1)',
                      border: '2px solid rgba(74,222,128,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <CheckCircle size={32} color="#4ade80" />
                  </motion.div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    Our team will get back to you within 2 hours.
                  </p>
                  <button onClick={() => setSent(false)} style={{ padding: '10px 22px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                    <MessageSquare size={20} color="var(--accent-blue)" />
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)' }}>
                      Send a Message
                    </h2>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Message Type
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['Tip / Lead', 'General Inquiry', 'Report Issue', 'Volunteer'].map(t => (
                        <button key={t} onClick={() => update('type', t)} style={{
                          padding: '8px 14px',
                          background: form.type === t ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.type === t ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
                          borderRadius: 'var(--radius-sm)',
                          color: form.type === t ? 'var(--accent-blue)' : 'var(--text-secondary)',
                          fontWeight: form.type === t ? 700 : 400,
                          fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-body)',
                          transition: 'all 0.2s ease',
                        }}>{t}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Your Name</label>
                      <input style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</label>
                      <input style={inputStyle} value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Email</label>
                    <input style={inputStyle} type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </div>

                  <div style={{ marginBottom: '28px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Your Message *</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: 130, resize: 'vertical' }}
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                      placeholder="Please describe your information or query in detail..."
                      onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => form.message && setSent(true)}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      border: 'none', borderRadius: 'var(--radius-md)',
                      color: '#fff', fontWeight: 700, fontSize: '15px',
                      cursor: 'pointer', fontFamily: 'var(--font-body)',
                      boxShadow: '0 0 40px rgba(59,130,246,0.25)',
                    }}
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
