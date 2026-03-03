import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuthStore from '../store/authStore'

const BoltIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
)

const Signup = () => {
    const navigate = useNavigate()
    const { signup, googleLogin, isLoading, error, clearError } = useAuthStore()
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [googleLoading, setGoogleLoading] = useState(false)

    const handleChange = (e) => {
        clearError()
        setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const r = await signup(form.name, form.email, form.password)
        if (r.success) navigate('/')
    }

    const handleGoogle = async () => {
        setGoogleLoading(true)
        const r = await googleLogin()
        setGoogleLoading(false)
        if (r.success) navigate('/')
    }

    const inputStyle = {
        width: '100%', padding: '13px 14px 13px 42px', borderRadius: '10px',
        border: '1.5px solid #E2E8F0', fontSize: '14px', outline: 'none',
        color: 'var(--text-primary)', background: 'white', boxSizing: 'border-box',
        transition: 'border-color 0.2s',
    }

    const fields = [
        { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe', icon: '👤' },
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'name@company.com', icon: '✉️' },
        { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••', icon: '🔒' },
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>

            {/* ── Mobile/desktop: stacked on small screens, side-by-side on large ── */}
            <div style={{ display: 'flex', minHeight: '100vh', flexWrap: 'wrap' }}>

                {/* ─── Left pane — form ─── */}
                <div style={{
                    flex: '1 1 340px', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', padding: 'clamp(60px, 8vw, 80px) clamp(20px, 6vw, 64px)',
                    overflowY: 'auto', minWidth: 0,
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '44px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                            <BoltIcon />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '17px', color: 'var(--text-primary)' }}>DopaMind</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.2 }}>
                            Create your account
                        </h1>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
                            Join 10,000+ users reclaiming their focus today.
                        </p>

                        {/* Google Button */}
                        <motion.button
                            onClick={handleGoogle}
                            disabled={googleLoading || isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                padding: '13px', borderRadius: '10px', border: '1.5px solid #E2E8F0',
                                fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                                background: 'white', color: 'var(--text-primary)', marginBottom: '20px',
                                boxSizing: 'border-box',
                            }}
                        >
                            {googleLoading
                                ? <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid #E2E8F0', borderTopColor: '#4285F4', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                                : <GoogleIcon />}
                            {googleLoading ? 'Connecting to Google...' : 'Sign up with Google'}
                        </motion.button>

                        {/* Divider */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                            <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-hint)', letterSpacing: '0.04em' }}>OR WITH EMAIL</span>
                            <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                        </div>

                        {/* Error */}
                        {error && (
                            <div style={{ marginBottom: '16px', padding: '12px 14px', borderRadius: '10px', fontSize: '13px', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {fields.map((f) => (
                                <div key={f.name}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '7px' }}>
                                        {f.label}
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', lineHeight: 1, pointerEvents: 'none' }}>
                                            {f.icon}
                                        </span>
                                        <input
                                            type={f.type} name={f.name} value={form[f.name]}
                                            onChange={handleChange} placeholder={f.placeholder} required
                                            style={inputStyle}
                                            onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                            onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                </div>
                            ))}

                            <motion.button
                                type="submit" disabled={isLoading || googleLoading}
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                style={{
                                    width: '100%', padding: '15px', borderRadius: '10px',
                                    background: (isLoading || googleLoading) ? '#93C5FD' : 'var(--primary)',
                                    color: 'white', fontWeight: 700, fontSize: '15px',
                                    border: 'none', cursor: (isLoading || googleLoading) ? 'not-allowed' : 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    marginTop: '4px',
                                }}
                            >
                                {isLoading ? 'Creating account...' : 'Get Started →'}
                            </motion.button>
                        </form>

                        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '24px' }}>
                            Already have an account?{' '}
                            <Link to="/login" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                                Log in here
                            </Link>
                        </p>
                    </motion.div>
                </div>

                {/* ─── Right pane — brand (hidden on very small screens) ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    style={{
                        flex: '1 1 340px', display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        position: 'relative', overflow: 'hidden',
                        padding: 'clamp(40px, 5vw, 60px) clamp(24px, 4vw, 48px)',
                        minHeight: '340px',
                        background: 'linear-gradient(135deg, #3B2FFF 0%, #6366F1 100%)',
                    }}
                >
                    {/* Decorative circles */}
                    <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                    <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

                    {/* Brain icon */}
                    <div style={{ width: 'clamp(140px,20vw,200px)', height: 'clamp(140px,20vw,200px)', borderRadius: '50%', background: 'rgba(249,200,100,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', flexShrink: 0 }}>
                        <div style={{ width: 'clamp(100px,15vw,155px)', height: 'clamp(100px,15vw,155px)', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(48px,8vw,68px)' }}>
                            🧠
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '320px', position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>
                            Master your attention,<br />master your life.
                        </h2>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: '36px' }}>
                            DopaMind helps you identify digital triggers, build sustainable habits, and regain control of your time.
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 'clamp(26px,4vw,34px)', fontWeight: 800, color: 'white', marginBottom: '4px' }}>94%</p>
                                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Focus Increase</p>
                            </div>
                            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.25)' }} />
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 'clamp(26px,4vw,34px)', fontWeight: 800, color: 'white', marginBottom: '4px' }}>2h+</p>
                                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Daily Saved</p>
                            </div>
                        </div>
                    </div>

                    {/* Live badge */}
                    <div style={{
                        position: 'absolute', bottom: '24px', right: '24px',
                        display: 'flex', alignItems: 'center', gap: '7px',
                        background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
                        padding: '8px 14px', borderRadius: '50px',
                    }}>
                        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ADE80' }} />
                        <span style={{ fontSize: '11px', fontWeight: 600, color: 'white', letterSpacing: '0.05em' }}>LIVE DASHBOARD ACTIVE</span>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          /* Hide right pane on very small phones to keep form accessible */
          [data-right-pane] { display: none !important; }
        }
      `}</style>
        </div>
    )
}

export default Signup
