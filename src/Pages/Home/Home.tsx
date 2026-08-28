import React from 'react'
import Header from './_sections/Header/Header'
import About from './_sections/About/About'
import MainDestinations from './_sections/MainDestinations/MainDestinations'
import Works from './_sections/Works/Works'

function Home() {
  return (
    <div>
      <Header />
      <About />
      <MainDestinations />
      <Works />
    </div>
  )
}

export default Home