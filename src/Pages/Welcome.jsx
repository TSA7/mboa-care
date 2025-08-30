import React, {useState} from 'react'
import Navbar from '../components/Welcome/Navbar/Navbar';
import About from '../components/Welcome/About/About';
import Services from '../components/Welcome/Services/Services';
import Contact from '../components/Welcome/Contact/Contact';
import Footer from '../components/Welcome/Footer/Footer';
import Home from '../components/Welcome/Home/Home';

function Welcome() {
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

export default Welcome
