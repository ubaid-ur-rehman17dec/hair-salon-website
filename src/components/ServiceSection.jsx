import { useState } from 'react';

const allServices = [
  // Gents Services
  {
    category: 'gents',
    icon: '/img/haircut.png',
    bgImage: '/img/carousel-1.jpg',
    title: 'Gents Haircut',
    price: 'From $15',
    description: 'Precision haircut, hair wash, scalp massage, and custom styling by master barbers.'
  },
  {
    category: 'gents',
    icon: '/img/beard-trim.png',
    bgImage: '/img/carousel-2.jpg',
    title: 'Beard Trim & Shape',
    price: 'From $15',
    description: 'Professional beard sculpting, line-up, hot towel treatment, and beard oil nourishment.'
  },
  {
    category: 'gents',
    icon: '/img/mans-shave.png',
    bgImage: '/img/about.jpg',
    title: 'Hot Towel Mans Shave',
    price: 'From $15',
    description: 'Classic straight-razor shave with warm lather, hot towels, and soothing balm.'
  },
  {
    category: 'gents',
    icon: '/img/hair-dyeing.png',
    bgImage: '/img/price.jpg',
    title: 'Gents Hair & Beard Color',
    price: 'From $20',
    description: 'Natural grey blending or vibrant custom hair and beard coloring.'
  },
  {
    category: 'gents',
    icon: '/img/mustache.png',
    bgImage: '/img/open.jpg',
    title: 'Mustache Styling',
    price: 'From $10',
    description: 'Detailed mustache trimming, shaping, wax styling, and edge alignment.'
  },
  {
    category: 'gents',
    icon: '/img/stacking.png',
    bgImage: '/img/team-1.jpg',
    title: 'Stacking & Styling',
    price: 'From $15',
    description: 'Modern hair stacking, volume creation, and textured finish.'
  },

  // Ladies Services
  {
    category: 'ladies',
    iconClass: 'fa fa-crown',
    bgImage: '/img/ladies_bridal.jpg',
    title: 'Bridal Makeup & Styling',
    price: 'From $85',
    description: 'HD Bridal makeup, hair styling, veil draping, touch-up kit, and trial session.'
  },
  {
    category: 'ladies',
    iconClass: 'fa fa-female',
    bgImage: '/img/ladies_haircut.jpg',
    title: 'Ladies Haircut & Blowdry',
    price: 'From $25',
    description: 'Customized haircut, deep conditioning wash, blowdry, and signature styling.'
  },
  {
    category: 'ladies',
    iconClass: 'fa fa-magic',
    bgImage: '/img/ladies_makeup.jpg',
    title: 'Party & Event Makeup',
    price: 'From $45',
    description: 'Glamour or subtle party makeup with long-lasting finish and eye lash application.'
  },
  {
    category: 'ladies',
    iconClass: 'fa fa-spa',
    bgImage: '/img/ladies_facial.jpg',
    title: 'Facial & Glow Care',
    price: 'From $35',
    description: 'Deep pore cleansing, herbal exfoliation, hydrating mask, and face massage.'
  },
  {
    category: 'ladies',
    iconClass: 'fa fa-paint-brush',
    bgImage: '/img/ladies_haircolor.jpg',
    title: 'Hair Color & Highlights',
    price: 'From $50',
    description: 'Balayage, ombre, global coloring, highlights, and keratin gloss treatment.'
  },
  {
    category: 'ladies',
    iconClass: 'fa fa-hand-holding-heart',
    bgImage: '/img/ladies_manicure.jpg',
    title: 'Manicure & Pedicure Spa',
    price: 'From $30',
    description: 'Nail shaping, cuticle care, hand & foot scrub, massage, and polish.'
  }
];

export default function ServiceSection({ onOpenAppointment }) {
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === filter);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '700px' }}>
          <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">
            Unisex Salon Services
          </p>
          <h1 className="text-uppercase text-dark font-weight-bold mb-3">
            Ladies & Gents Salon Services
          </h1>
          <p className="text-muted">
            Hover over any service card to view the full photo and book your appointment.
          </p>

          {/* Category Filter Tabs */}
          <div className="d-flex justify-content-center gap-2 mt-4 mb-4">
            <button 
              onClick={() => setFilter('all')}
              className={`btn px-4 py-2 rounded-pill font-weight-bold ${filter === 'all' ? 'btn-primary' : 'btn-outline-dark'}`}
            >
              All Services ({allServices.length})
            </button>
            <button 
              onClick={() => setFilter('gents')}
              className={`btn px-4 py-2 rounded-pill font-weight-bold ${filter === 'gents' ? 'btn-primary' : 'btn-outline-dark'}`}
            >
              <i className="fa fa-male me-2"></i>Gents Services
            </button>
            <button 
              onClick={() => setFilter('ladies')}
              className={`btn px-4 py-2 rounded-pill font-weight-bold ${filter === 'ladies' ? 'btn-primary' : 'btn-outline-dark'}`}
            >
              <i className="fa fa-female me-2"></i>Ladies & Bridal Services
            </button>
          </div>
        </div>

        <div className="row g-4">
          {filteredServices.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="photo-service-card"
                onClick={onOpenAppointment}
              >
                {/* Full Background Photo */}
                <div 
                  className="card-bg-img"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>

                {/* Dark Tint Overlay (Fades out on hover to reveal 100% CLEAR picture) */}
                <div className="card-dark-overlay"></div>

                {/* Card Content Information */}
                <div className="card-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${service.category === 'ladies' ? 'bg-danger' : 'bg-primary'} px-3 py-2 text-uppercase fs-6 shadow-sm`}>
                      {service.category === 'ladies' ? 'Ladies' : 'Gents'}
                    </span>
                    <span className="badge bg-dark text-warning px-3 py-2 text-uppercase font-weight-bold fs-6 shadow-sm">
                      {service.price}
                    </span>
                  </div>

                  <div className="my-auto py-3">
                    <h3 className="text-uppercase text-white font-weight-bold mb-2 fs-4">
                      {service.title}
                    </h3>
                    <p className="text-light small mb-0 opacity-90 px-2">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <button className="book-btn-badge btn btn-primary text-uppercase font-weight-bold w-100 py-2 rounded-pill shadow">
                      Book Appointment <i className="fa fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
