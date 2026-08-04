import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import ImpactSection from '../sections/ImpactSection'
import AboutSection from '../sections/AboutSection'
import ProjectsSection from '../sections/ProjectsSection'
import CommunitySection from '../sections/CommunitySection'
import TokenomicsSection from '../sections/TokenomicsSection'
import AudienceSection from '../sections/AudienceSection'
import CitizensSection from '../sections/CitizensSection'
import BusinessesSection from '../sections/BusinessesSection'
import ArtistsSection from '../sections/ArtistsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <ProjectsSection />
        <CommunitySection />
        <TokenomicsSection />
        <AudienceSection />
        <CitizensSection />
        <BusinessesSection />
        <ArtistsSection />
      </main>
      <Footer />
    </div>
  )
}
