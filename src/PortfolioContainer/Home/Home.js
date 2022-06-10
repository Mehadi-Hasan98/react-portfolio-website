import React from 'react'
import About from '../AboutMe/About';

import Footer from './Footer/Footer';
import './Home.css';

import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';



export default function Home() {
  return (
    <div className='home-container'>
        <Profile/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  )
}
