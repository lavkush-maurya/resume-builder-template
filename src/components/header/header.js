import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid m-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
          </a>
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
          {/* <div className="dropdown px-2 py-2" style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse" }}>
            <img src="https://github.com/mdo.png" alt="profilepic" width={32} height={32} className="rounded-circle me-2" />
            <DropdownButton id="dropdown-item-button" variant="dark" title="Resumes">
              <Dropdown.Item as="button">Sign out</Dropdown.Item>
              <Dropdown.Item as="button">Profile</Dropdown.Item>
              <Dropdown.Item as="button">Settings</Dropdown.Item>
            </DropdownButton>
          </div> */}
          {/* <div className="text-end">
          </div> */}
        </div>
      </div>
    </header>
  );
}
export default Header;