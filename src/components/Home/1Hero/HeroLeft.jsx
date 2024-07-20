import React from 'react'
import { BsDot } from 'react-icons/bs'

const HeroLeft = () => {
  const handleRedirect = ()=>{

  }
  return (
    <div className='hero-left-container'>
    <h4>Hi! I'm Valentine.</h4>
    <h6>A Junior Software Engineer</h6>
    <button onClick={handleRedirect}> <BsDot size={40} className="hero-indicator"/> Available for new Ideas</button>
    </div>
  )
}

export default HeroLeft
