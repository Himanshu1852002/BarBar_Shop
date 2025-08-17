import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import Home from './pages/Home/Home'
import AllServicePage from './pages/Services/AllServicePage'
import Aboutus from './pages/About us/Aboutus'
import Team from './pages/Team/Team'
import Contactus from './pages/Contact us/Contactus'
import Testimonials from './pages/Testimonials/Testimonials'
import Booking from './pages/Booking/Booking'
import ServiceSingle from './pages/Service Single/ServiceSingle'
import Loader from './components/Loader/Loader'

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
     {loading ? <Loader /> : (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<AllServicePage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/single-service' element={<ServiceSingle />} />
      </Routes>
     )}
      
    </>
  )
}

export default App
