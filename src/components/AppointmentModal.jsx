import { useState } from 'react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Gents Haircut',
    barber: 'Barber Master (Gents)',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-white text-dark border-0 shadow-lg">
          <div className="modal-header border-bottom">
            <h5 className="modal-title text-primary text-uppercase font-weight-bold">
              <i className="fa fa-cut me-2"></i>Book An Appointment (Gents & Ladies)
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            {submitted ? (
              <div className="alert alert-success text-center my-3" role="alert">
                <i className="fa fa-check-circle fa-2x mb-2"></i>
                <h5 className="alert-heading">Appointment Booked!</h5>
                <p className="mb-0">Thank you, {formData.name || 'Valued Customer'}. We look forward to serving you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-uppercase text-dark small font-weight-bold">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="John Doe / Jane Doe" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-uppercase text-dark small font-weight-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="+1 234 567 890" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-uppercase text-dark small font-weight-bold">Service</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <optgroup label="-- Gents Services --">
                        <option value="Gents Haircut">Gents Haircut ($15)</option>
                        <option value="Beard Trim & Shape">Beard Trim & Shape ($15)</option>
                        <option value="Hot Towel Mans Shave">Hot Towel Shave ($15)</option>
                        <option value="Gents Hair Color">Gents Hair & Beard Color ($20)</option>
                      </optgroup>
                      <optgroup label="-- Ladies Services --">
                        <option value="Bridal Makeup & Package">Bridal Makeup & Package ($85)</option>
                        <option value="Ladies Haircut & Blowdry">Ladies Haircut ($25)</option>
                        <option value="Party & Event Makeup">Party & Event Makeup ($45)</option>
                        <option value="Facial & Skin Care">Facial & Skin Care ($35)</option>
                        <option value="Hair Color & Highlights">Hair Color & Highlights ($50)</option>
                        <option value="Manicure & Pedicure">Manicure & Pedicure ($30)</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-uppercase text-dark small font-weight-bold">Preferred Expert</label>
                    <select 
                      className="form-select"
                      value={formData.barber}
                      onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                    >
                      <option value="Barber Master (Gents)">Barber Master (Gents)</option>
                      <option value="Bridal & Makeup Artist (Ladies)">Bridal & Makeup Artist (Ladies)</option>
                      <option value="Senior Hair Specialist">Senior Hair Specialist</option>
                      <option value="Beard & Skin Expert">Beard & Skin Expert</option>
                    </select>
                  </div>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-uppercase text-dark small font-weight-bold">Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      required 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-uppercase text-dark small font-weight-bold">Time</label>
                    <input 
                      type="time" 
                      className="form-control" 
                      required 
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 text-uppercase font-weight-bold">
                  Confirm Booking <i className="fa fa-arrow-right ms-2"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
