import backImage from "../../../../../assets/himal-rana-zKTiEhatbxo-unsplash.jpg";
import FounderCircularTag from "../../../../../assets/Founder Circular Tag.svg"
import RecognitionList from "./RecognitionList";
import DecorativeBorder from "../../../../../Components/Header/DecorativeBorder";
const FounderSection = () => {
  return (
    <section className="grid h-[1537px] md:h-[1280px] xl:grid-cols-2 lg:h-[800px]">
      <div className="bg-background2 h-fit order-2 flex flex-col gap-[41px] items-start px-[30px] py-10 md:h-[640px] lg:h-full xl:order-1">
        <p className="font-geist font-bold text-headline1 text-[13px] leading-[110%] tracking-[-5%] md:text-[14px] lg:text-[15px] ">
          RECOGNITION
        </p>
        <RecognitionList />
      </div>
      <div className="p-4 h-[800px]  flex items-end justify-center md:h-[640px] lg:h-[800px]  bg-cover bg-center" style={{ backgroundImage: `url(${backImage})`}}>
        <div className="bg-[#000000]/80 max-w-[315px] flex flex-col items-center rounded-2xl gap-3.5 p-4 md:max-w-none xl:items-start">
          <div>
            <img src={FounderCircularTag} alt="Founder Circular Tag" />
          </div>
          <p className="font-staatliches text-body2 text-[100px] leading-[80%] tracking-[1%] self-center md:text-[130px] lg:text-[150px]">MIKE <br className="md:hidden" />VERA</p>
          <div className="bg-accent3">
            <DecorativeBorder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
