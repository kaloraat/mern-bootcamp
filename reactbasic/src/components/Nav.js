import { Link } from "react-router-dom";

const Nav = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">
        About
      </Link>
    </li>
  </ul>
);

export default Nav;
