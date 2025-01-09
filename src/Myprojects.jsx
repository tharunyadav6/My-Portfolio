import React from 'react'

 import IMG1 from '../src/assets/Pics/Ecommerce.jpeg'
import IMG2 from '../src/assets/Pics/pf1.jpeg'
//  import IMG3 from '../src/assets/Pics/DevReact'
 

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Ecommerce-app</h3>
            <small className='text-light'> ReactJs </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/tharunyadav6/Ecommerce" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
         
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/tharunyadav6/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://tharunyadav6.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Resume</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-resume" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-resume/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article> */}
      </div>
    </section>
  )
}

export default Myprojects