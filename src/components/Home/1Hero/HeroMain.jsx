import React from 'react'
import "./hero.css"
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import { BsArrowDown } from 'react-icons/bs'
const HeroMain = () => {
  return (
    <section className='hero-container'>
        <HeroLeft/>
        <HeroRight/>
      <button className="view-more"><BsArrowDown size={46} className='animate-arrow' /></button>
    </section>
  )
}

export default HeroMain
