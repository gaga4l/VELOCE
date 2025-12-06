import Veloce from "./Navigation/WordMark/Veloce";
import NavLink from "./Navigation/LockUp/Links/NavLink";
import Tagline from "./Navigation/LockUp/Tagline/Tagline";
import DecorativeBorder from "./DecorativeBorder";

const Header  = () => {
  return (
    <header>
      <div className="flex justify-between pl-10 pr-8 pt-3 pb-6 md:grid md:grid-rows-2 md:gap-[70px] md:">
        <Veloce />
        <div className="pr-[30px] row-start-1">
          <Tagline />
          <NavLink />
        </div>
      </div>
      <DecorativeBorder />
    </header>
    
  )
}

export default Header;
