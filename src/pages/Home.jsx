import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import ProblemSection from '../components/home/ProblemSection'
import FeaturesSection from '../components/home/FeaturesSection'
import HowItWorks from '../components/home/HowItWorks'
import DashboardPreview from '../components/home/DashboardPreview'
import StatsSection from '../components/home/StatsSection'
import Testimonials from '../components/home/Testimonials'
import GamificationSection from '../components/home/GamificationSection'
import CTASection from '../components/home/CTASection'

const Home = () => (
    <div>
        <Navbar />
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <DashboardPreview />
        <StatsSection />
        <Testimonials />
        <GamificationSection />
        <CTASection />
        <Footer />
    </div>
)

export default Home
