import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, X, AlertCircle } from 'lucide-react';
import { missingPersons } from '../data/mockData';
import MissingCard from '../components/MissingCard';

const Browse = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterUrgency, setFilterUrgency] = useState('all');
  const [filterGender, setFilterGender] = useState('all');

  const filtered = useMemo(() => {
    return missingPersons.filter(p => {
      const matchSearch = !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === 'all' || p.status === filterStatus;
      const matchUrgency = filterUrgency === 'all' || p.urgency === filterUrgency;
      const matchGender = filterGender === 'all' || p.gender === filterGender;
      return matchSearch && matchStatus && matchUrgency && matchGender;
    });
  }, [search, filterStatus, filterUrgency, filterGender]);

  const filters = [
    {
      label: 'Status',
      value: filterStatus,
      setter: setFilterStatus,
      options: [
        { value: 'all', label: 'All Status' },
        { value: 'active', label: 'Active' },
        { value: 'found', label: 'Found' },
      ],
    },
    {
      label: 'Urgency',
      value: filterUrgency,
      setter: setFilterUrgency,
      options: [
        { value: 'all', label: 'All Urgency' },
        { value: 'critical', label: 'Critical' },
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
      ],
    },
    {
      label: 'Gender',
      value: filterGender,
      setter: setFilterGender,
      options: [
        { value: 'all', label: 'All Genders' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
      ],
    },
  ];

  const hasFilters = search || filterStatus !== 'all' || filterUrgency !== 'all' || filterGender !== 'all';

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '60px 24px 40px',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              color: 'var(--accent-blue)', textTransform: 'uppercase', marginBottom: '12px',
            }}>Database</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-1.5px', color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>Browse All Cases</h1>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
              Showing <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> of {missingPersons.length} registered cases
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px 80px' }}>
        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ marginBottom: '32px' }}
        >
          {/* Search */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '16px',
          }}>
            <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center' }}>
              <Search size={16} color="var(--text-muted)" />
            </div>
            <input
              type="text"
              placeholder="Search by name, location, or case ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                flex: 1, padding: '16px 0',
                background: 'transparent', border: 'none', outline: 'none',
                color: 'var(--text-primary)', fontSize: '15px',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  padding: '0 16px', background: 'transparent',
                  color: 'var(--text-muted)', display: 'flex', alignItems: 'center',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '13px' }}>
              <SlidersHorizontal size={14} />
              <span>Filter:</span>
            </div>
            {filters.map(f => (
              <select
                key={f.label}
                value={f.value}
                onChange={e => f.setter(e.target.value)}
                style={{
                  padding: '8px 14px',
                  background: f.value !== 'all' ? 'rgba(59,130,246,0.1)' : 'var(--bg-card)',
                  border: `1px solid ${f.value !== 'all' ? 'rgba(59,130,246,0.3)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-sm)',
                  color: f.value !== 'all' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontSize: '13px', fontWeight: 500,
                  outline: 'none', cursor: 'pointer',
                }}
              >
                {f.options.map(o => (
                  <option key={o.value} value={o.value} style={{ background: '#0a0f1e' }}>
                    {o.label}
                  </option>
                ))}
              </select>
            ))}

            {hasFilters && (
              <button
                onClick={() => { setSearch(''); setFilterStatus('all'); setFilterUrgency('all'); setFilterGender('all'); }}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(255,59,59,0.1)',
                  border: '1px solid rgba(255,59,59,0.2)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ff3b3b', fontSize: '13px',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}
              >
                <X size={12} /> Clear All
              </button>
            )}
          </div>
        </motion.div>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {filtered.map((person, i) => (
              <MissingCard key={person.id} person={person} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center', padding: '80px 20px',
              color: 'var(--text-muted)',
            }}
          >
            <AlertCircle size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px', color: 'var(--text-secondary)' }}>
              No cases found
            </h3>
            <p style={{ fontSize: '14px' }}>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Browse;
