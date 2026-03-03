import { Link, useNavigate } from 'react-router-dom'

const BoltIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
)

const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const PlayStoreIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.77c.37.22.8.26 1.2.11l.09-.06 10.02-5.79-2.17-2.16L3.18 23.77zm14.29-8.26L15.03 14l-2.53 1.46 2.43 2.42 2.54-2.37zM3 1.23l-.09.06C2.55 1.58 2.25 2.1 2.25 2.73v18.54c0 .63.3 1.15.66 1.44l.09.07 10.44-10.38L3 1.23zm14.76 8.52L15.44 8.5l-2.94 2.94 2.94 2.94 2.33-1.38c.66-.39.66-1.86-.01-2.25z" />
    </svg>
)

const footerLinks = {
    Features: [
        'Screen Tracking',
        'App Limits',
        'Offline Activity',
        'Focus Score',
        'Streaks',
    ],
    Pages: [
        { label: 'Home', path: '/' },
        { label: 'Features', path: '/features' },
        { label: 'Privacy Policy', path: '#' },
        { label: 'Contact', path: '#' },
    ],
}

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className="pt-16 pb-8" style={{ background: 'var(--dash-dark)', color: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: 'var(--primary)' }}>
                                <BoltIcon />
                            </div>
                            <span className="text-lg font-bold">DopaMind</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-hint)' }}>
                            Balance screen time with real life — track, limit, and grow with DopaMind.
                        </p>
                        <div className="flex gap-3">
                            {[GithubIcon, TwitterIcon].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20"
                                    style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-hint)' }}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-hint)' }}>Features</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.Features.map((item) => (
                                <li key={item}>
                                    <a href="#features" className="text-sm transition-colors duration-200 hover:text-blue-400" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-hint)' }}>Pages</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.Pages.map((item) => (
                                <li key={item.label}>
                                    <button
                                        onClick={() => navigate(item.path)}
                                        className="text-sm transition-colors duration-200 hover:text-blue-400 text-left"
                                        style={{ color: 'rgba(255,255,255,0.7)' }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-hint)' }}>Download Now</h4>
                        <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Free forever. No subscription. No ads.
                        </p>
                        <button className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                            style={{ background: 'var(--primary)' }}>
                            <PlayStoreIcon />
                            Download on Android
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm" style={{ color: 'var(--text-hint)' }}>
                        © 2025 DopaMind. Made with ❤️ for digital wellness.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm hover:text-blue-400 transition-colors" style={{ color: 'var(--text-hint)' }}>Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-blue-400 transition-colors" style={{ color: 'var(--text-hint)' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
