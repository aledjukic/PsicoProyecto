import React, { useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setISActive] = useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen)
    }

    const open = () => {
      setISActive(!isActive)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <Hero  open={open}/>
          <Info {...homeObjOne}/>
          <Info {...homeObjTwo}/>
          <Services open={open}/>
          <Info {...homeObjThree}/>
          <Footer />
        </>
    )
}

export default Home
