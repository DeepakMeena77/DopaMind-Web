import { motion } from 'framer-motion'

const badges = [
    { icon: '🌱', label: 'Beginner', desc: '3+ Day Streak', color: '#10B981', bg: '#DCFCE7' },
    { icon: '⚔️', label: 'Week Warrior', desc: '7+ Day Streak', color: '#3B82F6', bg: '#EFF6FF' },
    { icon: '🏆', label: 'Focus Master', desc: '30+ Day Streak', color: '#F59E0B', bg: '#FFFBEB' },
]

const GamificationSection = () => (
    <section style={{ padding: '100px 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                    Stay Motivated. Earn Your Streak. 🔥
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
                    Every day you beat your limits, your streak grows — and so does your Focus Score.
                </p>
            </motion.div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '64px' }}>
                {/* Streak visual */}
                <motion.div
                    style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        borderRadius: '24px', padding: '48px 40px', textAlign: 'center',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #F1F5F9',
                        background: 'white', width: '100%', maxWidth: '320px',
                    }}>
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ fontSize: '72px', marginBottom: '16px' }}
                        >🔥</motion.div>
                        <p style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>7 Day Streak</p>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                            Keep it up! Just 23 more days to Focus Master 🏆
                        </p>
                        {/* Progress bar */}
                        <div style={{ marginBottom: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                <span>7 days done</span>
                                <span>Goal: 30 days</span>
                            </div>
                            <div style={{ height: '12px', borderRadius: '99px', background: '#F1F5F9', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '23%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    style={{ height: '100%', borderRadius: '99px', background: 'var(--orange)' }}
                                />
                            </div>
                        </div>
                        <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--orange)' }}>7/30 days to Focus Master</p>
                    </div>
                </motion.div>

                {/* Badges & Info */}
                <div style={{ flex: '1 1 320px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                        {[
                            { text: 'Hit 7 days → Unlock Week Warrior badge', color: 'var(--primary)' },
                            { text: 'Hit 30 days → Focus Master status', color: 'var(--accent)' },
                            { text: 'Break streak = restart, so stay consistent!', color: 'var(--over-limit)' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '16px',
                                    padding: '18px 20px', borderRadius: '14px',
                                    background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                                    border: '1px solid #F1F5F9',
                                }}
                            >
                                <div style={{ width: '4px', height: '36px', borderRadius: '99px', flexShrink: 0, background: item.color }} />
                                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Badge cards */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {badges.map((badge, i) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                whileHover={{ scale: 1.06 }}
                                style={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                                    padding: '20px 24px', borderRadius: '20px', cursor: 'default',
                                    background: badge.bg, border: `1.5px solid ${badge.color}30`,
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <span style={{ fontSize: '28px' }}>{badge.icon}</span>
                                <p style={{ fontSize: '13px', fontWeight: 700, color: badge.color }}>{badge.label}</p>
                                <p style={{ fontSize: '11px', color: badge.color, opacity: 0.8 }}>{badge.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default GamificationSection
