import { useState } from 'react';

const workingHours = [
  { day: 'Monday - Thursday', hours: '09 AM - 10 PM', status: 'Open' },
  { day: 'Friday', hours: '02 PM - 10 PM', status: 'Open' },
  { day: 'Saturday - Sunday', hours: '09 AM - 10 PM', status: 'Open' }
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
    <div className="pt-4">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Quick Contact & Opening Hours Summary Cards */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <a 
                href="https://maps.app.goo.gl/DfySr7pThQS1V1jq9?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center hover-lift">
                  <div className="btn-square bg-primary text-white rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                    <i className="fa fa-map-marker-alt fs-4"></i>
                  </div>
                  <div>
                    <h6 className="text-uppercase mb-1 text-dark font-weight-bold">Google Maps Location</h6>
                    <span className="text-primary small font-weight-bold">Click to Open Directions <i className="fa fa-external-link-alt ms-1"></i></span>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6">
              <a href="tel:03004155932" className="text-decoration-none">
                <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center hover-lift">
                  <div className="btn-square bg-primary text-white rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                    <i className="fa fa-phone-alt fs-4"></i>
                  </div>
                  <div>
                    <h6 className="text-uppercase mb-1 text-dark font-weight-bold">Call Us Direct</h6>
                    <span className="text-primary font-weight-bold">0300 4155932</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="bg-white p-4 shadow-sm border rounded h-100 d-flex align-items-center">
                <div className="btn-square bg-dark text-primary rounded-circle flex-shrink-0 me-3" style={{ width: '54px', height: '54px' }}>
                  <i className="fa fa-user-tie fs-4"></i>
                </div>
                <div>
                  <h6 className="text-uppercase mb-1 text-dark font-weight-bold">CEO & Staff</h6>
                  <span className="text-muted small">CEO: Muhammad Shabir | Staff: Muhammad Taha & Waseem Rasheed</span>
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

                {/* Google Map & Directions Card */}
                <div className="bg-primary text-white p-4 shadow border rounded d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden" style={{ minHeight: '220px', backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(26,26,26,1) 100%)' }}>
                  <i className="fa fa-map-marked-alt text-primary display-4 mb-3"></i>
                  <h4 className="text-uppercase text-white font-weight-bold mb-2">20 SCISSOR ART Location</h4>
                  <p className="small text-light opacity-75 mb-3 px-3">
                    Click below to open our exact location on Google Maps for GPS navigation & directions.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/DfySr7pThQS1V1jq9?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary text-uppercase font-weight-bold py-3 px-4 rounded-pill shadow hover-lift border-0"
                  >
                    Open Location On Google Maps <i className="fa fa-external-link-alt ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
