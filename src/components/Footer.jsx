import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Phone, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '64px 24px 32px',
      marginTop: 'auto',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #ff3b3b, #ff6b35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(255,59,59,0.3)',
              }}>
                <AlertTriangle size={18} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '20px',
                color: 'var(--text-primary)',
              }}>FindThem</span>
            </div>
            <p style={{
              fontSize: '14px', lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>
              India's most trusted platform for locating missing persons. Every second counts.
            </p>
            {/* Emergency */}
            <a href="tel:100" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px',
              background: 'rgba(255,59,59,0.12)',
              border: '1px solid rgba(255,59,59,0.25)',
              borderRadius: 'var(--radius-sm)',
              color: '#ff3b3b', fontWeight: 700, fontSize: '14px',
            }}>
              <Phone size={14} />
              Emergency: 100
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/browse', label: 'Browse Cases' },
                { to: '/report', label: 'Report Missing Person' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <Link key={link.to} to={link.to} style={{
                  fontSize: '14px', color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={14} color="var(--accent-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>Helpline</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>1800-XXX-XXXX (24/7)</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={14} color="var(--accent-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>help@findthem.in</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={14} color="var(--accent-blue)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>HQ</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Helplines */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>Emergency Numbers</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Police', number: '100' },
                { name: 'Child Helpline', number: '1098' },
                { name: 'Women Helpline', number: '1091' },
                { name: 'Senior Citizen', number: '14567' },
              ].map(h => (
                <a key={h.number} href={`tel:${h.number}`} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '13px',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>{h.name}</span>
                  <strong style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>{h.number}</strong>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © 2025 FindThem. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Made with <Heart size={12} color="#ff3b3b" fill="#ff3b3b" /> for a safer India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
