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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
)

const Login = () => {
    const navigate = useNavigate()
    const { login, isLoading, error, clearError } = useAuthStore()
    const [form, setForm] = useState({ email: '', password: '', remember: false })
    const [showPass, setShowPass] = useState(false)

    const handleChange = (e) => {
        clearError()
        const { name, value, type, checked } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await login(form.email, form.password)
        if (result.success) navigate('/')
    }

    return (
        <div style={{ minHeight: '100vh', background: '#F1F5F9' }}>
            {/* Top Bar */}
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 32px',
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #F1F5F9',
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <BoltIcon />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '17px', color: 'var(--text-primary)' }}>DopaMind</span>
                </Link>
                <a href="#" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none' }}>Help Center</a>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '100px 24px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                        width: '100%', maxWidth: '460px',
                        background: 'white', borderRadius: '24px',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.10)', border: '1px solid #F1F5F9',
                        padding: '48px 44px',
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                        <h1 style={{ fontSize: '30px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                            Welcome Back
                        </h1>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Unlock your potential. Please enter your details.
                        </p>
                    </div>

                    {/* Social Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                        {[{ label: 'Google', icon: '🇬' }, { label: 'Apple', icon: '🍎' }].map((s) => (
                            <button key={s.label} type="button" style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                padding: '13px', borderRadius: '12px', border: '1.5px solid #E2E8F0',
                                fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                                background: 'white', color: 'var(--text-primary)',
                                transition: 'background 0.2s',
                            }}>
                                <span>{s.icon}</span> {s.label}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-hint)', whiteSpace: 'nowrap' }}>Or continue with email</span>
                        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                    </div>

                    {/* Error */}
                    {error && (
                        <div style={{ marginBottom: '20px', padding: '14px 16px', borderRadius: '12px', fontSize: '14px', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                                Email address
                            </label>
                            <input
                                type="email" name="email" value={form.email} onChange={handleChange}
                                placeholder="you@example.com" required
                                style={{
                                    width: '100%', padding: '14px 16px', borderRadius: '12px',
                                    border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                                    color: 'var(--text-primary)', background: 'white', boxSizing: 'border-box',
                                    transition: 'border-color 0.2s',
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Password</label>
                                <a href="#" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPass ? 'text' : 'password'} name="password" value={form.password}
                                    onChange={handleChange} placeholder="••••••••" required
                                    style={{
                                        width: '100%', padding: '14px 48px 14px 16px', borderRadius: '12px',
                                        border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                                        color: 'var(--text-primary)', background: 'white', boxSizing: 'border-box',
                                        transition: 'border-color 0.2s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                />
                                <button type="button" onClick={() => setShowPass(!showPass)} style={{
                                    position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-hint)', padding: '4px',
                                }}>
                                    <EyeIcon open={showPass} />
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange}
                                style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Remember me for 30 days</span>
                        </label>

                        {/* Submit */}
                        <motion.button
                            type="submit" disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', padding: '16px', borderRadius: '12px',
                                background: isLoading ? '#93C5FD' : 'var(--primary)',
                                color: 'white', fontWeight: 700, fontSize: '15px',
                                border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s', marginTop: '4px',
                            }}
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </motion.button>
                    </form>

                    <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)', marginTop: '28px' }}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                            Sign up for free
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Login
