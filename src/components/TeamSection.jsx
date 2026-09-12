const experts = [
  { 
    name: 'Muhammad Shabir', 
    designation: 'CEO & Master Barber', 
    image: '/img/ceo-shabir.jpg',
    badge: 'CEO / Founder'
  },
  { 
    name: 'Muhammad Taha', 
    designation: 'Senior Hair Stylist', 
    image: '/img/barber-taha.jpg',
    badge: 'Staff Expert'
  },
  { 
    name: 'Waseem Rasheed', 
    designation: 'Beard & Styling Specialist', 
    image: '/img/barber-waseem.jpg',
    badge: 'Staff Expert'
  }
];

export default function TeamSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">Our Master Team</p>
          <h1 className="text-uppercase text-dark font-weight-bold">Meet 20 SCISSOR ART Experts</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {experts.map((expert, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="team-item shadow border rounded overflow-hidden bg-white h-100 position-relative">
                <div className="team-img position-relative overflow-hidden" style={{ height: '360px' }}>
                  <img className="img-fluid w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'top center' }} src={expert.image} alt={expert.name} />
                  <span className="badge bg-primary text-white position-absolute top-0 start-0 m-3 px-3 py-2 text-uppercase font-weight-bold rounded-pill shadow-sm">
                    {expert.badge}
                  </span>
                  <div className="team-social gap-2 d-flex justify-content-center">
                    <a className="social-icon-real social-tiktok me-1" href="https://www.tiktok.com/@20scissorart5?_r=1&_t=ZS-99fxgufIzjd" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><i className="fab fa-tiktok"></i></a>
                    <a className="social-icon-real social-facebook me-1" href="https://www.facebook.com/share/1MBG7yLNtc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-icon-real social-whatsapp" href="https://wa.me/923004155932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                  </div>
                </div>
                <div className="bg-white text-center p-4">
                  <h5 className="text-uppercase text-dark mb-1 font-weight-bold">{expert.name}</h5>
                  <span className="text-primary font-weight-bold small">{expert.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
