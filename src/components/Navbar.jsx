import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useAuthStore from '../store/authStore'

const BoltIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { isAuthenticated, user, logout } = useAuthStore()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isHome = location.pathname === '/'

    const navLinks = [
        { label: 'Home', href: isHome ? '#home' : '/' },
        { label: 'Features', href: isHome ? '#features' : '/features' },
        { label: 'How It Works', href: isHome ? '#how-it-works' : '/#how-it-works' },
        { label: 'Stats', href: isHome ? '#stats' : '/#stats' },
        { label: 'More', href: '/features' },
    ]

    const handleNavClick = (href) => {
        setMenuOpen(false)
        if (href.startsWith('#')) {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        } else if (href.startsWith('/#')) {
            navigate('/')
            setTimeout(() => {
                const el = document.querySelector(href.slice(1))
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            navigate(href)
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100'
                    : 'bg-white/70 backdrop-blur-md'
                    }`}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px 0 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: 'var(--primary)' }}>
                                <BoltIcon />
                            </div>
                            <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                DopaMind
                            </span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-sm font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            {isAuthenticated ? (
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                            style={{ background: 'var(--orange)' }}
                                        >
                                            {user?.avatar}
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                            {user?.name}
                                        </span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                                        style={{ borderColor: 'var(--text-hint)', color: 'var(--text-secondary)' }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:text-blue-600"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        style={{
                                            background: 'var(--primary)',
                                            color: 'white',
                                            padding: '10px 28px',
                                            borderRadius: '50px',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            textDecoration: 'none',
                                            letterSpacing: '0.01em',
                                            whiteSpace: 'nowrap',
                                            display: 'inline-block',
                                            boxShadow: '0 4px 14px rgba(59,130,246,0.35)',
                                        }}
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Hamburger */}
                        <button
                            className="md:hidden p-2 rounded-lg"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg md:hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-3 py-3 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                                {isAuthenticated ? (
                                    <button
                                        onClick={handleLogout}
                                        className="w-full py-3 rounded-full text-sm font-semibold text-red-600 border border-red-200 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full py-3 rounded-full text-sm font-semibold text-center border border-slate-200 text-slate-700 hover:bg-slate-50">
                                            Sign In
                                        </Link>
                                        <Link to="/signup" onClick={() => setMenuOpen(false)} style={{ background: 'var(--primary)', color: 'white', display: 'block', padding: '14px', borderRadius: '50px', fontSize: '14px', fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>
                                            Get Started Free
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
