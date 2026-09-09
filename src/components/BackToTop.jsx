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

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-primary btn-lg-square back-to-top position-fixed"
      style={{ right: '45px', bottom: '45px', zIndex: 99, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
