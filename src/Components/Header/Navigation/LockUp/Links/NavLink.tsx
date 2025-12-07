import { Link } from "react-router-dom";

function NavLink() {
  return (
    <nav className="flex flex-col text-end md:flex-row md:justify-between md:border-t md:pt-2.5 lg:py-2 lg:items-start lg:w-full">
      <Link
        className="font-jaro font-bold md:text-[24px] md:hidden lg:text-[26px] lg:leading-[139%] hover:text-accent1/75 transition-all duration-300"
        to="/"
      >
        Home
      </Link>
      <Link
        className="font-jaro font-bold md:text-[24px] lg:text-[26px] lg:leading-[139%] hover:text-accent1/75 transition-all duration-300 "
        to="/about"
      >
        About
      </Link>
      <Link
        className="md:hidden font-jaro font-bold md:text-[24px] lg:text-[26px] lg:leading-[139%] hover:text-accent1/75 transition-all duration-300"
        to="/findus"
      >
        Find Us
      </Link>
      <Link
        className="hidden md:block font-jaro font-bold md:text-[24px] lg:text-[26px] lg:leading-[139%] hover:text-accent1/75 transition-all duration-300 "
        to="/findus"
      >
        Find stocklists
      </Link>
      <Link
        className="font-jaro font-bold md:text-[24px] lg:text-[26px] lg:leading-[139%] hover:text-accent1/75 transition-all duration-300"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavLink;
