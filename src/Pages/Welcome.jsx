import React, {useEffect, useRef, useState} from 'react'
import Navbar from '../components/Welcome/Navbar/Navbar';
import About from '../components/Welcome/About/About';
import Services from '../components/Welcome/Services/Services';
import Contact from '../components/Welcome/Contact/Contact';
import Footer from '../components/Welcome/Footer/Footer';
import Home from '../components/Welcome/Home/Home';

function Welcome() {
    const [navHeight, setNavHeight] = useState(0);
    const homeRef = useRef(null);
    const aboutRef = useRef(undefined);
    const serviceRef = useRef(undefined);
    const contactRef = useRef(undefined);
    const [al, setAl] = useState("Home")
    useEffect(() => {
      function handleScroll(){ 
        const hh = homeRef.current?.clientHeight
        const ah = aboutRef.current?.clientHeight
        const sh = serviceRef.current?.clientHeight
        const ch = contactRef.current?.clientHeight
        if(homeRef.current && aboutRef.current && serviceRef.current && contactRef.current){
          if(window.innerHeight + window.scrollY <= hh){
            console.log("Home")
            setAl("Home")
          }
          else if(window.innerHeight + window.scrollY <= hh + ah){
            console.log("About")
            setAl("About")
          }
          else if(window.innerHeight + window.scrollY <= hh + ah + sh){
            console.log("Services")
            setAl("Services")
          }
          else if(window.innerHeight + window.scrollY <= hh + ah + sh + ch){
            console.log("Contact")
            setAl("Contact")
          }
      }}
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  },[])

  function handleScrollToSection(ni) {
    setAl(ni)
    console.log(ni)
    if(ni === "Home"){
       setAl(ni)
    if (homeRef.current) {
      window.scrollTo({
        top: homeRef.current.offsetTop,
        behavior: 'smooth',
      });
    }}
    else if(ni === "About"){
    if (homeRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: 'smooth',
      });
    }}
    else if(ni === "Services"){
    if (serviceRef.current) {
      window.scrollTo({
        top: serviceRef.current.offsetTop,
        behavior: 'smooth',
      });
    }}
    else if(ni === "Contact"){
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
   }  }
    return (
    <>
      <Navbar handleScrollToSection={handleScrollToSection} al={al} setNavHeight={setNavHeight}/>
      <Home homeRef={homeRef}  navHeight={navHeight} />
      <About aboutRef={aboutRef}/>
      <Services serviceRef={serviceRef}/>
      <Contact contactRef={contactRef}/>
      <Footer/>
    </>
  )
}

export default Welcome
