import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const problems = [
    {
        icon: '⚡',
        title: 'Dopamine Loops',
        img: '📱',
        desc: "Variable rewards in social feeds trigger dopamine spikes, making it impossible to stop scrolling once you've started.",
    },
    {
        icon: '🧩',
        title: 'Fragmentation',
        img: '⏰',
        desc: "Frequent notifications shatter focus, preventing your brain from entering 'Flow' and weakening cognitive stamina.",
    },
    {
        icon: '🌑',
        title: 'The Void',
        img: '🔇',
        desc: 'Removing digital stimuli leads to boredom and discomfort as your brain recalibrates to slower, natural reward cycles.',
    },
]

const methodology = [
    {
        num: '01', icon: '👁️', color: '#3B82F6',
        title: 'Awareness Phase',
        desc: 'Quantifying the impact of digital usage on your mood and daily cognitive performance.',
    },
    {
        num: '02', icon: '🔄', color: '#10B981',
        title: 'Active Replacement',
        desc: 'Trading low-value digital interactions for high-value offline hobby and skill mastery.',
    },
    {
        num: '03', icon: '🧠', color: '#6366F1',
        title: 'Neuro-Recalibration',
        desc: 'Shared exercises to increase your baseline focus and decrease the need for constant novelty.',
    },
]

const neuro = [
    {
        icon: '⚡', color: '#3B82F6', bg: '#EFF6FF',
        title: 'Synaptic Plasticity',
        desc: 'Your brain is constantly re-wiring. By reducing high-velocity digital inputs, you strengthen the prefrontal cortex, enhancing your ability to resist impulsive behaviors and maintain long-term focus.',
    },
    {
        icon: '📈', color: '#10B981', bg: '#DCFCE7',
        title: 'The Baseline Shift',
        desc: 'Chronic over-stimulation lowers your dopamine baseline. DopaMind techniques help restore your natural baseline, allowing you to find joy in simple activities like reading a book or walking in nature.',
    },
]

const hobbies = ['Pottery', 'Reading', 'Hiking', 'Cooking', 'Meditation', 'Yoga', 'Music', 'Gardening', 'Walking', 'Journaling']

const SectionLabel = ({ number }) => (
    <p style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary)', marginBottom: '14px', letterSpacing: '0.05em' }}>{number}.</p>
)

const Features = () => {
    const navigate = useNavigate()

    return (
        <div style={{ background: 'var(--bg)' }}>
            <Navbar />

            <main style={{ paddingTop: '64px' }}>

                {/* ── Hero Banner ── */}
                <section style={{
                    position: 'relative', overflow: 'hidden',
                    padding: '120px 24px',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    textAlign: 'center',
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 60% 40%, rgba(99,102,241,0.15) 0%, transparent 60%)' }} />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '8px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: 700,
                            color: '#93C5FD', border: '1px solid rgba(147,197,253,0.25)',
                            background: 'rgba(59,130,246,0.1)', marginBottom: '28px', letterSpacing: '0.06em',
                        }}>
                            🔬 THE METHODOLOGY
                        </div>
                        <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: 'white', marginBottom: '20px', lineHeight: 1.15 }}>
                            The Science of Reclaiming Your Mind
                        </h1>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            Understanding the neurological shift from digital dopamine loops to real-world fulfillment.
                        </p>
                    </motion.div>
                </section>

                {/* ── 01. The Problem ── */}
                <section style={{ padding: '100px 24px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ marginBottom: '56px' }}
                        >
                            <SectionLabel number="01" />
                            <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                                The Problem: Digital Addiction
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '640px' }}>
                                Our brains weren't designed for the infinite scroll. Modern technology exploits primal reward systems, creating a cycle of dependency.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                            {problems.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, duration: 0.5 }}
                                    style={{
                                        background: 'white', borderRadius: '20px',
                                        overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                                        border: '1px solid #F1F5F9',
                                    }}
                                >
                                    {/* Image area */}
                                    <div style={{
                                        height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '64px', background: 'linear-gradient(135deg, #1E293B, #334155)',
                                    }}>
                                        {p.img}
                                    </div>
                                    {/* Content */}
                                    <div style={{ padding: '24px 24px 28px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                            <span style={{ fontSize: '20px' }}>{p.icon}</span>
                                            <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{p.title}</p>
                                        </div>
                                        <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 02. The DopaMind Way ── */}
                <section style={{ padding: '100px 24px', background: 'var(--surface)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ marginBottom: '56px' }}
                        >
                            <SectionLabel number="02" />
                            <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                                The DopaMind Way
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '640px' }}>
                                We don't just tell you to put your phone down. We provide the structural support and replacement behaviors necessary to rewire your brain's reward circuitry.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                            {/* Methodology steps */}
                            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {methodology.map((m, i) => (
                                    <motion.div
                                        key={m.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                        style={{
                                            display: 'flex', alignItems: 'flex-start', gap: '16px',
                                            padding: '20px 22px', borderRadius: '16px',
                                            background: 'white', border: '1px solid #F1F5F9',
                                            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                        }}
                                    >
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '18px', color: 'white', background: m.color,
                                        }}>
                                            {m.icon}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{m.title}</p>
                                            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{m.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Why offline hobbies box */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    flex: '1 1 280px', borderRadius: '20px', padding: '28px',
                                    background: 'var(--primary-light)', border: '1px solid #BFDBFE',
                                    alignSelf: 'flex-start',
                                }}
                            >
                                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)', marginBottom: '14px' }}>Why Offline Hobbies?</h3>
                                <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                    "The tactile nature of physical hobbies engages the motor cortex and sensory systems, creating a 'holistic reward' that social media simply cannot replicate."
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {hobbies.map((h) => (
                                        <span key={h} style={{
                                            padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600,
                                            background: 'white', color: 'var(--primary)', border: '1px solid #BFDBFE',
                                        }}>
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── 03. The Neuroscience ── */}
                <section style={{ padding: '100px 24px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ marginBottom: '56px' }}
                        >
                            <SectionLabel number="03" />
                            <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                                The Neuroscience
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '560px' }}>
                                Backed by peer-reviewed research in behavioral psychology and neural plasticity.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                            {neuro.map((n, i) => (
                                <motion.div
                                    key={n.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    style={{
                                        background: 'white', borderRadius: '20px', padding: '36px 32px',
                                        boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9',
                                    }}
                                >
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '16px', fontSize: '26px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '24px', background: n.bg,
                                    }}>
                                        {n.icon}
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px' }}>{n.title}</h3>
                                    <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{n.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Bottom CTA ── */}
                <section style={{ padding: '100px 24px', background: 'var(--primary)', textAlign: 'center' }}>
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, color: 'white', marginBottom: '16px', lineHeight: 1.2 }}>
                                Ready to take control of your focus?
                            </h2>
                            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.72)', marginBottom: '48px', lineHeight: 1.65 }}>
                                Join 50,000+ users who have reclaimed their attention from the digital noise.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/signup')}
                                    style={{
                                        padding: '16px 36px', borderRadius: '50px', fontWeight: 700, fontSize: '15px',
                                        background: 'white', color: 'var(--primary)', border: 'none', cursor: 'pointer',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    Start Your Reset
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/')}
                                    style={{
                                        padding: '16px 36px', borderRadius: '50px', fontWeight: 700, fontSize: '15px',
                                        background: 'transparent', color: 'white',
                                        border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer',
                                    }}
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Features
