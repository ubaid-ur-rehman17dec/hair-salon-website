import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Salon Interior & Main Hall',
    category: 'Interior',
    image: '/img/gallery/gallery-1.jpg',
    description: 'Spacious 20 SCISSOR ART salon hall equipped with luxury barber chairs and modern setup.'
  },
  {
    id: 2,
    title: 'LED Arch Workstations & Ring Light',
    category: 'Workstation',
    image: '/img/gallery/gallery-2.jpg',
    description: 'Custom illuminated mirror stations designed for precision haircuts and detail styling.'
  },
  {
    id: 3,
    title: 'Barber Chairs Lineup',
    category: 'Interior',
    image: '/img/gallery/gallery-3.jpg',
    description: 'Comfortable hydraulic leather chairs with dedicated storage and pendant lighting.'
  },
  {
    id: 4,
    title: 'Branded Illuminated Mirrors',
    category: 'Workstation',
    image: '/img/gallery/gallery-4.jpg',
    description: 'Custom 20 SCISSOR ART glowing arch mirrors creating a premium ambiance.'
  },
  {
    id: 5,
    title: 'Evening Atmosphere & Ambience',
    category: 'Ambience',
    image: '/img/gallery/gallery-5.jpg',
    description: 'Warm mood lighting providing a relaxing salon experience for Gents and Ladies.'
  },
  {
    id: 6,
    title: 'Workstation Perspective & Mirrors',
    category: 'Workstation',
    image: '/img/gallery/gallery-6.jpg',
    description: 'Full perspective of styling mirrors, hanging lamps, and leather grooming chairs.'
  },
  {
    id: 7,
    title: 'Modern Styling Area & Wall Setup',
    category: 'Interior',
    image: '/img/gallery/gallery-7.jpg',
    description: 'Stylishly textured walls with ceiling fans and glowing arch vanity mirrors.'
  },
  {
    id: 8,
    title: 'Full Hall Workstations Lineup',
    category: 'Interior',
    image: '/img/gallery/gallery-8.jpg',
    description: 'Complete lineup of professional grooming stations ready to serve our clients.'
  }
];

export default function GallerySection({ limit }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const displayItems = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="container-xxl py-5 bg-light">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
          <p className="d-inline-block bg-white text-primary py-1 px-4 rounded-pill font-weight-bold shadow-sm">
            <i className="fa fa-camera me-2"></i>20 SCISSOR ART Gallery
          </p>
          <h1 className="text-uppercase text-dark font-weight-bold">Our Salon Interior & Setup</h1>
          <p className="text-muted">
            Take a look inside 20 SCISSOR ART! Modern equipment, LED illuminated stations, and premium comfort for our valued clients.
          </p>
        </div>

        <div className="row g-4">
          {displayItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div 
                className="gallery-card-item h-100"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-img-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                  />
                  <div className="gallery-hover-overlay">
                    <i className="fa fa-search-plus fs-1 text-primary mb-2"></i>
                    <h5 className="text-uppercase text-white font-weight-bold mb-1">{item.title}</h5>
                    <span className="badge bg-primary rounded-pill mb-2">{item.category}</span>
                    <p className="small text-light opacity-90 mb-0">{item.description}</p>
                  </div>
                </div>
                <div className="p-3 bg-white border-top text-center">
                  <h6 className="text-uppercase text-dark font-weight-bold mb-0">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for More Photos coming soon */}
        <div className="text-center mt-5">
          <div className="d-inline-block bg-white p-3 px-4 rounded-pill shadow-sm border border-warning">
            <span className="text-dark font-weight-bold small">
              <i className="fa fa-images text-primary me-2"></i>
              More customer transformation & hair styling photos will be updated soon!
            </span>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1055 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-dark text-white border-gold shadow-lg">
              <div className="modal-header border-secondary">
                <h5 className="modal-title text-primary text-uppercase font-weight-bold">
                  <i className="fa fa-image me-2"></i>{selectedImage.title}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setSelectedImage(null)}
                ></button>
              </div>
              <div className="modal-body p-0 text-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="img-fluid w-100"
                  style={{ maxHeight: '75vh', objectFit: 'contain' }}
                />
              </div>
              <div className="modal-footer border-secondary justify-content-between">
                <span className="text-light opacity-75 small">{selectedImage.description}</span>
                <button className="btn btn-outline-light btn-sm rounded-pill" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
