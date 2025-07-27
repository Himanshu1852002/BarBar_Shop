import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero-Section/Hero'
import Hero_Bottom from '../../components/Hero-Bottom/Hero_Bottom'
import TrendingStyles from '../../components/LeadingStyles/TrendingStyles'
import CenterSection from '../../components/CenterSection/CenterSection'
import Services from '../../components/Servicess/Services'

const Home = () => {
  return (
    <>
   <div>
     <Navbar/>
     <Hero/>
     <Hero_Bottom/>
     <TrendingStyles/>
     <CenterSection/>
     <Services/>
     <Footer/>
   </div>
    </>
  )
}

export default Home