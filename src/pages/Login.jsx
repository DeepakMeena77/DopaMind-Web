import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuthStore from '../store/authStore'

const BoltIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const EyeIcon = ({ open }) => open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
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

const Login = () => {
    const navigate = useNavigate()
    const { login, googleLogin, isLoading, error, clearError } = useAuthStore()
    const [form, setForm] = useState({ email: '', password: '', remember: false })
    const [showPass, setShowPass] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)

    const handleChange = (e) => {
        clearError()
        const { name, value, type, checked } = e.target
        setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const r = await login(form.email, form.password)
        if (r.success) navigate('/')
    }

    const handleGoogle = async () => {
        setGoogleLoading(true)
        const r = await googleLogin()
        setGoogleLoading(false)
        if (r.success) navigate('/')
    }

    const inputStyle = {
        width: '100%', padding: '13px 16px', borderRadius: '10px',
        border: '1.5px solid #E2E8F0', fontSize: '14px', outline: 'none',
        color: 'var(--text-primary)', background: 'white', boxSizing: 'border-box',
        transition: 'border-color 0.2s',
    }

    return (
        <div style={{ minHeight: '100vh', background: '#F1F5F9', display: 'flex', flexDirection: 'column' }}>

            {/* Top Bar */}
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 20px',
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #F1F5F9',
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                        <BoltIcon />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)' }}>DopaMind</span>
                </Link>
                <a href="#" style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none' }}>Help Center</a>
            </div>

            {/* Page Body */}
            <div style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '90px 16px 40px',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    style={{
                        width: '100%', maxWidth: '440px',
                        background: 'white', borderRadius: '20px',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.09)', border: '1px solid #F1F5F9',
                        padding: 'clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px)',
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                        <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            Welcome Back
                        </h1>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Unlock your potential. Please enter your details.
                        </p>
                    </div>

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
                            background: 'white', color: 'var(--text-primary)', marginBottom: '16px',
                            transition: 'all 0.2s', boxSizing: 'border-box',
                        }}
                    >
                        {googleLoading ? (
                            <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid #E2E8F0', borderTopColor: '#4285F4', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                        ) : <GoogleIcon />}
                        {googleLoading ? 'Connecting to Google...' : 'Continue with Google'}
                    </motion.button>

                    {/* Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-hint)', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>OR WITH EMAIL</span>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </div>

                    {/* Error */}
                    {error && (
                        <div style={{ marginBottom: '16px', padding: '12px 14px', borderRadius: '10px', fontSize: '13px', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '7px' }}>
                                Email address
                            </label>
                            <input
                                type="email" name="email" value={form.email} onChange={handleChange}
                                placeholder="you@example.com" required style={inputStyle}
                                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '7px' }}>
                                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>Password</label>
                                <a href="#" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPass ? 'text' : 'password'} name="password" value={form.password}
                                    onChange={handleChange} placeholder="••••••••" required
                                    style={{ ...inputStyle, paddingRight: '44px' }}
                                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                />
                                <button type="button" onClick={() => setShowPass(!showPass)} style={{
                                    position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)',
                                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-hint)', padding: '4px', lineHeight: 0,
                                }}>
                                    <EyeIcon open={showPass} />
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
                            <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange}
                                style={{ width: '15px', height: '15px', accentColor: 'var(--primary)', flexShrink: 0 }} />
                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Remember me for 30 days</span>
                        </label>

                        {/* Submit */}
                        <motion.button
                            type="submit" disabled={isLoading || googleLoading}
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '10px',
                                background: (isLoading || googleLoading) ? '#93C5FD' : 'var(--primary)',
                                color: 'white', fontWeight: 700, fontSize: '14px',
                                border: 'none', cursor: (isLoading || googleLoading) ? 'not-allowed' : 'pointer',
                                marginTop: '2px',
                            }}
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </motion.button>
                    </form>

                    <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '22px' }}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                            Sign up for free
                        </Link>
                    </p>
                </motion.div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    )
}

export default Login
