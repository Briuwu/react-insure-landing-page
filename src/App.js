import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Info from './components/Info'
import Work from './components/Work'
import Footer from './components/Footer'
import './styles/style.css'

const App = () => {
  return (
    <main className='App'>
      <Navbar />
      <Intro />
      <Info />
      <Work />
      <Footer />
    </main>
  )
}

export default App
