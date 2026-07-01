import React from 'react'

import CTA from './CTA'
import me from '../assets/Pics/last.jpeg'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="hero__intro">
          <span className="hero__badge">Available for internships and freelance projects</span>
          <h5>Hello, I’m</h5>
          <h1>Golla Tharun Yadav</h1>
          <h5 className="text-light">Fresher Frontend Developer focused on React.js, responsive design, and modern user experiences.</h5>
          <p className="hero__description">
            I turn ideas into polished, high-performing web experiences with a strong eye for detail and clean code.
          </p>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={me} alt='Golla Tharun Yadav' />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header