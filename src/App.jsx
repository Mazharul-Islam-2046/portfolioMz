
import './App.css'
import AboutMe from './Sections/AboutMe'
import ContactUs from './Sections/ContactUs'
import Footer from './Sections/Footer'
import HeroSection from './Sections/HeroSection'
import Navbar from './Sections/Navbar'
import Projects from './Sections/Projects'
import Technologies from './Sections/Technologies'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
