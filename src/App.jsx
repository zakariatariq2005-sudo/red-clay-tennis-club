import { useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import RedClayCode from './components/RedClayCode'
import Facilities from './components/Facilities'
import CourtsSection from './components/CourtsSection'
import Coaching from './components/Coaching'
import TrainRecover from './components/TrainRecover'
import Membership from './components/Membership'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Location from './components/Location'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen bg-near-black">
      <Navigation />
      <Hero opacity={opacity} />
      <CredibilityStrip />
      <RedClayCode />
      <Facilities />
      <CourtsSection />
      <Coaching />
      <TrainRecover />
      <Membership />
      <Booking />
      <Gallery />
      <Location />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App

