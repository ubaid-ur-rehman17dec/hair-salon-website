import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container-fluid bg-secondary text-light footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img src="/img/logo.jpg" alt="20 SCISSOR ART Logo" style={{ height: '55px', width: 'auto', borderRadius: '8px' }} className="me-3 border border-warning shadow-sm" />
              <div>
                <h4 className="text-uppercase mb-0 text-primary font-weight-bold">20 SCISSOR ART</h4>
                <span className="small text-muted text-uppercase tracking-wider">Ladies & Gents Salon</span>
              </div>
            </div>
            <p className="small text-light opacity-75 mb-3">
              Premier Ladies & Gents Salon founded by CEO Muhammad Shabir. Master hair styling, beard sculpts, facials, and beauty services.
            </p>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-map-marker-alt text-primary"></span>
              </div>
              <a 
                href="https://maps.app.goo.gl/DfySr7pThQS1V1jq9?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light text-decoration-none hover-primary"
              >
                Find Us On Google Maps
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-phone-alt text-primary"></span>
              </div>
              <a href="tel:03004155932" className="text-light text-decoration-none hover-primary">
                0300 4155932
              </a>
            </div>
            <div className="d-flex align-items-center">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-user-tie text-primary"></span>
              </div>
              <span>CEO: Muhammad Shabir</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Quick Links</h4>
            <Link className="btn btn-link text-decoration-none" to="/about">About Us</Link>
            <Link className="btn btn-link text-decoration-none" to="/contact">Contact Us</Link>
            <Link className="btn btn-link text-decoration-none" to="/service">Our Services</Link>
            <Link className="btn btn-link text-decoration-none" to="/gallery">Salon Gallery</Link>
            <Link className="btn btn-link text-decoration-none" to="/team">Our Experts</Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Follow Us</h4>
            <p className="small text-light opacity-75 mb-3">
              Connect with 20 SCISSOR ART on TikTok, Facebook & WhatsApp for latest hairstyles, customer transformation videos & appointments!
            </p>
            <div className="d-flex pt-1 gap-3">
              <a className="social-icon-real social-tiktok" href="https://www.tiktok.com/@20scissorart5?_r=1&_t=ZS-99fxgufIzjd" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><i className="fab fa-tiktok"></i></a>
              <a className="social-icon-real social-facebook" href="https://www.facebook.com/share/1MBG7yLNtc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="social-icon-real social-whatsapp" href="https://wa.me/923004155932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom text-decoration-none" to="/">20 SCISSOR ART</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              CEO Muhammad Shabir | Staff: Muhammad Taha & Waseem Rasheed
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
