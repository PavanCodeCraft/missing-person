import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, AlertCircle, Clock } from 'lucide-react';

const urgencyConfig = {
  critical: { color: '#ff3b3b', bg: 'rgba(255,59,59,0.12)', label: 'CRITICAL', pulse: true },
  high: { color: '#ff8c00', bg: 'rgba(255,140,0,0.12)', label: 'HIGH PRIORITY', pulse: false },
  medium: { color: '#ffb830', bg: 'rgba(255,184,48,0.1)', label: 'ACTIVE', pulse: false },
  low: { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', label: 'FOUND', pulse: false },
};

const MissingCard = ({ person, index }) => {
  const urgency = urgencyConfig[person.urgency] || urgencyConfig.medium;
  const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  const daysMissing = Math.floor(
    (new Date() - new Date(person.lastSeen)) / (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 3,
        background: person.urgency === 'critical'
          ? 'linear-gradient(90deg, #ff3b3b, #ff6b35)'
          : person.urgency === 'high'
            ? 'linear-gradient(90deg, #ff8c00, #ffb830)'
            : person.urgency === 'low'
              ? 'linear-gradient(90deg, #4ade80, #22d3ee)'
              : 'linear-gradient(90deg, #3b82f6, #6366f1)',
      }} />

      <div style={{ padding: '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
          {/* Avatar */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: `linear-gradient(135deg, ${urgency.color}20, ${urgency.color}05)`,
              border: `2px solid ${urgency.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '22px',
              color: urgency.color,
              position: 'relative',
            }}>
              {initials}
              {urgency.pulse && (
                <div style={{
                  position: 'absolute', inset: -4,
                  borderRadius: '50%',
                  border: `2px solid ${urgency.color}`,
                  animation: 'pulse-ring 2s ease-out infinite',
                }} />
              )}
            </div>
            {/* Status dot */}
            <div style={{
              position: 'absolute', bottom: 2, right: 2,
              width: 14, height: 14, borderRadius: '50%',
              background: urgency.color,
              border: '2px solid var(--bg-card)',
              boxShadow: `0 0 8px ${urgency.color}`,
            }} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '18px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.3px',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{person.name}</h3>
              <span style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px',
                color: urgency.color,
                background: urgency.bg,
                padding: '4px 8px', borderRadius: 4,
                flexShrink: 0, marginLeft: 8,
                textTransform: 'uppercase',
              }}>{urgency.label}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Age: <strong style={{ color: 'var(--text-primary)' }}>{person.age}</strong>
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {person.gender}
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={13} color="var(--accent-blue)" />
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{person.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={13} color="var(--text-muted)" />
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Last seen:{' '}
              <strong style={{ color: daysMissing > 7 ? '#ff8c00' : 'var(--text-primary)' }}>
                {daysMissing === 0 ? 'Today' : daysMissing === 1 ? '1 day ago' : `${daysMissing} days ago`}
              </strong>
            </span>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '13px', lineHeight: '1.6',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {person.description}
        </p>

        {/* Case ID + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '1px',
            color: 'var(--text-muted)',
            fontFamily: 'monospace',
          }}>{person.id}</span>

          <Link to={`/case/${person.id}`}>
            <motion.div
              whileHover={{ x: 4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 16px',
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--accent-blue)',
                fontSize: '13px', fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
              }}
            >
              View Case <ArrowRight size={14} />
            </motion.div>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default MissingCard;
