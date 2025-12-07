import DecorativeBorder from "../../assets/Decorative_border_mobile.svg";
const Footer = () => {
  return (
    <footer className="w-full h-fit text-center bg-background2">
      <div className="w-full h-fit px-[30px] pt-[50px] pb-[100px] md:py-[30px] lg:pb-0 lg:flex lg:flex-row lg:text-start">
        <div className="w-full h-fit pb-[50px] flex flex-col gap-[7px] lg:pb-[120px]">
          <a
            href=""
            className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold md:text-[24px] lg:[26px]"
          >
            {"Find stocklists".toUpperCase()}
          </a>
          <a
            href=""
            className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold md:text-[24px] lg:text-[26px] "
          >
            {"About".toUpperCase()}
          </a>
        </div>
        <div className="w-full h-fit pb-[50px] flex flex-col gap-[7px] lg:pb-[120px]">
          <p className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold md:text-[24px] lg:text-[26px] ">
            {"(646) 555-4567".toUpperCase()}
          </p>
          <p className="font-jaro text-[16px] text-link leading-[139%] tracking-[0%] font-extrabold md:text-[24px] lg:text-[26px] ">
            {"hello@veloce.com".toUpperCase()}
          </p>
        </div>
      </div>
      <div className="w-full h-fit px-[30px] pb-5 text-center flex flex-col gap-5 lg:gap-[17px] lg:text-start">
        <a
          className="font-jaro text-[100px] text-accent1 leading-[84%] tracking-[1%] md:text-[240.5px]"
          href="/"
        >
          {"Véloce".toUpperCase()}
        </a>
        <p className="font-geist font-bold text-[14.22px] text-accent1 leading-[110%] tracking-[-5%]">
          {"véloce© 2025 All Rights Reserved".toUpperCase()}
        </p>
      </div>
      <img
        className="w-full h-[32.08px] object-cover object-center"
        src={DecorativeBorder}
        alt="decorative border"
      />
    </footer>
  );
};

export default Footer;
