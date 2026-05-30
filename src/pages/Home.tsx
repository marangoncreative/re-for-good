import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import AudienceSection from '../sections/AudienceSection'
import AboutSection from '../sections/AboutSection'
import CitizensSection from '../sections/CitizensSection'
import BusinessesSection from '../sections/BusinessesSection'
import ArtistsSection from '../sections/ArtistsSection'
import ProjectsSection from '../sections/ProjectsSection'
import TokenomicsSection from '../sections/TokenomicsSection'
import CommunitySection from '../sections/CommunitySection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AudienceSection />
        <AboutSection />
        <CitizensSection />
        <BusinessesSection />
        <ArtistsSection />
        <ProjectsSection />
        <TokenomicsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
