import { motion } from 'framer-motion'

const steps = [
    {
        number: '01',
        icon: '⏳',
        title: 'Set Your Limits',
        desc: 'Choose daily screen limits for Social Media, Games, and Entertainment categories to stay on track.',
    },
    {
        number: '02',
        icon: '📖',
        title: 'Log Your Hobbies',
        desc: 'Add offline activities — yoga, reading, music — and track time spent on real life.',
    },
    {
        number: '03',
        icon: '📈',
        title: 'Watch Your Score Grow',
        desc: 'Your Focus Score improves every day you stick to your limits. See weekly insights to track progress.',
    },
]

const HowItWorks = () => (
    <section id="how-it-works" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '72px' }}
            >
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                    Get Started in{' '}
                    <span style={{ color: 'var(--primary)' }}>3 Simple Steps</span>
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>No complexity. Just results.</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '48px 40px',
            }}>
                {steps.map((step, i) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        {/* Number Badge */}
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '22px', fontWeight: 800, color: 'white',
                            background: 'var(--primary)', boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
                            marginBottom: '24px',
                        }}>
                            {step.number}
                        </div>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '26px', background: 'var(--primary-light)', marginBottom: '20px',
                        }}>
                            {step.icon}
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px' }}>{step.title}</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '280px' }}>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default HowItWorks
