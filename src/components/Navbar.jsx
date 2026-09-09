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
                <span>
                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                  123 Street, New York, USA
                </span>
                <span>
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  +012 345 67890
                </span>
                <span>
                  <i className="fa fa-clock text-primary me-2"></i>
                  Mon - Fri: 09 AM - 09 PM
                </span>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="d-inline-flex align-items-center gap-3">
                <span className="badge bg-success px-2 py-1 small">
                  <i className="fa fa-circle fs-6 me-1 animate-pulse"></i> OPEN NOW
                </span>
                <a className="text-light hover-primary" href="#!" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                <a className="text-light hover-primary" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a className="text-light hover-primary" href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Rock-solid, zero height shifts, zero blinking) */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top shadow-sm py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0" onClick={handleNavClick}>
          <h1 className="mb-0 text-primary text-uppercase font-weight-bold d-flex align-items-center fs-2">
            <i className="fa fa-cut me-3"></i>HairCut
          </h1>
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
              to="/price" 
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Pricing
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
