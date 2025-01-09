
import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import me from '../assets/Pics/me.jpeg';


const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>Degree</h5>
                            <small>Bsc.(M.E.Cs) Frontend React.js(UG) <br /><i>Sri Venkateswara University.Tirupathi,Srisrinivasa College,Chandragiri</i></small>
                        </article>

                        <article className='about__card'>
                            <BsBookmarkStar className='about__icon' />
                            <h5>Fresher</h5>
                            <small>---</small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld className='about__icon' />
                            <h5>Domains</h5>
                            <small>
                                <ul>
                                    <li>React.js Developer</li>
                                     
                                </ul>
                            </small>
                        </article>



                    </div>
                    <p>
                    I am a <b> Frontend React.js Developer</b> Fresher undergraduate at the Sri Venkateswara University.Tirupathi, passionate about building intuitive and responsive web applications. As a driven and enthusiastic frontend developer specializing in React.js, I aim to create seamless user experiences while continuously improving my skills and staying updated with industry trends.

With a strong academic foundation in software engineering and hands-on experience in building projects using React.js, JavaScript, HTML, and CSS, I am eager to contribute to innovative projects. I thrive in collaborative environments, value clean and efficient code, and am ready to tackle real-world challenges with creativity and dedication.

                    </p>

                </div>
            </div>
        </section>
    )
}

export default About