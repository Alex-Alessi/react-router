import { NavLink } from "react-router-dom";

export default function Navbar() {
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        React-router
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chi siamo">
              Chi siamo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/postsList">
              Posts List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}
