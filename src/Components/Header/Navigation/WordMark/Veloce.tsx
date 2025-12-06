import VeloceMobile from "../../../../assets/Wordmark.svg"
import VeloceTablet from "../../../../assets/Veloce Tablet.svg"
import VeloceDesktop from "../../../../assets/Veloce Desktop.svg"

export default function Veloce() {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet={VeloceTablet} />
        <source media="(min-width: 1024px)" srcSet={VeloceDesktop} />
        <img className="w-full" src={VeloceMobile} alt="Wordmark" />
      </picture>
      
    </div>
  );
}
