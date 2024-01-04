import React from 'react'
// import Heropart from './components/Heropart'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Solution from './components/Solution'
import StorySection from './components/StorySection'
import FeedbackSection from './components/FeedbackSection'
import ServiceSection from './components/ServiceSection'
import SeoSection from './components/SeoSection'
import Placement from './components/Placement'
import Planning from './components/Planning'
import Travels from './components/Travels'

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <HeroSection/>
      <Solution/>
      <StorySection/>
      <FeedbackSection/>
      <ServiceSection/>
      <SeoSection/>
      <Placement/>
      <Planning/>
      <Travels/>
    </div>
  )
}

export default App