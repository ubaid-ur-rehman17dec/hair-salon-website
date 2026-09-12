import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Price from './pages/Price';
import Team from './pages/Team';
import Open from './pages/Open';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <div className="bg-white text-dark min-vh-100 d-flex flex-column justify-content-between">
      <ScrollToTop />
      <Spinner />
      
      <div>
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        <Routes>
          <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/price" element={<Price />} />
          <Route path="/team" element={<Team />} />
          <Route path="/open" element={<Open />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <BackToTop />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={handleCloseAppointment} />
    </div>
  );
}
