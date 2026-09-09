import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-4">
      <div className="container-xxl py-5">
        <div className="container text-center py-5 bg-white shadow-sm border rounded">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1 text-dark font-weight-bold">404</h1>
              <h1 className="mb-4 text-dark font-weight-bold">Page Not Found</h1>
              <p className="mb-4 text-secondary">
                We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
              </p>
              <Link className="btn btn-primary py-3 px-5 text-uppercase font-weight-bold rounded-pill" to="/">
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
