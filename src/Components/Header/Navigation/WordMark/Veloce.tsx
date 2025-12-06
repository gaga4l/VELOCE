import VeloceMobile from "../../../../assets/Wordmark.svg"
import VeloceTablet from "../../../../assets/Veloce Tablet.svg"
import VeloceDesktop from "../../../../assets/Veloce Desktop.svg"

export default function Veloce() {
  return (
    <div className="w-[107px] h-[35.19px] ">
      {/*<h1 className="font-jaro text-4xl accent-accent1">{"véloce".toUpperCase()}</h1>*/}
      <a href="/"><img className="w-full" src={VeloceMobile} alt="Wordmark" /></a>
    </div>
  );
}
