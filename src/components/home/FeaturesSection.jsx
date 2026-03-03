import { motion } from 'framer-motion'

const features = [
    { icon: '⚖️', title: 'Daily Balance Tracker', desc: 'See your screen time vs hobby time side by side, every single day. Know exactly where your time goes.', accent: '#3B82F6', bg: '#EFF6FF' },
    { icon: '⏳', title: 'App Usage Limits', desc: 'Set healthy daily limits per app category — Social Media, Entertainment, Games. Enable Strict Mode to block apps when the limit hits.', accent: '#3B82F6', bg: '#EFF6FF' },
    { icon: '🌿', title: 'Offline Activity Hub', desc: 'Log your hobbies — meditation, reading, yoga, gardening, music. Every offline minute earns you points.', accent: '#10B981', bg: '#DCFCE7' },
    { icon: '🧠', title: 'Focus Score', desc: 'Your personal score (0–100) that goes up as you spend more time offline. Get weekly delta updates and track growth.', accent: '#10B981', bg: '#DCFCE7' },
    { icon: '📊', title: 'Weekly Analytics', desc: 'Compare screen vs hobby time day-by-day. View hourly usage distribution, most-used apps, and daily trends.', accent: '#6366F1', bg: '#EEF2FF' },
    { icon: '🔥', title: 'Streaks & Rewards', desc: 'Build daily streaks by hitting your offline goals. Earn badges and stay motivated to keep the habit going.', accent: '#F97316', bg: '#FFF7ED' },
]

const FeaturesSection = () => (
    <section id="features" style={{ padding: '100px 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 18px', borderRadius: '50px', fontSize: '14px', fontWeight: 600,
                    background: 'var(--primary-light)', color: 'var(--primary)', marginBottom: '20px',
                }}>
                    ✨ Everything you need
                </div>
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                    Powerful Features. Simple Design.
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
                    DopaMind gives you every tool to reclaim your attention and build a healthier digital lifestyle.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                {features.map((feat, i) => (
                    <motion.div
                        key={feat.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -6, boxShadow: `0 20px 60px ${feat.accent}22` }}
                        style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '32px',
                            border: '1px solid #F1F5F9',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            cursor: 'default',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <div style={{
                            width: '52px', height: '52px', borderRadius: '14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '24px', marginBottom: '20px', background: feat.bg,
                        }}>
                            {feat.icon}
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{feat.title}</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{feat.desc}</p>
                        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ height: '3px', width: '32px', borderRadius: '99px', background: feat.accent }} />
                            <span style={{ fontSize: '12px', fontWeight: 600, color: feat.accent }}>Learn more</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default FeaturesSection
