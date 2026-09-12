import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onOpenAppointment }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      {/* Top Contact Bar (Normal flow, scrolls out smoothly) */}
      <div className="bg-dark text-light py-2 px-lg-5 d-none d-lg-block border-bottom border-secondary border-opacity-25">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center gap-4 small">
                <a 
                  href="https://maps.app.goo.gl/DfySr7pThQS1V1jq9?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-light text-decoration-none hover-primary"
                >
                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                  Find Us On Google Maps
                </a>
                <a 
                  href="tel:03004155932" 
                  className="text-light text-decoration-none hover-primary"
                >
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  0300 4155932
                </a>
                <span>
                  <i className="fa fa-clock text-primary me-2"></i>
                  Mon - Sun: 09 AM - 10 PM
                </span>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="d-inline-flex align-items-center gap-3">
                <span className="badge bg-success px-2 py-1 small me-2">
                  <i className="fa fa-circle fs-6 me-1 animate-pulse"></i> OPEN NOW
                </span>
                <a className="social-icon-real social-tiktok ms-1" href="https://www.tiktok.com/@20scissorart5?_r=1&_t=ZS-99fxgufIzjd" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><i className="fab fa-tiktok"></i></a>
                <a className="social-icon-real social-facebook" href="https://www.facebook.com/share/1MBG7yLNtc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a className="social-icon-real social-whatsapp" href="https://wa.me/923004155932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top shadow-sm py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0 d-flex align-items-center" onClick={handleNavClick}>
          <img src="/img/logo.jpg" alt="20 SCISSOR ART Logo" style={{ height: '48px', width: 'auto', borderRadius: '6px' }} className="me-2 shadow-sm border border-gold" />
          <div>
            <h1 className="mb-0 text-primary text-uppercase font-weight-bold fs-3 lh-1">
              20 SCISSOR ART
            </h1>
            <span className="text-dark small tracking-wider text-uppercase font-weight-bold d-block style-subtext" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
              Ladies & Gents Salon
            </span>
          </div>
        </Link>
        <button 
          type="button" 
          className="navbar-toggler me-4 border-0" 
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarCollapse" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              About
            </NavLink>
            <NavLink 
              to="/service" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Service
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Our Experts
            </NavLink>
            <NavLink 
              to="/testimonial" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Contact
            </NavLink>

            {/* Mobile Social Links Bar */}
            <div className="d-flex d-lg-none align-items-center gap-3 mt-3 pt-3 border-top border-secondary border-opacity-25 w-100 justify-content-center">
              <span className="small text-muted font-weight-bold me-1">Follow Us:</span>
              <a className="social-icon-real social-tiktok" href="https://www.tiktok.com/@20scissorart5?_r=1&_t=ZS-99fxgufIzjd" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><i className="fab fa-tiktok"></i></a>
              <a className="social-icon-real social-facebook" href="https://www.facebook.com/share/1MBG7yLNtc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="social-icon-real social-whatsapp" href="https://wa.me/923004155932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <button 
            onClick={onOpenAppointment}
            className="btn btn-primary rounded-pill py-2 px-lg-4 d-none d-lg-block border-0 font-weight-bold shadow-sm ms-lg-3 hover-lift"
          >
            Appointment <i className="fa fa-arrow-right ms-2"></i>
          </button>
        </div>
      </nav>
    </>
  );
}
