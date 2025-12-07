import StocklistImage from "../../../assets/stocklistist image.jpg";
const StocklistSection = () => {
  return (
    <section className="w-full h-fit md:h-[230px] lg:h-[640px] lg:flex lg:flex-row">
      <div className="w-full h-fit px-[9px] py-[23px] bg-background1 md:px-0">
        <p className="font-staatliches text-headline1 text-[32px] leading-[120%] tracking-[1%] text-center md:text-[38px] md:leading-[110%] lg:[580px] lg:text-[42px] ">
          Experience the refined taste of Véloce. Visit our premium stockists
          for your next alcohol-free aperitif.
        </p>
      </div>
      <img className="w-full h-[375px] object-cover object-center md:h-[470px] lg:h-[640px]" src={StocklistImage} alt="stocklist image" />
    </section>
  );
};

export default StocklistSection;
