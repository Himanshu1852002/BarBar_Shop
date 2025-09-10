import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
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
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AuthModal from './components/Login/AuthModal'
import UserProfilePage from './pages/ProfilePage/UserProfilePage';
import PageNotFound from './pages/404/PageNotFound';
import Blog from './pages/Blog/Blog';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AdminAuthModal from './components/Admin/AdminLogin/AdminAuthModal';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import BookingManagement from './pages/Admin/BookingManagement/BookingManagement';
import EmployeeManagement from './pages/Admin/Employee/EmployeeManagement';
import CustomerManagement from './pages/Admin/Customer/CustomerManagement';
import Settings from './components/Admin/Setting/Settings';
import Service from './pages/Admin/Services/Service';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // ✅ Sirf token check karna
  const checkAdminAuth = () => {
    const token = localStorage.getItem("adminToken");
    setIsAdminAuthenticated(!!token); 
  };

  useEffect(() => {
    setLoading(true);
    checkAdminAuth();
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const isNotFoundPage =
    location.pathname !== '/' &&
    ![
      '/services',
      '/aboutus',
      '/team',
      '/contactus',
      '/testimonials',
      '/booking',
      '/single-service',
      '/userProfile',
      '/blog',
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/admin");

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!isNotFoundPage && !isAdminRoute && (
            <Navbar onLoginClick={() => setShowAuthModal(true)} />
          )}

          <Routes>
            <Route path='/' element={<Home onLoginClick={() => setShowAuthModal(true)} />} />
            <Route path='/services' element={<AllServicePage />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/single-service' element={<ServiceSingle />} />
            <Route path='/userProfile' element={<UserProfilePage />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/*' element={<PageNotFound />} />

            {/* ✅ Admin Routes */}
            <Route
              path="/admin/*"
              element={
                isAdminAuthenticated ? (
                  <AdminDashboard />
                ) : (
                  <AdminAuthModal
                    onSuccess={() => setIsAdminAuthenticated(true)}
                  />
                )
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='bookingManagement' element={<BookingManagement />} />
              <Route path='service' element={<Service/>}/>
              <Route path='employeeManagement' element={<EmployeeManagement />} />
              <Route path='customerManagement' element={<CustomerManagement />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Routes>

          {!isNotFoundPage && !isAdminRoute && <Footer />}

          {showAuthModal && (
            <AuthModal
              onClose={() => setShowAuthModal(false)}
              onAuthSuccess={() => window.location.reload()}
            />
          )}
        </>
      )}
    </>
  )
}

export default App;