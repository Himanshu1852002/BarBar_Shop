import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllServicePage from './pages/Services/AllServicePage'
import Aboutus from './pages/About us/Aboutus'
import Team from './pages/Team/Team'
import Contactus from './pages/Contact us/Contactus'
import Testimonials from './pages/Testimonials/Testimonials'
import Booking from './pages/Booking/Booking'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<AllServicePage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
    </>
  )
}

export default App
