import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container-fluid bg-secondary text-light footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Get In Touch</h4>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-map-marker-alt text-primary"></span>
              </div>
              <span>123 Street, New York, USA</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-phone-alt text-primary"></span>
              </div>
              <span>+012 345 67890</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-envelope-open text-primary"></span>
              </div>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Quick Links</h4>
            <Link className="btn btn-link text-decoration-none" to="/about">About Us</Link>
            <Link className="btn btn-link text-decoration-none" to="/contact">Contact Us</Link>
            <Link className="btn btn-link text-decoration-none" to="/service">Our Services</Link>
            <Link className="btn btn-link text-decoration-none" to="/price">Pricing Plan</Link>
            <Link className="btn btn-link text-decoration-none" to="/team">Our Experts</Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Newsletter</h4>
            <div className="position-relative mb-4">
              <input 
                className="form-control border-0 w-100 py-3 ps-4 pe-5 bg-dark text-white" 
                type="text" 
                placeholder="Your email"
              />
              <button 
                type="button" 
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
            <div className="d-flex pt-1 m-n1">
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="#!" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="#!" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom text-decoration-none" to="/">HairCut Salon</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom text-decoration-none" href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
