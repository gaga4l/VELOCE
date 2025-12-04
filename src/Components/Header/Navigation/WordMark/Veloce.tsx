import wordmark from "C:/Users/HP/OneDrive/Documents/Full stack projects/Frontend/react/VELOCE/src/assets/Wordmark.svg"
export default function Veloce() {
  return (
    <div className="w-[107px] h-[35.19px] ">
      {/*<h1 className="font-jaro text-4xl accent-accent1">{"véloce".toUpperCase()}</h1>*/}
      <img className="w-full" src={wordmark} alt="Wordmark" />
    </div>
  );
}
