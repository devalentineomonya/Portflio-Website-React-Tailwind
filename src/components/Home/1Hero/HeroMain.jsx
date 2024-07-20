import React from 'react'
import "./hero.css"
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
const HeroMain = () => {
  return (
    <div className='hero-container'>
        <HeroLeft/>
        <HeroRight/>
      
    </div>
  )
}

export default HeroMain
