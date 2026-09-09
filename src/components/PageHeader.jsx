import { Link } from 'react-router-dom';

export default function PageHeader({ title, category = "Pages" }) {
  return (
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container text-center py-5">
        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase mb-0">
            <li className="breadcrumb-item">
              <Link className="text-white text-decoration-none" to="/">Home</Link>
            </li>
            {category && (
              <li className="breadcrumb-item">
                <span className="text-white">{category}</span>
              </li>
            )}
            <li className="breadcrumb-item text-primary active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
