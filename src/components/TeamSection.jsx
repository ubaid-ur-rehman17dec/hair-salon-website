const experts = [
  { name: 'Alex Johnson', designation: 'Master Barber (Gents)', image: '/img/team-1.jpg' },
  { name: 'Sophia Martinez', designation: 'Bridal & Makeup Artist', image: '/img/team-2.jpg' },
  { name: 'Michael Brown', designation: 'Beard & Hair Stylist', image: '/img/team-3.jpg' },
  { name: 'Emma Wilson', designation: 'Ladies Hair Specialist', image: '/img/team-4.jpg' },
  { name: 'Robert Taylor', designation: 'Senior Barber', image: '/img/team-2.jpg' },
  { name: 'Olivia Davis', designation: 'Skin & Facial Expert', image: '/img/team-3.jpg' },
  { name: 'Daniel Martinez', designation: 'Hair Coloring Master', image: '/img/team-4.jpg' },
  { name: 'Isabella Anderson', designation: 'Manicure & Spa Specialist', image: '/img/team-1.jpg' }
];

export default function TeamSection({ limit }) {
  const displayExperts = limit ? experts.slice(0, limit) : experts;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">Our Stylists & Barbers</p>
          <h1 className="text-uppercase text-dark font-weight-bold">Meet Our Gents & Ladies Experts</h1>
        </div>
        <div className="row g-4">
          {displayExperts.map((expert, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="team-item shadow-sm border rounded overflow-hidden bg-white">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={expert.image} alt={expert.name} />
                  <div className="team-social">
                    <a className="btn btn-square" href="#!" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                    <a className="btn btn-square" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
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
