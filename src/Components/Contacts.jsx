import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useRef } from 'react'

const Contacts = () => {
  const form = useRef()

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tharuntharunyadav67@gmail.com</h5>
            <a href="mailto:tharuntharunyadav67@gmail.com" className='contact__link'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/tharun67/" target="_blank" rel='noreferrer' className='contact__link'>Connect with me</a>
          </article>

          <article className='contact__option'>
            <BsGithub className='contact__option-icon' />
            <h4>GitHub</h4>
            <a href="https://github.com/tharunyadav6" target="_blank" rel='noreferrer' className='contact__link'>View my code</a>
          </article>
        </div>

        <form ref={form}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts