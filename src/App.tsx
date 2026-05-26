import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CredibilityBanner } from './components/CredibilityBanner'
import { ValueProps } from './components/ValueProps'
import CaseStudies from './components/CaseStudies'
import SelectedWork from './components/SelectedWork'
import Evolution from './components/Evolution'
import Particles from './components/Particles'
import GoogleCaseStudy from './pages/GoogleCaseStudy'
import WheelsCaseStudy from './pages/WheelsCaseStudy'
import MicrosoftCaseStudy from './pages/MicrosoftCaseStudy'
import AWSCaseStudy from './pages/AWSCaseStudy'

function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <CredibilityBanner />
        <ValueProps />
        <CaseStudies />
        <SelectedWork />
        <Evolution />
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/google-certificates" element={<GoogleCaseStudy />} />
        <Route path="/work/wheels-fleet" element={<WheelsCaseStudy />} />
        <Route path="/work/microsoft-ito" element={<MicrosoftCaseStudy />} />
        <Route path="/work/aws-training" element={<AWSCaseStudy />} />
      </Routes>
    </>
  )
}

export default App
