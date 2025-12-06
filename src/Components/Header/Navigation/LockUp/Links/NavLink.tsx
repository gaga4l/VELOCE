import { Link, UNSAFE_useFogOFWarDiscovery } from "react-router-dom";

function NavLink() {
  return (
    <nav className="flex flex-col text-end md:flex-row md:justify-between md:border-t md:pt-2.5">
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
