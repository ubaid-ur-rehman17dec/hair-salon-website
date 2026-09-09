const gentsPrices = [
  { service: 'Gents Haircut', price: '$29.00' },
  { service: 'Beard Trim & Shape', price: '$15.00' },
  { service: 'Hot Towel Mans Shave', price: '$23.00' },
  { service: 'Hair & Beard Dyeing', price: '$19.00' },
  { service: 'Mustache Styling', price: '$15.00' },
  { service: 'Stacking & Styling', price: '$39.00' }
];

const ladiesPrices = [
  { service: 'Bridal Makeup & Package', price: '$85.00' },
  { service: 'Ladies Haircut & Blowdry', price: '$25.00' },
  { service: 'Party & Event Makeup', price: '$45.00' },
  { service: 'Facial & Glow Care Treatment', price: '$35.00' },
  { service: 'Hair Coloring & Balayage', price: '$50.00' },
  { service: 'Manicure & Pedicure Spa', price: '$30.00' }
];

export default function PriceSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
          <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">Price & Plan</p>
          <h1 className="text-uppercase text-dark font-weight-bold">Gents & Ladies Pricing Plan</h1>
        </div>
        <div className="row g-4">
          {/* Gents Pricing Column */}
          <div className="col-lg-6">
            <div className="bg-white p-5 shadow-sm border rounded h-100">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-square bg-primary text-white rounded-circle me-3">
                  <i className="fa fa-male fs-5"></i>
                </div>
                <div>
                  <h3 className="text-uppercase text-dark mb-0 font-weight-bold">Gents Services</h3>
                  <span className="text-muted small">Barbering & Grooming Menu</span>
                </div>
              </div>
              <div>
                {gentsPrices.map((item, index) => (
                  <div 
                    key={index} 
                    className={`d-flex justify-content-between ${index !== gentsPrices.length - 1 ? 'border-bottom border-light' : ''} py-3`}
                  >
                    <h6 className="text-uppercase mb-0 text-dark font-weight-bold">{item.service}</h6>
                    <span className="text-uppercase text-primary font-weight-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ladies Pricing Column */}
          <div className="col-lg-6">
            <div className="bg-white p-5 shadow-sm border rounded h-100">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-square bg-danger text-white rounded-circle me-3">
                  <i className="fa fa-female fs-5"></i>
                </div>
                <div>
                  <h3 className="text-uppercase text-dark mb-0 font-weight-bold">Ladies & Bridal</h3>
                  <span className="text-muted small">Beauty, Hair & Bridal Package Menu</span>
                </div>
              </div>
              <div>
                {ladiesPrices.map((item, index) => (
                  <div 
                    key={index} 
                    className={`d-flex justify-content-between ${index !== ladiesPrices.length - 1 ? 'border-bottom border-light' : ''} py-3`}
                  >
                    <h6 className="text-uppercase mb-0 text-dark font-weight-bold">{item.service}</h6>
                    <span className="text-uppercase text-danger font-weight-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
