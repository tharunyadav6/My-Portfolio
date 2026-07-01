import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I bring</h5>
      <h2>Skills & Tools</h2>

      <div className="container experience__container">
        <div className="experience__panel">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML & CSS</h4>
                <small className='text-light'>Strong foundation for responsive layouts.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Comfortable building interactive interfaces.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Developing reusable components and modern UIs.</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__panel">
          <h3>Workflow & Design</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Quick, structured UI implementation.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git & GitHub</h4>
                <small className='text-light'>Version control and collaborative development.</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Problem Solving</h4>
                <small className='text-light'>Focused on clean implementation and user value.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience