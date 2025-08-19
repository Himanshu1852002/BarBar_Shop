import Hero from '../../components/Hero-Section/Hero'
import Hero_Bottom from '../../components/Hero-Bottom/Hero_Bottom'
import TrendingStyles from '../../components/LeadingStyles/TrendingStyles'
import CenterSection from '../../components/CenterSection/CenterSection'
import Services from '../../components/Servicess/Services'
import AddressTime from '../../components/Address & Time/AddressTime'

const Home = () => {
  return (
    <>
   <div>
     <Hero/>
     <Hero_Bottom/>
     <TrendingStyles/>
     <CenterSection/>
     <Services/>
     <AddressTime/>
   </div>
    </>
  )
}

export default Home