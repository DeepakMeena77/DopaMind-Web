import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const PlayStoreIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.77c.37.22.8.26 1.2.11l.09-.06 10.02-5.79-2.17-2.16L3.18 23.77zm14.29-8.26L15.03 14l-2.53 1.46 2.43 2.42 2.54-2.37zM3 1.23l-.09.06C2.55 1.58 2.25 2.1 2.25 2.73v18.54c0 .63.3 1.15.66 1.44l.09.07 10.44-10.38L3 1.23zm14.76 8.52L15.44 8.5l-2.94 2.94 2.94 2.94 2.33-1.38c.66-.39.66-1.86-.01-2.25z" />
    </svg>
)

const PhoneMockup = () => (
    <div style={{ position: 'relative', width: '270px', margin: '0 auto' }}>
        {/* Floating decorations */}
        {[
            { emoji: '🧘', top: '40px', left: '-50px', delay: 0, wobble: 10 },
            { emoji: '📚', top: '80px', right: '-40px', delay: 0.5, wobble: 8 },
            { emoji: '🌿', bottom: '100px', left: '-36px', delay: 1, wobble: 12 },
            { emoji: '⏱️', bottom: '60px', right: '-48px', delay: 1.5, wobble: 8 },
        ].map((d, i) => (
            <motion.div
                key={i}
                animate={{ y: [0, -(d.wobble), 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
                style={{ position: 'absolute', fontSize: '28px', ...d }}
            >{d.emoji}</motion.div>
        ))}

        {/* Phone frame */}
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                position: 'relative', borderRadius: '40px', overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)', border: '4px solid #E2E8F0',
                background: '#F8FAFC', minHeight: '520px',
            }}
        >
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '14px' }}>P</div>
                        <div>
                            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)' }}>Good morning, Priya!</p>
                            <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Let's stay focused today</p>
                        </div>
                    </div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🔔</div>
                </div>

                {/* Daily Balance Card */}
                <div style={{ borderRadius: '16px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', background: 'white' }}>
                    <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Daily Balance</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {/* Screen */}
                        <div style={{ flex: 1, borderRadius: '12px', padding: '8px', background: 'var(--primary-light)' }}>
                            <p style={{ fontSize: '9px', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>📱 SCREEN</p>
                            <p style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>4h 23m</p>
                            <p style={{ fontSize: '9px', color: 'var(--over-limit)', marginBottom: '6px' }}>↑ 12% vs yesterday</p>
                            <div style={{ height: '4px', borderRadius: '99px', background: '#E2E8F0', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '72%', background: 'var(--primary)', borderRadius: '99px' }} />
                            </div>
                        </div>
                        {/* Hobbies */}
                        <div style={{ flex: 1, borderRadius: '12px', padding: '8px', background: 'var(--secondary-light)' }}>
                            <p style={{ fontSize: '9px', fontWeight: 700, color: 'var(--secondary)', marginBottom: '4px' }}>🌿 HOBBIES</p>
                            <p style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>2h 15m</p>
                            <p style={{ fontSize: '9px', color: 'var(--secondary)', marginBottom: '6px' }}>↑ 23% vs yesterday</p>
                            <div style={{ height: '4px', borderRadius: '99px', background: '#E2E8F0', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '40%', background: 'var(--secondary)', borderRadius: '99px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Today's Goal */}
                <div style={{ borderRadius: '16px', padding: '10px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9', background: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--secondary-light)', fontSize: '16px' }}>🎯</div>
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)' }}>Today's Goal</p>
                        <p style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>30 mins meditation</p>
                    </div>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>✓</div>
                </div>

                {/* Offline Activities */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {[
                        { icon: '🧘', label: 'Meditation', time: '15m' },
                        { icon: '🌱', label: 'Gardening', time: '30m' },
                        { icon: '🎵', label: 'Music', time: '20m' },
                        { icon: '➕', label: 'Add New', time: '' },
                    ].map((act) => (
                        <div key={act.label} style={{ borderRadius: '12px', padding: '8px', border: '1px solid #F1F5F9', background: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '16px' }}>{act.icon}</span>
                            <div>
                                <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-primary)' }}>{act.label}</p>
                                {act.time && <p style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>{act.time}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Weekly Insight Banner */}
                <div style={{ borderRadius: '16px', padding: '12px', background: 'var(--dash-dark)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <p style={{ fontSize: '11px', fontWeight: 600, color: 'white', marginBottom: '2px' }}>Weekly Insight</p>
                        <p style={{ fontSize: '10px', color: 'var(--text-hint)' }}>Focus Score: <span style={{ color: '#4ADE80', fontWeight: 700 }}>87</span></p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                        {[60, 40, 80, 55, 70, 85, 90].map((h, i) => (
                            <div key={i} style={{ width: '8px', borderRadius: '2px 2px 0 0', height: `${h * 0.28}px`, background: i === 6 ? 'var(--primary)' : 'rgba(255,255,255,0.25)' }} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Focus Score floating badge */}
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            style={{
                position: 'absolute', right: '-16px', top: '32px',
                background: 'white', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                padding: '10px 14px', border: '1px solid #F1F5F9', textAlign: 'center',
            }}
        >
            <p style={{ fontSize: '9px', fontWeight: 500, color: 'var(--text-secondary)' }}>Focus Score</p>
            <p style={{ fontSize: '24px', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1.1 }}>87</p>
            <p style={{ fontSize: '9px', fontWeight: 600, color: 'var(--secondary)' }}>↑ +5%</p>
        </motion.div>
    </div>
)

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section id="home" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            paddingTop: '96px', paddingBottom: '80px', overflow: 'hidden',
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 60%, #DCFCE7 100%)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '64px' }}>
                    {/* Left Column */}
                    <motion.div
                        style={{ flex: '1 1 380px' }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '8px 18px', borderRadius: '50px', fontSize: '14px', fontWeight: 600,
                                background: 'var(--primary-light)', color: 'var(--primary)', marginBottom: '28px',
                            }}
                        >
                            <span>📱</span> Digital Wellness App
                        </motion.div>

                        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '24px' }}>
                            Reclaim Your{' '}
                            <span style={{ color: 'var(--primary)' }}>Attention.</span>
                            <br />
                            Own Your{' '}
                            <span style={{ color: 'var(--secondary)' }}>Time.</span>
                        </h1>

                        <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '480px' }}>
                            Balance screen time with real life — track limits, build offline habits, and earn rewards for living fully.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/signup')}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '16px 32px', borderRadius: '50px', color: 'white',
                                    fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer',
                                    background: 'var(--primary)', boxShadow: '0 8px 28px rgba(59,130,246,0.35)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <PlayStoreIcon /> Download on Android
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { const el = document.querySelector('#how-it-works'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '16px 32px', borderRadius: '50px', fontWeight: 600, fontSize: '15px',
                                    border: '2px solid var(--primary)', color: 'var(--primary)',
                                    background: 'transparent', cursor: 'pointer', transition: 'all 0.2s ease',
                                }}
                            >
                                See How It Works →
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                            {[
                                { emoji: '⭐', text: '4.8 Rating' },
                                { emoji: '👥', text: '10k+ Users' },
                                { emoji: '🆓', text: 'Free to Use' },
                            ].map((item) => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ fontSize: '16px' }}>{item.emoji}</span>
                                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        style={{ flex: '0 1 320px', display: 'flex', justifyContent: 'center', width: '100%' }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        <PhoneMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
