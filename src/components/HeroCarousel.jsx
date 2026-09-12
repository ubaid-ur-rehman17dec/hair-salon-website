import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/img/carousel-1.jpg',
    badge: 'Premier Ladies & Gents Salon',
    title: '20 SCISSOR ART',
    subtitle: 'Led by CEO Muhammad Shabir | Expert Styling by Muhammad Taha & Waseem Rasheed',
    location: 'Find us on Google Maps',
    phone: '0300 4155932'
  },
  {
    image: '/img/carousel-2.jpg',
    badge: 'Luxury Grooming & Beauty',
    title: 'Precision Cut & Styling Artistry',
    subtitle: 'Top-Class Barbering, Hair Styling, Facials & Beauty Services for Gents & Ladies',
    location: 'Find us on Google Maps',
    phone: '0300 4155932'
  }
];

export default function HeroCarousel({ onOpenAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide position-relative">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img 
                className="w-100" 
                src={slide.image} 
                alt={slide.title} 
                style={{ height: '75vh', minHeight: '520px', objectFit: 'cover' }} 
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-4 px-md-5" style={{ maxWidth: '950px' }}>
                  <span className="badge bg-primary text-white text-uppercase px-3 py-2 rounded-pill fs-6 mb-3 animated fadeInDown">
                    <i className="fa fa-sparkles me-2"></i>{slide.badge}
                  </span>
                  
                  <h1 className="display-3 text-white text-uppercase mb-3 font-weight-bold animated slideInDown">
                    {slide.title}
                  </h1>
                  
                  <p className="fs-5 text-light mb-4 animated fadeInUp">
                    {slide.subtitle}
                  </p>

                  <div className="d-flex flex-wrap align-items-center gap-3 animated fadeInUp">
                    <button 
                      onClick={onOpenAppointment}
                      className="btn btn-primary rounded-pill py-3 px-5 text-uppercase font-weight-bold shadow-lg border-0 hover-lift"
                    >
                      Book Appointment <i className="fa fa-calendar-check ms-2"></i>
                    </button>
                    
                    <Link 
                      to="/service"
                      className="btn btn-outline-light rounded-pill py-3 px-5 text-uppercase font-weight-bold hover-lift"
                    >
                      Explore Services <i className="fa fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button 
          className="carousel-control-prev border-0 bg-transparent" 
          type="button" 
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <span className="carousel-control-prev-icon rounded-circle bg-dark p-3" aria-hidden="true"></span>
        </button>
        <button 
          className="carousel-control-next border-0 bg-transparent" 
          type="button" 
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <span className="carousel-control-next-icon rounded-circle bg-dark p-3" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}
