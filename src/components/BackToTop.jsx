import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href="https://wa.me/923004155932"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg-square position-fixed rounded-circle shadow-lg hover-lift"
        style={{ left: '30px', bottom: '30px', zIndex: 999, width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="WhatsApp Contact"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp fs-2 text-white"></i>
      </a>

      {visible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary btn-lg-square back-to-top position-fixed rounded-circle shadow"
          style={{ right: '30px', bottom: '30px', zIndex: 99, width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Back to top"
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
