import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
    { value: 87, suffix: '', label: 'Average Focus Score', icon: '🧠' },
    { value: 7, suffix: 'hrs', label: 'Screen time saved per week', icon: '⏰' },
    { value: 10, suffix: 'k+', label: 'Active Users', icon: '👥' },
    { value: 4.8, suffix: '⭐', label: 'App Rating', icon: '🌟', decimal: true },
]

const Counter = ({ target, suffix, decimal, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const observed = useRef(false)

    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !observed.current) {
                observed.current = true
                const steps = 60
                const increment = target / steps
                let current = 0
                const timer = setInterval(() => {
                    current += increment
                    if (current >= target) {
                        setCount(target)
                        clearInterval(timer)
                    } else {
                        setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
                    }
                }, duration / steps)
            }
        }, { threshold: 0.5 })
        if (el) observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration, decimal])

    return <span ref={ref}>{decimal ? count.toFixed(1) : count}{suffix}</span>
}

const StatsSection = () => (
    <section id="stats" style={{ padding: '100px 0', background: 'var(--dash-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
                    Trusted by Thousands of Users
                </h2>
                <p style={{ fontSize: '18px', color: '#94A3B8' }}>Real results. Real wellness.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        style={{
                            textAlign: 'center', padding: '40px 24px', borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'rgba(255,255,255,0.04)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <span style={{ fontSize: '32px', marginBottom: '12px', display: 'block' }}>{stat.icon}</span>
                        <div style={{ fontSize: 'clamp(36px,5vw,52px)', fontWeight: 800, color: 'white', marginBottom: '10px', lineHeight: 1 }}>
                            <Counter target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                        </div>
                        <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.5 }}>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default StatsSection
