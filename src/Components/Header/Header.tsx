import Veloce from "./Navigation/WordMark/Veloce";
import NavLink from "./Navigation/LockUp/Links/NavLink";
const Header  = () => {
  return (
    <header className="pl-10 pr-8 pt-3 flex justify-between">
      <Veloce />
      <NavLink />
    </header>
    
  )
}

export default Header;
