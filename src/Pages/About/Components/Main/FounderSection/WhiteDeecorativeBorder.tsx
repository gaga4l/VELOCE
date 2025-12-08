// import DecorativeBorderMobile from "../../assets/Decorative border mobile.svg";
import WhiteDecorativeBorder1 from "../../../../../assets/White Decorative border mobile.svg";
import WhiteDecorativeBorderTablet from "../../../../../assets/White Decorative Border Tablet.svg";
import WhiteDecorativeBorderDesktop from "../../../../../assets/White Decorative Border Desktop.svg";
const WhiteDecorativeBorder = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={WhiteDecorativeBorderDesktop} />
        <source media="(min-width: 768px)" srcSet={WhiteDecorativeBorderTablet} />
        <img
          className="w-full h-5 md:h-[20.03px] lg:h-[32.05px] object-cover"
          src={WhiteDecorativeBorder1}
          alt="Decorative Border"
        />
      </picture>
    </div>
  );
};

export default WhiteDecorativeBorder;
