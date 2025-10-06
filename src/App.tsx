import HeroSection from "./sections/HeroSection"
import './App.css'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import Navbar from './components/Navbar'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
