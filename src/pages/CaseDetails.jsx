import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, MapPin, Clock, User, Eye, Ruler, Weight,
  Phone, Mail, Share2, Flag, AlertTriangle, CheckCircle
} from 'lucide-react';
import { missingPersons } from '../data/mockData';

const urgencyConfig = {
  critical: { color: '#ff3b3b', bg: 'rgba(255,59,59,0.12)', label: 'CRITICAL — URGENT ACTION NEEDED' },
  high: { color: '#ff8c00', bg: 'rgba(255,140,0,0.12)', label: 'HIGH PRIORITY' },
  medium: { color: '#ffb830', bg: 'rgba(255,184,48,0.1)', label: 'ACTIVE CASE' },
  low: { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', label: 'PERSON FOUND' },
};

const InfoRow = ({ icon: Icon, label, value, color = 'var(--accent-blue)' }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '12px',
    padding: '14px 0',
    borderBottom: '1px solid var(--border-subtle)',
  }}>
    <div style={{
      width: 36, height: 36, flexShrink: 0, borderRadius: 10,
      background: 'rgba(255,255,255,0.04)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={15} color={color} />
    </div>
    <div>
      <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
        {label}
      </div>
      <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
    </div>
  </div>
);

const CaseDetails = () => {
  const { id } = useParams();
  const person = missingPersons.find(p => p.id === id);

  if (!person) {
    return (
      <div style={{ paddingTop: '72px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <AlertTriangle size={48} color="var(--text-muted)" />
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>Case Not Found</h2>
        <Link to="/browse" style={{ color: 'var(--accent-blue)', fontSize: '14px' }}>← Back to Browse</Link>
      </div>
    );
  }

  const urgency = urgencyConfig[person.urgency];
  const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const daysMissing = Math.floor((new Date() - new Date(person.lastSeen)) / (1000 * 60 * 60 * 24));

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Back */}
      <div style={{ padding: '24px 24px 0' }}>
        <div className="container">
          <Link to="/browse">
            <motion.div
              whileHover={{ x: -4 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: 'var(--text-secondary)', fontSize: '14px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ArrowLeft size={16} /> Back to Cases
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Urgency Banner */}
      {(person.urgency === 'critical' || person.urgency === 'high') && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            margin: '20px 24px',
            padding: '14px 20px',
            background: urgency.bg,
            border: `1px solid ${urgency.color}40`,
            borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', gap: '12px',
            maxWidth: 1232,
            marginLeft: 'auto', marginRight: 'auto',
          }}
        >
          <div className="container" style={{ padding: 0, display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
            <AlertTriangle size={18} color={urgency.color} />
            <span style={{ fontSize: '14px', fontWeight: 700, color: urgency.color, letterSpacing: '0.5px' }}>
              {urgency.label}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
              Missing for {daysMissing} day{daysMissing !== 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>
      )}

      <div className="container" style={{ padding: '24px', paddingBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
          gap: '24px',
        }}
          className="case-grid"
        >
          {/* Left Column */}
          <div>
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              {/* Top bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${urgency.color}, ${urgency.color}80)` }} />

              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
                  {/* Avatar */}
                  <div style={{
                    width: 120, height: 120, borderRadius: 'var(--radius-md)',
                    background: `linear-gradient(135deg, ${urgency.color}20, ${urgency.color}05)`,
                    border: `2px solid ${urgency.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800, fontSize: '36px',
                    color: urgency.color, flexShrink: 0,
                  }}>
                    {initials}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                      color: urgency.color, textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}>{urgency.label}</div>
                    <h1 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)',
                      letterSpacing: '-0.5px', color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}>{person.name}</h1>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{person.age}</strong> years old
                      </span>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{person.gender}</span>
                    </div>
                    <div style={{
                      display: 'inline-block', marginTop: '12px',
                      padding: '4px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 6, fontSize: '11px',
                      color: 'var(--text-muted)', fontFamily: 'monospace', letterSpacing: '1px',
                    }}>
                      {person.id}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div style={{
                  padding: '20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <h3 style={{
                    fontSize: '12px', fontWeight: 700, letterSpacing: '2px',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}>Description</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    {person.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Physical Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
              }}
            >
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '18px',
                color: 'var(--text-primary)', marginBottom: '4px',
              }}>Physical Description</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Use these details to identify the person
              </p>

              <InfoRow icon={MapPin} label="Last Known Location" value={person.location} />
              <InfoRow icon={Clock} label="Last Seen" value={new Date(person.lastSeen).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} />
              <InfoRow icon={Ruler} label="Height" value={person.height} />
              <InfoRow icon={Weight} label="Weight" value={person.weight} />
              <InfoRow icon={Eye} label="Eye Color" value={person.eyes} />
              <InfoRow icon={User} label="Hair" value={person.hair} />
            </motion.div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                background: person.status === 'found'
                  ? 'rgba(74,222,128,0.08)'
                  : 'rgba(255,59,59,0.06)',
                border: `1px solid ${person.status === 'found' ? 'rgba(74,222,128,0.2)' : 'rgba(255,59,59,0.15)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              {person.status === 'found'
                ? <CheckCircle size={32} color="#4ade80" style={{ margin: '0 auto 12px' }} />
                : <AlertTriangle size={32} color="#ff3b3b" style={{ margin: '0 auto 12px' }} />
              }
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '18px',
                color: person.status === 'found' ? '#4ade80' : 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                {person.status === 'found' ? 'Person Found' : 'Still Missing'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {person.status === 'found'
                  ? 'This person has been successfully located.'
                  : `Missing for ${daysMissing} day${daysMissing !== 1 ? 's' : ''}`}
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '16px',
                color: 'var(--text-primary)', marginBottom: '16px',
              }}>Have Information?</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:100" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px',
                  background: 'rgba(255,59,59,0.1)',
                  border: '1px solid rgba(255,59,59,0.25)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ff3b3b', fontWeight: 700, fontSize: '14px',
                  transition: 'all 0.2s ease',
                }}>
                  <Phone size={16} />
                  Call Police: 100
                </a>
                <a href="tel:1800000000" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px',
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.25)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--accent-blue)', fontWeight: 600, fontSize: '14px',
                }}>
                  <Phone size={16} />
                  {person.contact}
                </a>
                <Link to="/contact">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-secondary)', fontWeight: 500, fontSize: '14px',
                    cursor: 'pointer',
                  }}>
                    <Mail size={16} />
                    Send Tip Online
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '16px',
                color: 'var(--text-primary)', marginBottom: '6px',
              }}>Spread the Word</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Sharing this case can help locate the missing person faster.
              </p>
              <button
                onClick={() => navigator.share?.({ title: `Missing: ${person.name}`, url: window.location.href }) || navigator.clipboard?.writeText(window.location.href)}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '12px',
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.1))',
                  border: '1px solid rgba(59,130,246,0.25)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--accent-blue)', fontWeight: 600, fontSize: '14px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}
              >
                <Share2 size={15} />
                Share This Case
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CaseDetails;
