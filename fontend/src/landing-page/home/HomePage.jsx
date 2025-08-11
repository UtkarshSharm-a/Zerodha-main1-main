import React from 'react'
import Education from './Education'
import HeroSection from './HeroSection'
import Prising from './Prising'
import Trust from './Trust'
import OpenAcount from '../OpenAcount'
import Navbar from '../Navbar'
import Fotter from '../Fotter'
import Confidence from './Confidence'

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Trust></Trust>
      <Confidence></Confidence>
      <Prising></Prising>
      <Education></Education>
      <OpenAcount></OpenAcount>
    </div>
  )
}

export default Home
