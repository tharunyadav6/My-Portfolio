import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Golla Tharun Yadav</a>
      <p className="footer__tagline">Frontend developer building thoughtful digital experiences.</p>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#myprojects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tharun67/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/tharunyadav6" target="_blank" rel='noreferrer'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2026 Golla Tharun Yadav. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer