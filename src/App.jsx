import React, { useState } from 'react'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
function App() {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <>
      <Navbar setNavHeight={setNavHeight}/>
      <Home navHeight={navHeight}/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
