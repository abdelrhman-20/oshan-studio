import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { StatsSection } from './components/StatsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { ProcessSection } from './components/ProcessSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </LanguageProvider>
  )
}

export default App
