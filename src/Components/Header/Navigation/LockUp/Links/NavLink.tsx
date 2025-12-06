import { Link } from "react-router-dom";

function NavLink() {
  return (
    <nav className="flex flex-col text-end md:flex-row md:justify-between md:border-t md:pt-2.5 ">
      <Link
        className="font-jaro font-bold md:text-[24px] md:hidden hover:text-accent1/75 transition-all duration-300"
        to="/"
      >
        Home
      </Link>
      <Link
        className="font-jaro font-bold md:text-[24px] hover:text-accent1/75 transition-all duration-300 "
        to="/about"
      >
        About
      </Link>
      <Link
        className="md:hidden font-jaro font-bold md:text-[24px] hover:text-accent1/75 transition-all duration-300"
        to="/findus"
      >
        Find Us
      </Link>
      <Link
        className="hidden md:block font-jaro font-bold md:text-[24px] hover:text-accent1/75 transition-all duration-300 "
        to="/findus"
      >
        Find stocklists
      </Link>
      <Link
        className="font-jaro font-bold md:text-[24px] hover:text-accent1/75 transition-all duration-300"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavLink;
