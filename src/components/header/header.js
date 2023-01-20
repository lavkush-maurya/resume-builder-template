import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid m-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-danger">Home</Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link px-2 text-white">Resumes</Link>
            </li>
            <li>
              <Link to="/how_to_write" className="nav-link px-2 text-white">How to write ?</Link>
            </li>
            <li>
              <Link to="/FAQs" className="nav-link px-2 text-white">FAQs</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">About</Link>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-success">Sign-up</button>
        </div>
      </div>
    </header>
  );
}
export default Header;