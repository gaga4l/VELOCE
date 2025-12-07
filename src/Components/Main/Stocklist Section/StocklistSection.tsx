import StocklistImage from "../../../assets/stocklistist image.jpg";
const StocklistSection = () => {
  return (
    <section className="w-full h-fit xl:h-[640px] xl:flex xl:flex-row">
      <div className="w-full h-fit px-[9px] py-[23px] md:h-[230px] bg-background1 md:px-0 md:flex md:justify-center">
        <p className="font-staatliches text-headline1 text-[32px] leading-[120%] tracking-[1%] text-center md:text-[38px] md:leading-[110%] md:w-[740px] md:text-left xl:w-[580px] xl:text-[42px] ">
          Experience the refined taste of Véloce. Visit our premium stockists
          for your next alcohol-free aperitif.
        </p>
      </div>
      <img className="w-full h-[375px] object-cover object-center md:h-[470px] xl:h-[640px]" src={StocklistImage} alt="stocklist image" />
    </section>
  );
};

export default StocklistSection;
