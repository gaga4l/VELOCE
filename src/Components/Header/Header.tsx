import Veloce from "./Navigation/WordMark/Veloce";
import NavLink from "./Navigation/LockUp/Links/NavLink";
import DecorativeBorder from "./DecorativeBorder";

const Header  = () => {
  return (
    <header >
      <div className="flex justify-between pl-10 pr-8 pt-3 pb-6">
        <Veloce />
        <NavLink />
      </div>
      <DecorativeBorder />
    </header>
    
  )
}

export default Header;
