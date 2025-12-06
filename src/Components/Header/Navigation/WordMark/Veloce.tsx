import VeloceMobile from "../../../../assets/Wordmark.svg";
import VeloceTablet from "../../../../assets/Veloce Tablet.svg";
import VeloceDesktop from "../../../../assets/Veloce Desktop.svg";

export default function Veloce() {
  return (
    <div>
      <a href="/" className="block md:hidden">
        <img src={VeloceMobile} alt="Wordmark" className="w-full" />
      </a>
      <picture className="hidden md:block">
        <source media="(min-width: 1024px)" srcSet={VeloceDesktop} />
        <source media="(min-width: 768px)" srcSet={VeloceTablet} />
        <img src={VeloceTablet} alt="Wordmark" className="w-full" />
      </picture>
    </div>
  );
}
