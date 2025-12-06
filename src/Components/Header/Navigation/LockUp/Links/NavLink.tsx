import { Link, UNSAFE_useFogOFWarDiscovery } from "react-router-dom";

function NavLink() {
  return (
    <nav className="flex flex-col text-end md:flex-row md:justify-between md:border-t md:pt-2.5">
      <Link className="font-jaro font-bold md:text-[24px] md:hidden" to="/">
        Home
      </Link>
      <Link className="font-jaro font-bold md:text-[24px]" to="/about">
        About
      </Link>
      <Link className="md:hidden font-jaro font-bold md:text-[24px]" to="/findus">
        Find Us
      </Link>
      <Link className="hidden md:block font-jaro font-bold md:text-[24px]" to="/findus">
        Find stocklists
      </Link>
      <Link className="font-jaro font-bold md:text-[24px]" to="/contact">
        Contact
      </Link>
    </nav>
    
  );
}

export default NavLink;
