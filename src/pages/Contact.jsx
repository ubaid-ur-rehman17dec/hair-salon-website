import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const workingHours = [
  { day: 'Monday', hours: '09 AM - 09 PM', status: 'Open' },
  { day: 'Tuesday', hours: '09 AM - 09 PM', status: 'Open' },
  { day: 'Wednesday', hours: '09 AM - 09 PM', status: 'Open' },
  { day: 'Thursday', hours: '09 AM - 09 PM', status: 'Open' },
  { day: 'Friday', hours: '09 AM - 09 PM', status: 'Open' },
  { day: 'Sat / Sun', hours: 'Closed', status: 'Closed' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <>
      <PageHeader title="Contact Us" category="" />

      <div className="container-xxl py-5">
        <div className="container">
          {/* Quick Contact & Opening Hours Summary Cards */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center">
                <div className="btn-square bg-primary text-white rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                  <i className="fa fa-map-marker-alt fs-4"></i>
                </div>
                <div>
                  <h6 className="text-uppercase mb-1 text-dark font-weight-bold">Visit Our Salon</h6>
                  <span className="text-muted small">123 Street, New York, USA</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center">
                <div className="btn-square bg-primary text-white rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                  <i className="fa fa-phone-alt fs-4"></i>
                </div>
                <div>
                  <h6 className="text-uppercase mb-1 text-dark font-weight-bold">Call Us Direct</h6>
                  <span className="text-muted small">+012 345 67890</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center">
                <div className="btn-square bg-danger text-white rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                  <i className="fa fa-clock fs-4"></i>
                </div>
                <div>
                  <h6 className="text-uppercase mb-1 text-dark font-weight-bold">Salon Working Hours</h6>
                  <span className="text-muted small">Mon - Fri: 09 AM - 09 PM (Sat/Sun Closed)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Contact Form Column */}
            <div className="col-lg-7">
              <div className="bg-white p-5 shadow-sm border rounded h-100">
                <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">Get In Touch</p>
                <h2 className="text-uppercase mb-4 text-dark font-weight-bold">Have Any Query? Please Contact Us!</h2>
                
                {submitted ? (
                  <div className="alert alert-success text-center py-4 my-3" role="alert">
                    <i className="fa fa-check-circle fa-2x mb-2 text-success"></i>
                    <h5 className="alert-heading">Message Sent Successfully!</h5>
                    <p className="mb-0">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Your Name" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Your Email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            placeholder="Subject" 
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea 
                            className="form-control" 
                            placeholder="Leave a message here" 
                            id="message" 
                            style={{ height: '120px' }}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3 text-uppercase font-weight-bold rounded-pill" type="submit">
                          Send Message <i className="fa fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Working Hours Schedule & Map Column */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4 h-100">
                {/* Working Hours Card */}
                <div className="bg-dark text-white p-4 shadow-sm border rounded">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-clock text-primary fs-3 me-3"></i>
                    <div>
                      <h4 className="text-uppercase text-white mb-0 font-weight-bold">Working Hours</h4>
                      <span className="small text-muted">Weekly Salon Timings</span>
                    </div>
                  </div>
                  <div className="border-top border-secondary pt-3">
                    {workingHours.map((item, index) => (
                      <div 
                        key={index}
                        className="d-flex justify-content-between py-2 border-bottom border-secondary border-opacity-50"
                      >
                        <span className="text-light font-weight-bold">{item.day}</span>
                        <span className={item.status === 'Open' ? 'text-primary font-weight-bold' : 'text-danger font-weight-bold'}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map */}
                <div className="flex-grow-1 shadow-sm border rounded overflow-hidden" style={{ minHeight: '220px' }}>
                  <iframe 
                    className="google-map w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    title="Google Map"
                    style={{ border: 0, minHeight: '220px' }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
