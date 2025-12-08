import  VeloceWordmark from "../../../../assets/Veloce about mobile.svg"
const Nav = () => {
  return (
    <header className="w-full h-fit px-[30px] py-5 md:py-2.5 flex justify-between md:items-center">
      <div className="md:hidden w-[107px] h-7"><img className=" object-cover object-center" src={VeloceWordmark} alt="Veloce Wordmark" /></div>
      <p className=" hidden font-jaro text-accent1 md:block md:text-[54.02px] md:leading-[84%] md:tracking-[-6%] ">{"Véloce".toUpperCase()}</p>
      <nav className="flex flex-col gap-2.5 items-end md:items-center md:flex-row md:gap-[26px] ">
        <a href="/" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px] md:tracking-[-1%] ">{"About".toUpperCase()}</a>
        <a href="/" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px]  md:tracking-[-1%] ">{"Find us".toUpperCase()}</a>
        <a href="/" className="font-jaro text-[16px] font-extrabold tracking-normal leading-[139%] md:text-[24px] lg:text-[26px]  md:tracking-[-1%]">{"Contact".toUpperCase()}</a>
      </nav>
    </header>
  )
}

export default Nav;