import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, AlertTriangle, Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/browse', label: 'Browse Cases' },
    { to: '/report', label: 'Report Missing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(5, 8, 16, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #ff3b3b, #ff6b35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255,59,59,0.4)',
          }}>
            <AlertTriangle size={18} color="#fff" />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.3px',
            }}>FindThem</span>
            <span style={{
              display: 'block',
              fontSize: '9px',
              letterSpacing: '2px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginTop: '1px',
            }}>Missing Persons Network</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav">
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '14px',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
                {active && (
                  <motion.div layoutId="navIndicator" style={{
                    position: 'absolute', bottom: -1, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 20, height: 2,
                    background: 'var(--accent-blue)',
                    borderRadius: 2,
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="tel:100" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '9px 18px',
            background: 'rgba(255,59,59,0.15)',
            border: '1px solid rgba(255,59,59,0.3)',
            borderRadius: 'var(--radius-sm)',
            color: '#ff3b3b',
            fontSize: '13px',
            fontWeight: 600,
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,59,59,0.25)';
              e.currentTarget.style.boxShadow = 'var(--shadow-red)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,59,59,0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            className="emergency-btn"
          >
            <Phone size={14} />
            Emergency: 100
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px',
              color: 'var(--text-primary)',
              display: 'none',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0, right: 0,
              zIndex: 999,
              background: 'rgba(5,8,16,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '20px 24px',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={link.to} style={{
                  display: 'block', padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  color: location.pathname === link.to ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: location.pathname === link.to ? 'rgba(255,255,255,0.08)' : 'transparent',
                  fontWeight: location.pathname === link.to ? 600 : 400,
                  fontSize: '16px',
                }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .emergency-btn { padding: 9px 12px !important; font-size: 12px !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
