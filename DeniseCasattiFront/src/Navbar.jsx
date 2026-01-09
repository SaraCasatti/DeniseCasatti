import { useState } from "react";
import { Link } from "react-router-dom";
import LogoA from "./assets/LogoA.png";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-light is-fixed-top navbar-custom " role="navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={LogoA} alt="Logo" />
        </Link>

        <button
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
        </div>

        <div className="navbar-end">
          <Link to="/MyWork" className="navbar-item">My Work</Link>
          <Link to="/MyStory" className="navbar-item">My Story</Link>
          <Link to="/MyResume" className="navbar-item">My Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
