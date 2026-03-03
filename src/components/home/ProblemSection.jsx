import { motion } from 'framer-motion'

const problems = [
    {
        icon: '📱',
        title: 'Endless Scrolling',
        desc: 'Social media is engineered to trap your attention in infinite loops you never intended to enter.',
    },
    {
        icon: '⏰',
        title: 'No Awareness',
        desc: "You don't know how much time is lost. Hours vanish without you noticing — until the day is gone.",
    },
    {
        icon: '🎯',
        title: 'No Balance',
        desc: 'Excessive screen time kills hobby time, focus, and real-world connection. Your passions fade away.',
    },
]

const ProblemSection = () => (
    <section style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2 }}>
                    The average person spends{' '}
                    <span style={{ color: 'var(--over-limit)' }}>7+ hours</span> on screens daily
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
                    DopaMind helps you take back control.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                {problems.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                        whileHover={{ y: -4 }}
                        style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '32px 28px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            borderLeft: '4px solid var(--over-limit)',
                            cursor: 'default',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <span style={{ fontSize: '36px', marginBottom: '20px', display: 'block' }}>{item.icon}</span>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{item.title}</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default ProblemSection
