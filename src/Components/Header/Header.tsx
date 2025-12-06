import Veloce from "./Navigation/WordMark/Veloce";
import NavLink from "./Navigation/LockUp/Links/NavLink";
import Tagline from "./Navigation/LockUp/Tagline/Tagline";
import DecorativeBorder from "./DecorativeBorder";

const Header  = () => {
  return (
    <header>
      <div className="flex justify-between pl-10 pr-8 pt-3 pb-6 md:flex-col md:justify-start md:gap-[70px] md:p-[30px]">
        <Veloce />
        <div className="pr-[30px] md:p-0 md:order-first md:flex md:flex-col md:gap-[50px]">
          <Tagline />
          <NavLink />
        </div>
      </div>
      <DecorativeBorder />
    </header>
    
  )
}

export default Header;
