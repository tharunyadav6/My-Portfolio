import React from 'react'
 
import CTA from './CTA'
import me from '../assets/Pics/pf1.jpeg'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>GOLLA THARUN YADAV</h1>
          <h5 className="text-light">Frontend React.js Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header