import React from 'react'
import IMG1 from '../src/assets/Pics/last.jpeg'
import IMG2 from '../src/assets/Pics/last.jpeg'

const Myprojects = () => {
  return (
    <section id='myprojects'>
      <h5>Selected work</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Ecommerce application preview" />
          </div>
          <div className="portfolio__item-content">
            <h3>Ecommerce Web App</h3>
            <p>A responsive shopping experience built to showcase modern UI patterns and smooth product browsing.</p>
            <small className='text-light'>React.js • JavaScript • CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/tharunyadav6/Ecommerce" target="_blank" rel='noreferrer' className='btn'>GitHub</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio website preview" />
          </div>
          <div className="portfolio__item-content">
            <h3>Personal Portfolio</h3>
            <p>A refined personal brand website designed to present my work, skills, and professional personality clearly.</p>
            <small className='text-light'>React.js • Vite • CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/tharunyadav6/my-portfolio" target="_blank" rel='noreferrer' className='btn'>GitHub</a>
              <a href="https://tharunyadav6.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Myprojects