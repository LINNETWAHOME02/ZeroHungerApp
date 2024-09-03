import React from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Projects from './components/Projects'
import AnyTitle from './components/AnyTitle'
import About from './components/About'
import CompletedProjects from './components/CompletedProjects'
import Locations from './components/Locations'

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <AnyTitle subTitle='Our Projects' title='Aims: Provide food and deliver essencial services' />
      <Projects />
      <About />
      <AnyTitle subTitle='Gallery' title='Completed Projects' />
      <CompletedProjects />
      <AnyTitle subTitle='Locations' title='Where To Next?' />
      <Locations />
    </>
  )
}

export default App