import React from 'react'
import Maaja from '../components/home/Maaja'
import NewlyLaunched from '../components/home/Newlylaunched'
import SpriteSlider from '../components/home/SpriteSlider'
import HowItWorks from '../components/home/HowItWorks'
const Home = () => {
  return (
    <div>
      <Maaja/>
      <NewlyLaunched/>
      <SpriteSlider/>
      <HowItWorks/>
    </div>
  )
}

export default Home
