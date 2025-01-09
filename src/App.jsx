import React from 'react'
import Header from './Components/Header'
import Nav from '../src/Nav'
import About from './Components/About'
import Experience from './Components/Experience'
import Myprojects from '../src/Myprojects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App