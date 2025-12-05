import { Link } from "react-router-dom";

function NavLink() {
  return (
    <nav className="flex flex-col align-bottom">
      <Link className="font-jaro font-bold" to="/">
        Home
      </Link>
      <Link className="font-jaro font-bold" to="/about">
        About
      </Link>
      <Link className="font-jaro font-bold" to="/findus">
        Find Us
      </Link>
      <Link className="font-jaro font-bold" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavLink;
