import { motion } from 'framer-motion'

const DashboardMockup = () => (
    <div style={{
        borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
        border: '1px solid #E2E8F0', background: '#F8FAFC',
    }}>
        {/* Top bar */}
        <div style={{
            padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px',
            borderBottom: '1px solid #F1F5F9', background: 'white',
        }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F87171' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FCD34D' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4ADE80' }} />
            <span style={{ marginLeft: '8px', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>DopaMind Dashboard</span>
        </div>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Two metric cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ borderRadius: '14px', padding: '16px', background: 'var(--dash-dark)' }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', letterSpacing: '0.05em' }}>OFFLINE FOCUS</p>
                    <p style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>2h 15m</p>
                    <p style={{ fontSize: '11px', color: '#10B981', marginBottom: '10px' }}>↑ +23% vs yesterday</p>
                    <div style={{ height: '6px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: '40%', borderRadius: '99px', background: '#10B981' }} />
                    </div>
                </div>
                <div style={{ borderRadius: '14px', padding: '16px', background: 'white', border: '1px solid #F1F5F9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.05em' }}>SCREEN TIME</p>
                    <p style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>4h 30m</p>
                    <p style={{ fontSize: '11px', color: 'var(--over-limit)', marginBottom: '10px' }}>↑ +12% vs yesterday</p>
                    <div style={{ height: '6px', borderRadius: '99px', background: '#F1F5F9', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: '72%', borderRadius: '99px', background: 'var(--primary)' }} />
                    </div>
                </div>
            </div>

            {/* Weekly Bar Chart */}
            <div style={{ borderRadius: '14px', padding: '16px', background: 'white', border: '1px solid #F1F5F9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>Weekly Overview</p>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '10px', color: 'var(--text-secondary)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: '#CBD5E1' }} />
                            Screen
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: 'var(--primary)' }} />
                            Offline
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
                    {[
                        { s: 65, o: 25 }, { s: 80, o: 35 }, { s: 55, o: 45 },
                        { s: 70, o: 30 }, { s: 60, o: 50 }, { s: 45, o: 55 }, { s: 50, o: 60 }
                    ].map((d, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '2px', height: '100%' }}>
                            <div style={{ flex: 1, borderRadius: '3px 3px 0 0', height: `${d.s}%`, background: '#CBD5E1' }} />
                            <div style={{ flex: 1, borderRadius: '3px 3px 0 0', height: `${d.o}%`, background: 'var(--primary)' }} />
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '6px' }}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                        <span key={i} style={{ fontSize: '9px', color: 'var(--text-hint)', textAlign: 'center', flex: 1 }}>{d}</span>
                    ))}
                </div>
            </div>

            {/* Live Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                    { label: 'Pickups Today', value: '23', delta: '-8%', positive: false },
                    { label: 'Focus Score', value: '81/100', delta: '+5%', positive: true },
                    { label: 'Day Streak', value: '🔥 7', delta: '', positive: true },
                    { label: 'Avg Session', value: '18m', delta: '-12%', positive: true },
                ].map((m) => (
                    <div key={m.label} style={{ borderRadius: '12px', padding: '12px', background: 'white', border: '1px solid #F1F5F9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '4px' }}>{m.label}</p>
                        <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>{m.value}</p>
                        {m.delta && (
                            <p style={{ fontSize: '10px', fontWeight: 600, color: m.positive ? 'var(--secondary)' : 'var(--over-limit)', marginTop: '2px' }}>
                                {m.delta}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const DashboardPreview = () => (
    <section style={{ padding: '100px 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '72px',
                flexWrap: 'wrap',
            }}>
                {/* Left text */}
                <motion.div
                    style={{ flex: '1 1 320px' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '8px 18px', borderRadius: '50px', fontSize: '14px', fontWeight: 600,
                        background: 'var(--primary-light)', color: 'var(--primary)', marginBottom: '20px',
                    }}>
                        📊 Live Dashboard
                    </div>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2 }}>
                        Everything you need.<br />
                        <span style={{ color: 'var(--primary)' }}>At a glance.</span>
                    </h2>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '36px' }}>
                        DopaMind gives you a live command center for your digital wellness journey.
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            'Screen Time + Offline Focus comparison cards',
                            'Pickups today & average session length',
                            'Weekly bar chart (screen vs offline)',
                            'Hourly usage area chart',
                            'Most-used apps with over/within-limit badge',
                        ].map((item) => (
                            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{
                                    width: '22px', height: '22px', borderRadius: '50%', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', fontSize: '12px',
                                    color: 'white', flexShrink: 0, marginTop: '1px', background: 'var(--secondary)',
                                }}>✓</span>
                                <span style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right dashboard */}
                <motion.div
                    style={{ flex: '1 1 360px', minWidth: '0' }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <DashboardMockup />
                </motion.div>
            </div>
        </div>
    </section>
)

export default DashboardPreview
