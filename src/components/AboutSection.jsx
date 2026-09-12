export default function AboutSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <img className="img-fluid w-75 align-self-end rounded shadow-sm" src="/img/about.jpg" alt="About 20 SCISSOR ART Ladies & Gents Salon" />
              <div className="w-50 bg-dark text-white p-3 rounded shadow text-center border border-warning" style={{ marginTop: '-25%', zIndex: 2 }}>
                <img src="/img/logo.jpg" alt="20 SCISSOR ART Official Logo" className="img-fluid rounded mb-2 shadow border border-gold" style={{ maxHeight: '90px' }} />
                <h6 className="text-uppercase text-gold mb-0 font-weight-bold" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>20 SCISSOR ART</h6>
                <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Ladies & Gents</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">About 20 SCISSOR ART</p>
            <h1 className="text-uppercase mb-4 text-dark font-weight-bold">Master Hair & Beauty Artistry For Gents & Ladies</h1>
            <p className="text-secondary">
              Welcome to <strong>20 SCISSOR ART</strong>, premier salon led by CEO <strong>Muhammad Shabir</strong>. We offer complete hair, grooming, and beauty solutions for both Gents and Ladies.
            </p>
            <p className="mb-4 text-secondary">
              Our expert team, featuring senior stylists <strong>Muhammad Taha</strong> and <strong>Waseem Rasheed</strong>, is committed to delivering modern cuts, beard sculpts, hair coloring, and relaxing treatments tailored to your unique style.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="btn-square bg-light text-primary rounded-circle me-3">
                    <i className="fa fa-user-tie"></i>
                  </div>
                  <div>
                    <h5 className="text-uppercase mb-0 text-dark font-weight-bold">CEO & Founder</h5>
                    <span className="small text-muted">Muhammad Shabir</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="btn-square bg-light text-primary rounded-circle me-3">
                    <i className="fa fa-cut"></i>
                  </div>
                  <div>
                    <h5 className="text-uppercase mb-0 text-dark font-weight-bold">Expert Staff</h5>
                    <span className="small text-muted">Muhammad Taha & Waseem Rasheed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
