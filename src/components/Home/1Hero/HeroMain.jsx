import React from 'react'
import "./hero.css"
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
const HeroMain = () => {
  return (
    <section className='hero-container'>
        <HeroLeft/>
        <HeroRight/>
      
    </section>
  )
}

export default HeroMain
