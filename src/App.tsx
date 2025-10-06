import { useState } from 'react'
import HeroSection from "./sections/HeroSection"
import './App.css'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import Navbar from './components/Navbar'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

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
