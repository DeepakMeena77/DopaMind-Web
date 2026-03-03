import { motion } from 'framer-motion'

const testimonials = [
    {
        quote: 'DopaMind completely changed how I use my phone. I spend 2 hours less on Instagram daily now!',
        name: 'Priya S.',
        role: 'Student',
        initial: 'P',
        color: '#F97316',
    },
    {
        quote: 'The Focus Score kept me accountable. I finally read 2 books last month!',
        name: 'Arjun K.',
        role: 'Engineer',
        initial: 'A',
        color: '#3B82F6',
    },
    {
        quote: 'Strict Mode is a game-changer. No more mindless YouTube at midnight!',
        name: 'Sneha R.',
        role: 'Designer',
        initial: 'S',
        color: '#10B981',
    },
]

const Testimonials = () => (
    <section style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                    What Our Users Say
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Real people. Real transformation.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                        whileHover={{ y: -6 }}
                        style={{
                            background: 'white', borderRadius: '20px', padding: '36px 32px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', cursor: 'default',
                            transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '0',
                        }}
                    >
                        {/* Big quote mark */}
                        <div style={{ fontSize: '64px', fontWeight: 800, lineHeight: 1, marginBottom: '8px', color: '#EFF6FF' }}>"</div>
                        <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>
                            {t.quote}
                        </p>
                        {/* Stars */}
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                            {Array.from({ length: 5 }).map((_, si) => (
                                <span key={si} style={{ fontSize: '14px' }}>⭐</span>
                            ))}
                        </div>
                        {/* Author */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '50%', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', color: 'white',
                                fontWeight: 700, fontSize: '16px', flexShrink: 0, background: t.color,
                            }}>
                                {t.initial}
                            </div>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{t.name}</p>
                                <p style={{ fontSize: '12px', color: 'var(--text-hint)' }}>{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default Testimonials
