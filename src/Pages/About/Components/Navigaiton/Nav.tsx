import  VeloceWordmark from "../../../../assets/Veloce about mobile.svg"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <header className="w-full h-fit px-[30px] py-5 md:py-2.5 flex justify-between md:items-center">
      <Link to="/" className="md:hidden w-[107px] h-7"><img className=" object-cover object-center" src={VeloceWordmark} alt="Veloce Wordmark" /></Link>
      <Link to="/" className=" hidden font-jaro text-accent1 md:block md:text-[54.02px] md:leading-[84%] md:tracking-[-6%] ">Véloce</Link>
      <nav className="flex flex-col gap-2.5 items-end md:items-center md:flex-row md:gap-[26px] ">
        <Link to="/about" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px] md:tracking-[-1%]  hover:text-accent1/75 transition-all duration-300 ">About</Link>
          <Link to="/findus" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px]  md:tracking-[-1%]  hover:text-accent1/75 transition-all duration-300 ">Find us</Link>
          <Link to="/contact" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px]  md:tracking-[-1%]  hover:text-accent1/75 transition-all duration-300 ">Contact</Link>
      </nav>
    </header>
  )
}

export default Nav;