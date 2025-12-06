const Footer = () => {
  return (
    <footer className="w-full h-fit text-center bg-background2">
      <div className="w-full h-fit px-[30px] pt-[50px] pb-[100px] ">
        <div className="w-full h-fit pb-[50px] flex flex-col gap-[7px]">
          <a href="" className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold">{"Find stocklists".toUpperCase()}</a>
          <a href="" className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold">{"About".toUpperCase()}</a>
        </div>
        <div className="w-full h-fit pb-[50px] flex flex-col gap-[7px]">
          <p className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold">{"(646) 555-4567".toUpperCase()}</p>
          <p className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold">{"hello@veloce.com".toUpperCase()}</p>
        </div>
      </div>
      <div className="w-full h-fit px-[30px] pb-5 text-center flex flex-col gap-5">
        <a className="font-jaro text-[100px] text-accent1 leading-[84%] tracking-[1%]" href="/">{"Véloce".toUpperCase()}</a>
        <p className="font-geist font-bold text-[14.22px] text-accent1 leading-[110%] tracking-[-5%]">{"véloce© 2025 All Rights Reserved".toUpperCase()}</p>
      </div>
    </footer>
  )
}

export default Footer;