import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const PlayStoreIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.77c.37.22.8.26 1.2.11l.09-.06 10.02-5.79-2.17-2.16L3.18 23.77zm14.29-8.26L15.03 14l-2.53 1.46 2.43 2.42 2.54-2.37zM3 1.23l-.09.06C2.55 1.58 2.25 2.1 2.25 2.73v18.54c0 .63.3 1.15.66 1.44l.09.07 10.44-10.38L3 1.23zm14.76 8.52L15.44 8.5l-2.94 2.94 2.94 2.94 2.33-1.38c.66-.39.66-1.86-.01-2.25z" />
    </svg>
)

const CTASection = () => {
    const navigate = useNavigate()

    return (
        <section id="download" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)' }}>
            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />

            <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: 'white', marginBottom: '20px', lineHeight: 1.15 }}>
                        Ready to Reclaim Your Time?
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '44px', lineHeight: 1.6 }}>
                        Join 10,000+ users building healthier digital habits with DopaMind.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/signup')}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '12px',
                            padding: '18px 40px', borderRadius: '50px', fontWeight: 700,
                            fontSize: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                            background: 'white', color: 'var(--primary)', border: 'none',
                            cursor: 'pointer', transition: 'all 0.2s ease',
                        }}
                    >
                        <PlayStoreIcon />
                        Download Free on Android
                    </motion.button>
                    <p style={{ marginTop: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
                        Free forever. No subscription. No ads.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default CTASection
