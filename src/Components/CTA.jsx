import React from 'react'
import Cv from "../assets/Cv/tharun_resumel.pdf"

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={Cv} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA