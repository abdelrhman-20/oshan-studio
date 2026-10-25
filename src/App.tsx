import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { StatsSection } from './components/StatsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { ProcessSection } from './components/ProcessSection'
import { ClosingSection } from './components/ClosingSection'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <ClosingSection />
    </LanguageProvider>
  )
}

export default App
