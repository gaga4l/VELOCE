import backImage from "../../../../../assets/himal-rana-zKTiEhatbxo-unsplash.jpg";
import RecognitionList from "./RecognitionList";
import DecorativeBorder from "../../../../../Components/Header/DecorativeBorder"
const FounderSection = () => {
  return (
    <section className="grid h-[1537px] md:h-[1280px] lg:grid-cols-2 lg:h-[800px]">
      <div className="bg-background2 h-fit flex flex-col gap-[41px] items-start px-[30px] py-10 md:h-[640px] lg:h-full">
        <p className="font-geist font-bold text-headline1 text-[13px] leading-[110%] tracking-[-5%] md:text-[14px] lg:text-[15px] ">
          RECOGNITION
        </p>
        <RecognitionList />
      </div>
      <div className="p-4 h-[800px] flex items-end md:h-[640px] lg:h-[800px] bg-cover bg-center" style={{ backgroundImage: `url(${backImage})`}}>
        <div className="bg-[#000000]/80 flex flex-col rounded-2xl gap-3.5 p-4 ">
          <div className="px-[27px] py-[7px] w-fit h-fit rounded-[50%/50%] outline outline-[#ffffff]">
            <p className="font-staatliches text-body2 text-[27.5px] leading-[110%] tracking-[-5%]">FOUNDER</p>
          </div>
          <p className="font-staatliches text-body2 text-[100px] leading-[80%] tracking-[1%] text-center md:text-[130px] lg:text-[150px]">MIKE VERA</p>
          <div className="bg-accent3 w-fit h-fit">
            <DecorativeBorder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
