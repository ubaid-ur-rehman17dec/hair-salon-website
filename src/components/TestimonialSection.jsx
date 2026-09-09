import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Robert Fox',
    profession: 'Software Engineer',
    avatar: '/img/testimonial-1.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'
  },
  {
    name: 'Michael Miller',
    profession: 'Creative Director',
    avatar: '/img/testimonial-2.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'
  },
  {
    name: 'James Cooper',
    profession: 'Entrepreneur',
    avatar: '/img/testimonial-3.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">Testimonial</p>
          <h1 className="text-uppercase text-dark font-weight-bold">What Our Clients Say!</h1>
        </div>
        <div className="testimonial-carousel bg-white p-5 rounded shadow-sm border" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="testimonial-item text-center">
            <h4 className="text-uppercase text-dark font-weight-bold">{current.name}</h4>
            <p className="text-primary font-weight-bold">{current.profession}</p>
            <span className="fs-5 text-secondary d-block mb-4">
              "{current.text}"
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            {testimonials.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`btn p-1 mx-2 border-2 ${index === activeIndex ? 'border-primary' : 'border-transparent'}`}
                style={{ 
                  width: index === activeIndex ? '80px' : '60px', 
                  height: index === activeIndex ? '80px' : '60px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  background: 'transparent'
                }}
              >
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="img-fluid rounded-circle w-100 h-100" 
                  style={{ opacity: index === activeIndex ? 1 : 0.4, objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
