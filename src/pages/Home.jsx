import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Search, AlertTriangle, Users, CheckCircle,
  ArrowRight, Shield, Clock, Bell, ChevronRight,
  Eye, MessageCircle, MapPin
} from 'lucide-react';
import { stats, missingPersons } from '../data/mockData';
import MissingCard from '../components/MissingCard';

const AnimatedNumber = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const StatCard = ({ icon: Icon, label, value, suffix, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* BG glow */}
    <div style={{
      position: 'absolute', top: -40, right: -40,
      width: 120, height: 120, borderRadius: '50%',
      background: `${color}15`,
      filter: 'blur(30px)',
    }} />

    <div style={{
      width: 44, height: 44, borderRadius: 12,
      background: `${color}15`,
      border: `1px solid ${color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '20px',
    }}>
      <Icon size={20} color={color} />
    </div>

    <div style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 800, fontSize: '36px',
      color: 'var(--text-primary)',
      letterSpacing: '-1px',
      lineHeight: 1,
      marginBottom: '6px',
    }}>
      <AnimatedNumber target={value} suffix={suffix} />
    </div>
    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{label}</div>
  </motion.div>
);

const Home = () => {
  const urgentCases = missingPersons.filter(p => p.urgency === 'critical' || p.urgency === 'high').slice(0, 3);

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }} />

        {/* Glows */}
        <div style={{
          position: 'absolute', top: '15%', left: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(59,130,246,0.08)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(255,59,59,0.06)',
          filter: 'blur(80px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px',
                background: 'rgba(255,59,59,0.1)',
                border: '1px solid rgba(255,59,59,0.25)',
                borderRadius: 100, marginBottom: '32px',
                fontSize: '13px', fontWeight: 600, color: '#ff3b3b',
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#ff3b3b',
                boxShadow: '0 0 8px #ff3b3b',
                animation: 'blink 1.5s ease-in-out infinite',
              }} />
              {stats.activeCases.toLocaleString()} Active Cases Need Your Help
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(40px, 7vw, 80px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              Help Us Bring
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Them Home
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                maxWidth: '560px', margin: '0 auto 40px',
              }}
            >
              India's most trusted missing persons platform. Report, search, and help reunite families — every second matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/report">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #ff3b3b, #ff6b35)',
                    color: '#fff', fontWeight: 700, fontSize: '15px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 0 40px rgba(255,59,59,0.3)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <AlertTriangle size={16} />
                  Report Missing Person
                </motion.button>
              </Link>

              <Link to="/browse">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer', fontFamily: 'var(--font-body)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Search size={16} />
                  Browse All Cases
                </motion.button>
              </Link>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ marginTop: '40px', maxWidth: '500px', margin: '40px auto 0' }}
            >
              <div style={{
                display: 'flex',
                background: 'var(--bg-card)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}>
                <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center' }}>
                  <Search size={16} color="var(--text-muted)" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name, location, or case ID..."
                  style={{
                    flex: 1, padding: '14px 0',
                    background: 'transparent',
                    border: 'none', outline: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                  }}
                  onFocus={e => e.currentTarget.parentElement.style.borderColor = 'rgba(59,130,246,0.4)'}
                  onBlur={e => e.currentTarget.parentElement.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <Link to="/browse">
                  <button style={{
                    padding: '10px 20px', margin: '6px',
                    background: 'var(--accent-blue)',
                    color: '#fff', border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600, fontSize: '13px',
                    cursor: 'pointer', fontFamily: 'var(--font-body)',
                  }}>
                    Search
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 24px 80px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}>
            <StatCard icon={Users} label="Total Cases Registered" value={stats.totalCases} color="#3b82f6" delay={0} />
            <StatCard icon={AlertTriangle} label="Active Cases" value={stats.activeCases} color="#ff3b3b" delay={0.08} />
            <StatCard icon={CheckCircle} label="Found This Month" value={stats.foundThisMonth} color="#4ade80" delay={0.16} />
            <StatCard icon={Users} label="Volunteers" value={stats.volunteers} suffix="+" color="#ffb830" delay={0.24} />
          </div>
        </div>
      </section>

      {/* Urgent Cases */}
      <section style={{ padding: '0 24px 80px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', fontWeight: 700, letterSpacing: '2px',
                  color: '#ff3b3b', textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff3b3b', animation: 'blink 1.5s ease-in-out infinite' }} />
                  Urgent
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)',
                  letterSpacing: '-1px', color: 'var(--text-primary)',
                }}>
                  Most Critical Cases
                </h2>
              </div>
              <Link to="/browse">
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    color: 'var(--accent-blue)', fontWeight: 600, fontSize: '14px',
                  }}
                >
                  View All Cases <ChevronRight size={16} />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {urgentCases.map((person, i) => (
              <MissingCard key={person.id} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <p style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              color: 'var(--accent-blue)', textTransform: 'uppercase', marginBottom: '12px',
            }}>How It Works</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800, fontSize: 'clamp(28px, 4vw, 46px)',
              letterSpacing: '-1px', color: 'var(--text-primary)',
            }}>Three Steps to Help</h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}>
            {[
              { icon: AlertTriangle, step: '01', title: 'Report', desc: 'Submit detailed information about the missing person including photos, last known location, and description.', color: '#ff3b3b' },
              { icon: Eye, step: '02', title: 'Spread Awareness', desc: 'Cases are published instantly across our network, reaching thousands of volunteers and law enforcement.', color: '#3b82f6' },
              { icon: CheckCircle, step: '03', title: 'Reunite', desc: 'Community tips and leads help locate missing persons. We coordinate with authorities to ensure safe reunification.', color: '#4ade80' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  textAlign: 'center', padding: '40px 32px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: 1, height: 40, background: `linear-gradient(${item.color}, transparent)`,
                }} />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800, fontSize: '64px',
                  color: `${item.color}10`,
                  position: 'absolute', top: '16px', right: '20px',
                  lineHeight: 1,
                }}>{item.step}</div>

                <div style={{
                  width: 60, height: 60, borderRadius: 'var(--radius-md)',
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <item.icon size={26} color={item.color} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700, fontSize: '22px',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.1))',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(40px, 6vw, 80px)',
              textAlign: 'center',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400, height: 400, borderRadius: '50%',
              background: 'rgba(59,130,246,0.08)',
              filter: 'blur(60px)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Shield size={48} color="var(--accent-blue)" style={{ margin: '0 auto 24px' }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '-1px', color: 'var(--text-primary)',
                marginBottom: '16px',
              }}>
                Know Something? Tell Us.
              </h2>
              <p style={{
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: 'var(--text-secondary)',
                maxWidth: '480px', margin: '0 auto 32px',
                lineHeight: 1.7,
              }}>
                Even a small tip can reunite a family. All information is treated with strict confidentiality.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 32px',
                    background: 'var(--accent-blue)',
                    color: '#fff', fontWeight: 700, fontSize: '15px',
                    borderRadius: 'var(--radius-md)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    boxShadow: '0 0 40px rgba(59,130,246,0.3)',
                  }}
                >
                  <MessageCircle size={16} />
                  Share Information
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Home;
