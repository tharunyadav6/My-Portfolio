import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import me from '../assets/Pics/last.jpeg'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Golla Tharun Yadav" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>Education</h5>
                            <small>B.Sc. (M.E.Cs) <br />Sri Venkateswara University</small>
                        </article>

                        <article className='about__card'>
                            <BsBookmarkStar className='about__icon' />
                            <h5>Academic Performance</h5>
                            <small>CGPA: 7.45</small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld className='about__icon' />
                            <h5>Focus Area</h5>
                            <small>React.js • UI Development • Responsive Design</small>
                        </article>
                    </div>

                    <p>
                        I am a <b>frontend developer</b> with a strong passion for building elegant, responsive, and user-centered web applications. My work focuses on creating interfaces that are not just visually appealing, but also intuitive, fast, and easy to use.
                    </p>

                    <ul className="about__highlights">
                        <li>Developing polished front-end experiences with React.js and modern CSS.</li>
                        <li>Focused on accessibility, performance, and maintainable code structures.</li>
                        <li>Enjoying collaborative projects where design and functionality work seamlessly together.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About