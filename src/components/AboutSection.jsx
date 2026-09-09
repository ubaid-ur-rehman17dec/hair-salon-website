export default function AboutSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="d-flex flex-column">
              <img className="img-fluid w-75 align-self-end rounded shadow-sm" src="/img/about.jpg" alt="About HairCut Unisex Salon" />
              <div className="w-50 bg-primary text-white p-4 p-md-5 rounded shadow" style={{ marginTop: '-25%' }}>
                <h1 className="text-uppercase text-white mb-2 font-weight-bold">25 Years</h1>
                <h2 className="text-uppercase mb-0 text-white fs-4">Excellence</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="d-inline-block bg-light text-primary py-1 px-4 rounded-pill font-weight-bold">About Unisex Salon</p>
            <h1 className="text-uppercase mb-4 text-dark font-weight-bold">Premium Gents & Ladies Services Under One Roof!</h1>
            <p className="text-secondary">
              At HairCut Salon, we offer complete beauty, hair, and grooming solutions tailored for both Gents and Ladies. From precision haircuts and beard trims to luxury bridal makeup, facials, and hair coloring, our master stylists ensure you look and feel your absolute best.
            </p>
            <p className="mb-4 text-secondary">
              With over 25 years of experience, state-of-the-art equipment, and top-tier beauty products, we provide a relaxing unisex salon experience for individuals and couples alike.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="btn-square bg-light text-primary rounded-circle me-3">
                    <i className="fa fa-female"></i>
                  </div>
                  <div>
                    <h5 className="text-uppercase mb-0 text-dark font-weight-bold">Ladies & Bridal</h5>
                    <span className="small text-muted">Makeup, Facials & Hair</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="btn-square bg-light text-primary rounded-circle me-3">
                    <i className="fa fa-male"></i>
                  </div>
                  <div>
                    <h5 className="text-uppercase mb-0 text-dark font-weight-bold">Gents Barbering</h5>
                    <span className="small text-muted">Haircut, Beard & Shave</span>
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
