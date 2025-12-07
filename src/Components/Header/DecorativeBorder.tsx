// import DecorativeBorderMobile from "../../assets/Decorative border mobile.svg";
import DecorativeBorder1 from "../../assets/Decorative_border.svg";
import DecorativeBorderTablet from "../../assets/Decorative_border_tablet.svg";
import DecorativeBorderDesktop from "../../assets/Decorative_Border_Desktop.svg";
const DecorativeBorder = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={DecorativeBorderDesktop} />
        <source media="(min-width: 768px)" srcSet={DecorativeBorderTablet} />
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
