import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuthStore from '../store/authStore'

const BoltIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const Signup = () => {
    const navigate = useNavigate()
    const { signup, isLoading, error, clearError } = useAuthStore()
    const [form, setForm] = useState({ name: '', email: '', password: '' })

    const handleChange = (e) => {
        clearError()
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signup(form.name, form.email, form.password)
        if (result.success) navigate('/')
    }

    const fields = [
        { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe', icon: '👤' },
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'name@company.com', icon: '✉️' },
        { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••', icon: '🔒' },
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', background: '#F8FAFC' }}>

            {/* ── Left pane — form ── */}
            <div style={{
                flex: '1 1 480px', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', padding: '80px 64px',
                overflowY: 'auto',
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '56px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <BoltIcon />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>DopaMind</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ maxWidth: '400px' }}
                >
                    <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                        Create your account
                    </h1>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '44px', lineHeight: 1.6 }}>
                        Join 10,000+ users reclaiming their focus today.
                    </p>

                    {/* Error */}
                    {error && (
                        <div style={{ marginBottom: '20px', padding: '14px 16px', borderRadius: '12px', fontSize: '14px', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        {fields.map((field) => (
                            <div key={field.name}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                                    {field.label}
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>
                                        {field.icon}
                                    </span>
                                    <input
                                        type={field.type} name={field.name} value={form[field.name]}
                                        onChange={handleChange} placeholder={field.placeholder} required
                                        style={{
                                            width: '100%', padding: '15px 16px 15px 46px', borderRadius: '12px',
                                            border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                                            color: 'var(--text-primary)', background: 'white', boxSizing: 'border-box',
                                            transition: 'border-color 0.2s',
                                        }}
                                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>
                            </div>
                        ))}

                        <motion.button
                            type="submit" disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', padding: '17px', borderRadius: '12px',
                                background: isLoading ? '#93C5FD' : 'var(--primary)',
                                color: 'white', fontWeight: 700, fontSize: '16px',
                                border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                marginTop: '6px',
                            }}
                        >
                            {isLoading ? 'Creating account...' : 'Get Started →'}
                        </motion.button>
                    </form>

                    {/* Social */}
                    <div style={{ marginTop: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-hint)', letterSpacing: '0.05em' }}>OR SIGN UP WITH</span>
                            <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            {[{ label: 'Google', icon: '🇬' }, { label: 'Apple', icon: '🍎' }].map((s) => (
                                <button key={s.label} type="button" style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    padding: '13px', borderRadius: '12px', border: '1.5px solid #E2E8F0',
                                    fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                                    background: 'white', color: 'var(--text-primary)',
                                }}>
                                    <span>{s.icon}</span> {s.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)', marginTop: '32px' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                            Log in here
                        </Link>
                    </p>
                </motion.div>
            </div>

            {/* ── Right pane — brand ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                style={{
                    flex: '1 1 400px', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', position: 'relative',
                    overflow: 'hidden', padding: '60px 48px',
                    background: 'linear-gradient(135deg, #3B2FFF 0%, #6366F1 100%)',
                }}
            >
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

                {/* Brain circle */}
                <div style={{
                    width: '220px', height: '220px', borderRadius: '50%',
                    background: 'rgba(249,200,100,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '48px',
                }}>
                    <div style={{
                        width: '170px', height: '170px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '72px',
                    }}>
                        🧠
                    </div>
                </div>

                <div style={{ textAlign: 'center', maxWidth: '340px', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, color: 'white', marginBottom: '20px', lineHeight: 1.25 }}>
                        Master your attention,<br />master your life.
                    </h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '48px' }}>
                        DopaMind helps you identify digital triggers, build sustainable habits, and regain control of your time in a distracted world.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '36px', fontWeight: 800, color: 'white', marginBottom: '6px' }}>94%</p>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Focus Increase</p>
                        </div>
                        <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.25)' }} />
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '36px', fontWeight: 800, color: 'white', marginBottom: '6px' }}>2h+</p>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Daily Time Saved</p>
                        </div>
                    </div>
                </div>

                {/* Live badge */}
                <div style={{
                    position: 'absolute', bottom: '32px', right: '32px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                    padding: '10px 18px', borderRadius: '50px',
                }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'white', letterSpacing: '0.05em' }}>LIVE DASHBOARD ACTIVE</span>
                </div>
            </motion.div>
        </div>
    )
}

export default Signup
