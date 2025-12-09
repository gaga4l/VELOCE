// import DecorativeBorderMobile from "../../assets/Decorative border mobile.svg";
import WhiteDecorativeBorder1 from "../../../../../assets/Decorative border.svg";
import WhiteDecorativeBorderTablet from "../../../../../assets/Decorative border-1.svg";
import WhiteDecorativeBorderDesktop from "../../../../../assets/Decorative border-2.svg";
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
