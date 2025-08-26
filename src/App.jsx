import React, { useState } from 'react'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
function App() {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <>
      <Navbar setNavHeight={setNavHeight}/>
      <Home navHeight={navHeight}/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
