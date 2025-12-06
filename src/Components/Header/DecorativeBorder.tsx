// import DecorativeBorderMobile from "../../assets/Decorative border mobile.svg";
import DecorativeBorder1 from "../../assets/Decorative border.svg"
import DecorativeBorderTablet from "../../assets/Decorative border tablet.svg"
import DecorativeBorderDesktop from "../../assets/Decorative border Desktop.svg"
const DecorativeBorder = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet={DecorativeBorderTablet} />
        <source media="(min-width: 1024px)" srcSet={DecorativeBorderDesktop} />
        <img
        className="w-full h-5 md:h-[20.03px] lg:h-[32.05px] object-cover"
          src={DecorativeBorder1}
          alt="Decorative Border"
        />
      </picture>
    </div>
  );
};

export default DecorativeBorder;
