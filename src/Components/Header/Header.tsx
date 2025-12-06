import Veloce from "./Navigation/WordMark/Veloce";
import VeloceTablet from "../../assets/Veloce tablet.svg"
import NavLink from "./Navigation/LockUp/Links/NavLink";
import Tagline from "./Navigation/LockUp/Tagline/Tagline";
import DecorativeBorder from "./DecorativeBorder";

const Header  = () => {
  return (
    <header className="md:w-[800px] md:h-fit">
      <div className="flex justify-between pl-10 pr-8 pt-3 pb-6">
        <Veloce />
        <Tagline />
        <NavLink />
      </div>
      <DecorativeBorder />
    </header>
    
  )
}

export default Header;
