import React from 'react'
import "./values.css"
import ValueCard from "../../common/3ValueCard/ValueCard"
const Values = () => {
  return (
    <section className="values-section">
        <div className="section-title">My Values</div>

    <div className='grid grid-cols-3 gap-x-2 container'>
      <ValueCard/>
      <ValueCard/>
      <ValueCard/>
    </div>
    </section>
  )
}

export default Values
